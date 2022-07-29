set -e
npm run build
cd dist
echo 'enfo-vill.hu' > CNAME

git init
git add .
git commit -m 'deploy'

git push -f git@github.com:oliverbalog/ENFO-Vill.git master:gh-pages

cd -