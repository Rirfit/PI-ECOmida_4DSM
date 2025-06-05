import os
from dotenv import load_dotenv

load_dotenv()

class Config:
    """Configuração base"""
    SECRET_KEY = os.getenv('SECRET_KEY', 'sua_chave_super_secreta_aqui')
    MONGO_URI = os.getenv('MONGO_URI')
    DB_NAME = os.getenv('DB_NAME', 'pi4alimentos')
    
    # Configurações de JWT
    JWT_EXPIRATION_HOURS = 24
    JWT_ALGORITHM = 'HS256'
    
    # Configurações de email (opcional)
    MAIL_SERVER = os.getenv('MAIL_SERVER', 'smtp.gmail.com')
    MAIL_PORT = int(os.getenv('MAIL_PORT', 587))
    MAIL_USE_TLS = os.getenv('MAIL_USE_TLS', 'True').lower() == 'true'
    MAIL_USERNAME = os.getenv('MAIL_USERNAME')
    MAIL_PASSWORD = os.getenv('MAIL_PASSWORD')
    
    # Configurações de validação
    MIN_PASSWORD_LENGTH = 6
    MAX_PASSWORD_LENGTH = 128
    
    # Configurações de rate limiting (futuro)
    RATE_LIMIT_STORAGE_URL = os.getenv('REDIS_URL', 'memory://')

class DevelopmentConfig(Config):
    """Configuração para desenvolvimento"""
    DEBUG = True
    TESTING = False

class ProductionConfig(Config):
    """Configuração para produção"""
    DEBUG = False
    TESTING = False
    
    # Em produção, sempre usar variáveis de ambiente
    SECRET_KEY = os.getenv('SECRET_KEY')
    if not SECRET_KEY:
        raise ValueError("SECRET_KEY deve ser definida em produção")

class TestingConfig(Config):
    """Configuração para testes"""
    DEBUG = True
    TESTING = True
    DB_NAME = 'test_pi4alimentos'

# Configuração baseada no ambiente
config = {
    'development': DevelopmentConfig,
    'production': ProductionConfig,
    'testing': TestingConfig,
    'default': DevelopmentConfig
}