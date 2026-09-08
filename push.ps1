Set-Location "C:\Users\Yash Vohra\.gemini\antigravity-ide\scratch\git_deploy"
$git = "C:\Users\Yash Vohra\.gemini\antigravity-ide\scratch\tools\git\cmd\git.exe"
& $git config user.name "Yash Vohra"
& $git config user.email "yashvohra@users.noreply.github.com"
& $git config --global --add safe.directory "C:/Users/Yash Vohra/.gemini/antigravity-ide/scratch/git_deploy"
& $git add -A
& $git commit -m "Commit push script"
& $git pull --rebase origin main
& $git push origin main
