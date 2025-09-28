# Client - React Application

Frontend component of the Template Utils sample application. Built with React 18 to provide a simple button click functionality.

## 🎯 Overview

This client application is a simple web application that displays "Hello Template! 🎉" message when users click a button, updating the click count in real-time.

## 🛠️ Technology Stack

- **React**: 18.2.0
- **Axios**: 1.6.0 (API communication)
- **React Scripts**: 5.0.1 (development and build tools)
- **Node.js**: v18+ recommended

## 📁 Directory Structure

```
client/
├── public/
│   └── index.html          # HTML template
├── src/
│   ├── App.js             # Main application component
│   ├── App.css            # Application styles
│   ├── index.js           # Entry point
│   └── index.css          # Global styles
├── package.json           # Node.js dependencies
├── Dockerfile             # Docker configuration
└── README.md              # This file
```

## ⚙️ Environment Variables

### Environment Variables in Docker Compose

| Variable | Default | Description |
|----------|---------|-------------|
| `CHOKIDAR_USEPOLLING` | `true` | File change detection method (required in Docker containers) |

### Development Configuration

- **Proxy Configuration**: Set `"proxy": "http://server:8000"` in `package.json`
- **Port**: Uses port 3000 by default

## 🚀 Setup and Launch

### Using Docker Compose (Recommended)

```bash
# From project root directory
cd /workspaces/template.utils/app
docker compose up --build
```

Access the application: http://localhost:3000

### Local Development Environment

```bash
# Navigate to client directory
cd /workspaces/template.utils/app/client

# Install dependencies
npm install

# Start development server
npm start
```

**Note**: For local development, you also need to start the server (FastAPI) and database (PostgreSQL) separately.

## 📡 API Integration

The client communicates with the following API endpoints:

- `POST /api/hello` - Records button clicks and returns click count
- `GET /api/stats` - Retrieves statistics (optional)

### API Communication Setup

The proxy configuration in `package.json` automatically forwards API calls to the backend server during development.

```json
{
  "proxy": "http://server:8000"
}
```

## 🎮 Features

### Main Features
- **Button Click**: Click the "Click Me!" button
- **Message Display**: Shows "Hello Template! 🎉" message
- **Click Counter**: Real-time click count updates
- **Data Persistence**: Click history is saved to database

### UI/UX Features
- Responsive design
- Simple and intuitive interface
- Real-time updates

## 🔧 Development Commands

```bash
# Start development server
npm start

# Build for production
npm run build

# Run tests
npm test

# Eject configuration (not recommended)
npm run eject
```

## 🐳 Docker Configuration

### Dockerfile
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
```

### Development Volume Mounts
- Source code: `./client:/app`
- node_modules: `/app/node_modules` (anonymous volume)

## 🔍 Troubleshooting

### Common Issues

1. **Port 3000 already in use**
   ```bash
   # Check process
   lsof -i :3000
   # Kill process
   kill -9 <PID>
   ```

2. **Cannot connect to API server**
   - Verify server is running: http://localhost:8000
   - Check proxy configuration in `package.json`

3. **Dependency errors**
   ```bash
   # Remove and reinstall dependencies
   rm -rf node_modules package-lock.json
   npm install
   ```

4. **Changes not reflected in Docker**
   - Verify `CHOKIDAR_USEPOLLING=true` environment variable is set
   - Restart container: `docker-compose restart client`

### Log Monitoring

```bash
# Check logs with Docker Compose
docker-compose logs client

# Real-time log monitoring
docker-compose logs -f client
```

## 🎯 Development Tips

### Code Structure
- `App.js`: Main logic and UI
- `App.css`: Styling
- API communication using Axios

### Extension Ideas
- Add state management libraries (Redux, Zustand, etc.)
- Integrate UI component libraries (Material-UI, Chakra UI, etc.)
- Migrate to TypeScript
- Add test cases

## 📝 License

This project is for sample purposes and is free to use and modify.
