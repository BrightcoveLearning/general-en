sudo chmod -R g+w /Users/rcrooks/github

git pull

echo 'pulled general content'
# apis
cd ../apis
git pull

echo 'pulled apis'
# audience
cd ../audience
git pull

echo 'pulled audience'
# beacon
cd ../beacon-support
git pull

echo 'pulled beacon'
# campaign
git pull
cd ../campaign

echo 'pulled campaign'
# docs-integrations
cd ../docs-integrations
git pull

echo 'pulled docs-integrations'
# docs-support-home
cd ../docs-support-home
git pull

echo 'pulled docs-support-home'
# engage
cd ../engage
git pull

echo 'pulled engage'
# gallery
cd ../gallery
git pull

echo 'pulled engage'
# jekyll-template
cd ../jekyll-template
git pull

echo 'pulled jekyll-template'
# live
cd ../live
git pull

echo 'pulled live'
# player-dev
cd ../player-dev
git pull

echo 'pulled player-dev'
# sdks
cd ../sdks
git pull

echo 'pulled sdks'
# social
cd ../social
git pull

echo 'pulled social'
# ssai
cd ../ssai
git pull

echo 'pulled ssai'
# studio
cd ../studio
git pull

echo 'pulled studio'
# zencoder-support
cd ../zencoder-support
git pull

# staging-site - temporarily beacon-la
cd ../beacon-la
git pull
echo 'pulled staging site'
# in-app help
cd ../beacon-help
git pull
echo 'pulled staging site'

# BCL-developer-docs
cd ../BCL-developer-docs
git pull
echo 'pulled zencoder-support'

echo 'pulled BCL-developer-docs'
# BCL-Doc-Assets
cd /Users/rcrooks/git-bcl/BCL-Doc-Assets
git pull

echo 'pulled BCL-Doc-Assets'

cd /Users/rcrooks/git-bcl/BCL-General
git pull
echo 'pulled BCL-General'
echo 'all finished!'
