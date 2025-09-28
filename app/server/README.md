# Server - FastAPI Application

Backend component of the Template Utils sample application. Built with Python 3.11 and FastAPI to provide RESTful API services.

## 🎯 Overview

This server application processes button click requests from clients, stores click history in a PostgreSQL database, and provides statistical information through API endpoints.

## 🛠️ Technology Stack

- **Python**: 3.11
- **FastAPI**: 0.104.1 (Web framework)
- **SQLAlchemy**: 2.0.23 (ORM)
- **PostgreSQL**: psycopg2-binary 2.9.9 (Database driver)
- **Uvicorn**: 0.24.0 (ASGI server)
- **Pydantic**: 2.5.0 (Data validation)

## 📁 Directory Structure

```
server/
├── src/
│   └── main.py            # FastAPI application
├── requirements.txt       # Python dependencies
├── Dockerfile            # Docker configuration
└── README.md             # This file
```

## ⚙️ Environment Variables

### Required Environment Variables

| Variable | Example | Description |
|----------|---------|-------------|
| `DATABASE_URL` | `postgresql://postgres:postgres@db:5432/postgres` | PostgreSQL database connection URL |

### Optional Environment Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `PYTHONPATH` | `/app/src:/app` | Python module search path |

### Docker Compose Configuration Example

```yaml
environment:
  - DATABASE_URL=postgresql://postgres:postgres@db:5432/postgres
  - PYTHONPATH=/app/src:/app
```

### Local Development Configuration Example

```bash
export DATABASE_URL="postgresql://postgres:postgres@localhost:5432/postgres"
```

## 🚀 Setup and Launch

### Using Docker Compose (Recommended)

```bash
# From project root directory
cd /workspaces/template.utils/app
docker-compose up --build
```

Access the server:
- API: http://localhost:8000
- Documentation: http://localhost:8000/docs

### Local Development Environment

```bash
# Navigate to server directory
cd /workspaces/template.utils/app/server

# Create virtual environment (recommended)
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Set environment variables
export DATABASE_URL="postgresql://postgres:postgres@localhost:5432/postgres"

# Start server
uvicorn src.main:app --reload --host 0.0.0.0 --port 8000
```

**Note**: For local development, you also need to start the PostgreSQL database separately.

## 📡 API Endpoints

### Basic Information

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/` | GET | Get API information |
| `/health` | GET | Health check |
| `/docs` | GET | Swagger UI (API documentation) |

### Hello Template API

#### POST /api/hello
Records button clicks and returns message with click count.

**Response Example:**
```json
{
  "message": "Hello Template! 🎉",
  "click_count": 1
}
```

#### GET /api/stats
Retrieves click statistics.

**Response Example:**
```json
{
  "total_clicks": 1,
  "latest_click": "2025-09-14T21:18:08.269653"
}
```

## 🗄️ Database Schema

### click_logs Table

| Column | Data Type | Constraint | Description |
|--------|-----------|------------|-------------|
| id | INTEGER | PRIMARY KEY | Click ID (auto-increment) |
| clicked_at | TIMESTAMP | DEFAULT NOW() | Click timestamp |

### Database Configuration

- **Automatic Table Creation**: Tables are automatically created on application startup
- **Transaction Management**: Automatic rollback on errors
- **Connection Pooling**: Efficient connection management via SQLAlchemy

## 🔧 Development Commands

### Basic Commands

```bash
# Start development server (with hot reload)
uvicorn src.main:app --reload --host 0.0.0.0 --port 8000

# Start production server
uvicorn src.main:app --host 0.0.0.0 --port 8000

# Install dependencies
pip install -r requirements.txt

# Update dependencies
pip freeze > requirements.txt
```

### Database Operations

```bash
# Check PostgreSQL connection
docker-compose exec db pg_isready -U postgres

# Connect to database
docker-compose exec db psql -U postgres -d postgres

# List tables
docker-compose exec db psql -U postgres -d postgres -c "\dt"

# View data
docker-compose exec db psql -U postgres -d postgres -c "SELECT * FROM click_logs;"
```

## 🐳 Docker Configuration

### Dockerfile
```dockerfile
FROM python:3.11-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY . .
EXPOSE 8000
CMD ["uvicorn", "src.main:app", "--host", "0.0.0.0", "--port", "8000"]
```

### Development Volume Mounts
- Source code: `./server:/app`

## 🔍 Troubleshooting

### Common Issues

1. **Database connection error**
   ```bash
   # Check database status
   docker-compose exec db pg_isready -U postgres

   # Check database logs
   docker-compose logs db

   # Verify environment variables
   echo $DATABASE_URL
   ```

2. **Port 8000 already in use**
   ```bash
   # Check process
   lsof -i :8000
   # Kill process
   kill -9 <PID>
   ```

3. **Python dependency errors**
   ```bash
   # Recreate virtual environment
   rm -rf venv
   python -m venv venv
   source venv/bin/activate
   pip install -r requirements.txt
   ```

4. **CORS errors**
   - Check CORSMiddleware configuration in `main.py`
   - Verify allowed origins are correctly configured

### Log Monitoring

```bash
# Check logs with Docker Compose
docker-compose logs server

# Real-time log monitoring
docker-compose logs -f server

# Error level only
docker-compose logs server | grep ERROR
```

## 🎯 Architecture Details

### Layer Structure
1. **API Layer**: HTTP endpoints via FastAPI
2. **Business Logic Layer**: Data processing and business logic
3. **Data Access Layer**: Database access via SQLAlchemy

### Key Components
- **FastAPI App**: Main application
- **SQLAlchemy ORM**: Database model definitions
- **Pydantic Models**: API response/request type definitions
- **CORS Middleware**: Cross-origin request handling

### Security Features
- CORS configuration with proper origin restrictions
- SQL injection protection (ORM usage)
- Input validation (Pydantic)

## 🚀 Extension Ideas

### Feature Extensions
- Authentication & authorization (JWT)
- API rate limiting
- Enhanced logging capabilities
- Metrics collection (Prometheus, etc.)

### Infrastructure Extensions
- Database migrations (Alembic)
- Test automation (pytest)
- API load testing
- Enhanced container health checks

## 📝 License

This project is for sample purposes and is free to use and modify.
