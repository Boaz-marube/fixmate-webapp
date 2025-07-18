from langchain.memory import ConversationBufferMemory
import logging

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

def get_memory():
    try:
        return ConversationBufferMemory(
            memory_key="chat_history",
            return_messages=True,
            input_key="question",
        )
    except Exception as e:
        logger.error(f"🚨Error Loading memory: {e}")
        raise