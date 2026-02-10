# Deployment Guide — Operations Dashboard

## Prerequisites

- Ubuntu 24.04 LTS server (Digital Ocean droplet)
- Node.js 20+ installed
- PM2 process manager (`npm install -g pm2`)
- Nginx (reverse proxy)

## Quick Deploy

```bash
# 1. Clone the repo
git clone <your-repo-url> /opt/operations-dashboard
cd /opt/operations-dashboard

# 2. Install dependencies
npm ci --production=false

# 3. Build the app
npm run build

# 4. Start with PM2
pm2 start ecosystem.config.js
pm2 save
pm2 startup  # follow the printed command to enable on boot
```

## Nginx Configuration

Create `/etc/nginx/sites-available/dashboard`:

```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

```bash
sudo ln -s /etc/nginx/sites-available/dashboard /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

## SSL with Let's Encrypt

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d your-domain.com
```

## Useful Commands

```bash
pm2 status                  # Check app status
pm2 logs operations-dashboard  # View logs
pm2 restart operations-dashboard  # Restart
npm run build && pm2 restart operations-dashboard  # Redeploy
```
