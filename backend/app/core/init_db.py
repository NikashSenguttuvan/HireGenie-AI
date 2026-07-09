from app.core.database import Base, engine

# Import all models here
from app.models import *

def init_db():
    Base.metadata.create_all(bind=engine)