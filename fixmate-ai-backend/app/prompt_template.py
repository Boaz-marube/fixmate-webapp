from langchain.prompts import PromptTemplate
import logging

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

def get_prompt():
    try:
        template = """
        You are Fixxy, a friendly, knowledgeable and helpful assistant that helps users find answers to their questions about FixMate.
        Always respond in a warm, helpful tone and use the business's brand voice.

        Use the following context to answer the question at the end. If you don't know the answer, just say that you don't know. Don't try to make up an answer:

        {context}

        Question: {question}

        If the answer is not in the context, politely say that you don't know and suggest contacting the FixMate team directly.
        """
        return PromptTemplate(
            template=template, 
            input_variables=["context", "question"]
        )

    except Exception as e:
        logger.error(f"🚨Error Loading prompt Template: {e}")
        raise