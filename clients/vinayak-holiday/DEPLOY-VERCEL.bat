@echo off
cd /d "%~dp0"
echo.
echo  Vinayak Holidays demo ko Vercel par live kar rahe hain...
echo  Pehli baar browser mein Vercel login maangega. Login karke wapas yahan aao.
echo.
where node >nul 2>nul
if errorlevel 1 (
  echo  Node.js install nahi hai. https://nodejs.org se LTS install karo, phir dobara chalao.
  pause
  exit /b 1
)
call npx vercel@latest --prod --yes
echo.
echo  Upar "Production" wala https link hi aapka live demo hai. Client ko wahi bhejo.
pause
