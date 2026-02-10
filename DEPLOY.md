# Deployment Guide — Operations Dashboard

## Prerequisites

- Ubuntu 24.04 LTS server (Digital Ocean droplet)
- Python 3.10+
- Nginx (reverse proxy)

## Quick Deploy

```bash
# 1. Clone the repo
git clone <your-repo-url> /opt/operations-dashboard
cd /opt/operations-dashboard

# 2. Create virtual environment and install dependencies
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt

# 3. Run with Gunicorn
gunicorn --bind 127.0.0.1:3000 --workers 3 app:app

# Or run in development mode
python app.py
```

## Systemd Service (recommended for production)

Create `/etc/systemd/system/opsdash.service`:

```ini
[Unit]
Description=Operations Dashboard
After=network.target

[Service]
User=www-data
Group=www-data
WorkingDirectory=/opt/operations-dashboard
Environment="PATH=/opt/operations-dashboard/venv/bin"
ExecStart=/opt/operations-dashboard/venv/bin/gunicorn --bind 127.0.0.1:3000 --workers 3 app:app
Restart=always
RestartSec=5

[Install]
WantedBy=multi-user.target
```

```bash
sudo systemctl daemon-reload
sudo systemctl enable opsdash
sudo systemctl start opsdash
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

    location /static {
        alias /opt/operations-dashboard/static;
        expires 30d;
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
sudo systemctl status opsdash     # Check status
sudo journalctl -u opsdash -f     # View logs
sudo systemctl restart opsdash    # Restart
```
