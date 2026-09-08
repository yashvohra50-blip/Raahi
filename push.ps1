Set-Location "C:\Users\Yash Vohra\.gemini\antigravity-ide\scratch\git_deploy"
$git = "C:\Users\Yash Vohra\.gemini\antigravity-ide\scratch\tools\git\cmd\git.exe"
& $git config user.name "Yash Vohra"
& $git config user.email "yashvohra@users.noreply.github.com"
& $git config --global --add safe.directory "C:/Users/Yash Vohra/.gemini/antigravity-ide/scratch/git_deploy"
& $git add -A
& $git status
& $git commit -m "Implement Raahi Fair top navbar pill, quick-access modal, NL search engine, and transparent verified pricing"
& $git push origin main
