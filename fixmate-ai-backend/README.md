# 🛠️ FixMate AI Backend

Welcome to the FixMate AI Backend — a FastAPI-powered chatbot service that helps users find trusted home repair services in Nairobi. Think **Uber, but for fixing stuff!**

This API powers the FixMate Assistant, answering user questions using a custom-trained LLM with real business data.

---

## 📦 Features

- 🤖 AI chatbot trained on FixMate repair service data
- ⚡ FastAPI for performance and ease of use
- 📚 LangChain + Hugging Face for Retrieval-Augmented Generation (RAG)
- ☁️ Ready for deployment on **Render** or Docker
- 🔐 Secure environment via `.env` variables

---

## 🚀 Getting Started

### 🔧 Requirements

- Python 3.10+
- pip
- Docker (optional for container builds)
- Hugging Face API key

### 📁 Project Structure

```
fixmate-ai-backend/
├── app/
│   ├── main.py
│   ├── chatbot.py
│   ├── vector_store.py
│   ├── memory.py
│   ├── data_loader.py
│   └── prompt_template.py
├── startup_data/
│   └── (your .txt, .pdf, .md files for RAG)
├── requirements.txt
├── .env
├── Dockerfile
└── README.md
```

---

## 🧪 Running Locally

### 1. Clone the repo

```bash
git clone https://github.com/rayymaxx/fixmate-webapp.git
cd fixmate-webapp/fixmate-ai-backend
```

### 2. Create and activate a virtual environment

```bash
python -m venv venv
source venv/bin/activate   # On Windows: venv\Scripts\activate
```

### 3. Install dependencies

```bash
pip install -r requirements.txt
```

### 4. Add your `.env` file

Create a `.env` file in the root folder:

```env
HUGGINGFACE_API_KEY=your_api_key_here
```

### 5. Run the app

```bash
uvicorn app.main:app --reload
```

Go to [http://localhost:8000/docs](http://localhost:8000/docs) for Swagger UI.

---

## 🐳 Docker Setup

To run inside Docker:

```bash
docker build -t fixmate-chatbot .
docker run -d -p 8000:8000 fixmate-chatbot
```

---

## ☁️ Deploying on Render

### 1. Create a new **Web Service**
- Build Command: `pip install -r requirements.txt`
- Start Command: `uvicorn app.main:app --host 0.0.0.0 --port 8000`

### 2. Add environment variables in the Render Dashboard:
- `HUGGINGFACE_API_KEY=your_key`

---

## 🧠 Technologies Used

- **FastAPI** — modern web framework
- **LangChain** — context-aware LLM framework
- **Hugging Face Inference API** — for running LLaMA 2 or similar
- **Chroma** — vector store for document search
- **Docker** — containerized deployment
- **Render** — cloud hosting

---

## 🙋 FAQ

### What kind of questions can the chatbot answer?

It can handle:
- Service types offered
- Pricing and availability
- Booking and location info
- Complaints and feedback help
- FixMate support questions

### Can I train it on new data?

Yes! Just add documents to the `startup_data/` folder and restart the app. The vector store will be rebuilt automatically.

---

## 🤝 Contributing

Have improvements or ideas? PRs welcome!

---

## 🧯 Support

If you run into issues, feel free to [open an issue](https://github.com/rayymaxx/fixmate-webapp/issues) or email: **support@fixmate.co.ke**

---

## ❤️ Karibu FixMate!

We're your neighborhood tech-savvy fix-it buddy 🛠️ 
