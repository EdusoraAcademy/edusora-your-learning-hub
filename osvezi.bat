@echo off
echo --- Saljem kod na GitHub ---
git add .
git commit -m "Automatski deploy"
git push origin main

echo --- Pokrecem deploy na serveru ---
ssh root@23.95.170.214 "cd /var/www && ./deploy.sh"

echo --- GOTOVO! Sajt je osvezen. ---
pause
