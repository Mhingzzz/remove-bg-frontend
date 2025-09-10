# RemoveBG AI Frontend - Production Deployment Guide

This guide will help you deploy the RemoveBG AI Frontend application to production using Docker.

## 🚀 Quick Start

### Prerequisites

- Docker and Docker Compose installed
- OpenSSL (for SSL certificates)
- Git

### 1. Clone and Setup

```bash
git clone <your-repo-url>
cd rembg-frontend
```

### 2. Environment Configuration

```bash
# Copy the environment template
cp .env.production.template .env.production.local

# Edit the environment file with your settings
nano .env.production.local
```

### 3. Deploy

**For Linux/macOS:**

```bash
chmod +x deploy.sh
./deploy.sh
```

**For Windows:**

```cmd
deploy.bat
```

## 📋 Manual Deployment

### 1. Build the Docker Image

```bash
docker build -t rembg-frontend:latest .
```

### 2. Create SSL Certificates

```bash
mkdir -p ssl
openssl req -x509 -newkey rsa:4096 -keyout ssl/key.pem -out ssl/cert.pem -days 365 -nodes \
    -subj "/C=US/ST=State/L=City/O=Organization/OU=OrgUnit/CN=localhost"
```

### 3. Start the Application

```bash
docker-compose up -d
```

### 4. Verify Deployment

```bash
# Check health
curl http://localhost:3000/api/health

# View logs
docker-compose logs -f
```

## 🔧 Configuration

### Environment Variables

Key environment variables for production:

- `NODE_ENV=production`
- `NEXT_PUBLIC_API_URL` - Your backend API URL
- `NEXT_PUBLIC_APP_URL` - Your frontend domain
- `PORT=3000` - Application port

### SSL Certificates

For production, replace the self-signed certificates in the `ssl/` directory with proper SSL certificates from a trusted CA.

### Nginx Configuration

The `nginx.conf` file includes:

- SSL termination
- Gzip compression
- Security headers
- Rate limiting
- Static file caching

## 📊 Monitoring

### Health Check

The application includes a health check endpoint at `/api/health`

### Logs

```bash
# View application logs
docker-compose logs rembg-frontend

# View Nginx logs
docker-compose logs nginx

# Follow logs in real-time
docker-compose logs -f
```

### Docker Health Check

The Docker container includes built-in health checks that monitor the application status.

## 🛠️ Maintenance

### Update Application

```bash
# Pull latest code
git pull

# Rebuild and restart
docker-compose down
docker build -t rembg-frontend:latest .
docker-compose up -d
```

### Scale Application

```bash
# Scale to multiple instances
docker-compose up -d --scale rembg-frontend=3
```

### Backup Data

```bash
# Backup volumes (if any)
docker run --rm -v rembg_data:/data -v $(pwd):/backup ubuntu tar czf /backup/backup.tar.gz /data
```

## 🔒 Security Considerations

1. **Use proper SSL certificates** in production
2. **Set strong environment variables** for secrets
3. **Enable firewall rules** to restrict access
4. **Regular security updates** for base images
5. **Monitor application logs** for suspicious activity

## 🚦 Load Balancing

For high-traffic scenarios, consider:

- Multiple application instances
- External load balancer (AWS ALB, Cloudflare, etc.)
- CDN for static assets
- Redis for session storage

## 📈 Performance Optimization

- Use external image optimization service
- Implement Redis caching
- Enable CDN for static assets
- Monitor and optimize bundle size
- Use proper image formats (WebP, AVIF)

## 🐛 Troubleshooting

### Common Issues

1. **Port already in use**

   ```bash
   docker-compose down
   sudo lsof -i :3000
   ```

2. **SSL certificate errors**

   ```bash
   # Regenerate certificates
   rm -rf ssl/
   mkdir ssl/
   # Run SSL generation command again
   ```

3. **Build failures**

   ```bash
   # Clean Docker cache
   docker system prune -a
   ```

4. **Health check failing**
   ```bash
   # Check application logs
   docker-compose logs rembg-frontend
   ```

### Support

For issues and support, please check:

- Application logs: `docker-compose logs`
- GitHub Issues
- Documentation

## 📄 License

[Your License Here]
