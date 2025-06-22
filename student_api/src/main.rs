use actix_files::{Files, NamedFile};
use actix_web::{get, post, web, App, HttpResponse, HttpServer, Responder, Result};
use serde::Deserialize;
use uuid::Uuid;

mod pdf;
use pdf::generator::create_pdf;

#[derive(Deserialize)]
struct StudentData {
    name: String,
    total_marks: f32,
    subjects: u32,
}

fn calculate_average(total: f32, subjects: u32) -> f32 {
    total / subjects as f32
}

fn assign_grade(avg: f32) -> &'static str {
    if avg >= 90.0 {
        "A"
    } else if avg >= 75.0 {
        "B"
    } else if avg >= 60.0 {
        "C"
    } else {
        "D"
    }
}

#[post("/generate-report")]
async fn generate(data: web::Json<StudentData>) -> impl Responder {
    let avg = calculate_average(data.total_marks, data.subjects);
    let grade = assign_grade(avg);

    std::fs::create_dir_all("pdfs").expect("Failed to create 'pdfs' directory");

    let filename = format!("pdfs/report_{}.pdf", Uuid::new_v4());
    println!("📄 Saving PDF to: {}", filename);

    match create_pdf(&filename, &data.name, data.total_marks, data.subjects, avg, grade) {
        Ok(_) => HttpResponse::Ok().json(serde_json::json!({
            "average": avg,
            "grade": grade,
            "pdf": format!("/{}", filename)
        })),
        Err(e) => {
            eprintln!("❌ PDF generation error: {}", e);
            HttpResponse::InternalServerError().body(format!("PDF generation failed: {}", e))
        }
    }
}

// ✅ React SPA fallback
async fn serve_spa() -> Result<NamedFile> {
    Ok(NamedFile::open("static/index.html")?)
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    println!("🚀 Hosting frontend + backend at http://localhost:8080");

    HttpServer::new(|| {
        App::new()
            .service(generate)
            .service(Files::new("/pdfs", "./pdfs").show_files_listing())
            .service(Files::new("/", "./static").index_file("index.html"))
            .default_service(web::get().to(serve_spa))
    })
    .bind(("127.0.0.1", 8080))?
    .run()
    .await
}
