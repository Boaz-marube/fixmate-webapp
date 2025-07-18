from fastapi import FastAPI, Request, HTTPException
from fastapi.middleware.cors import CORSMiddleware

from pydantic import BaseModel

from app.chatbot import build_chatbot_chain
from app.chat_logger import log_query

import uuid
import logging

app = FastAPI()

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ChatRequest(BaseModel):
    session_id: str | None = None
    message: str

chatbot_chain = None

chat_sessions = {}

@app.on_event("startup")
async def startup_event():
    global chatbot_chain
    logging.info("🚀FixMate Chatbot backend is starting up!")
    chatbot_chain = build_chatbot_chain()
    logger.info("🚀FixMate Chatbot backend is started!")


@app.get("/")
async def root():
    return {
        "message": "✅FixMate Chatbot backend is running!",
        "docs": "http://localhost:8000/docs",
        }

@app.get("/health")
async def health():
    return {
        "status": "✅Healthy",
        }

@app.post("/chat")
async def chat(request: ChatRequest):
    try:
        if not request.message.strip():
            raise HTTPException(status_code=400, detail="🚨Message is empty")
        
        session_id = request.session_id or str(uuid.uuid4())

        if session_id not in chat_sessions:
            chat_sessions[session_id] = build_chatbot_chain()
            logger.info(f"🚀New session created: {session_id}")

        chain = chat_sessions[session_id]

        response = chain.invoke({"question": request.message})
        answer  = response.get("answer", "Sorry I couldn't find an answer to your question.")

        log_query(session_id=session_id, question=request.message, answer=answer)

        return {
            "response": answer,
            "session_id": session_id,
            }
    
    except Exception as e:
        logger.error(f"🚨Chatbot Error: {e}")
        raise HTTPException(status_code=500, detail=str(e))

        

