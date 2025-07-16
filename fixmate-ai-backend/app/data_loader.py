from langchain_community.document_loaders import TextLoader, DirectoryLoader
import os 
import logging

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA_PATH = os.path.join(BASE_DIR, "startup_data")


def load_documents():
    try:
        if not os.paths.exists(DATA_PATH):
            raise FileNotFoundError(
                f"🚨Data path does not exist: {DATA_PATH}"
            )
        loader = DirectoryLoader(DATA_PATH, glob="*.txt",loader_cls=TextLoader)
        docs = loader.load()

        if not docs:
            raise ValueError(f"🚨No documents found in {DATA_PATH}.")

        logger.info(f"🚀Loaded {len(docs)} documents from {DATA_PATH}.")
        return docs
    
    except Exception as e:
        logger.error(f"🚨Error loading documents: {e}")
        raise