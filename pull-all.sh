sudo chmod -R g+w /Users/rcrooks/github

git pull

echo 'pulled general content'
# apis
cd ../apis-en
git pull

echo 'pulled apis'
# audience
cd ../audience-en
git pull

echo 'pulled audience'
# beacon
cd ../beacon-support-en
git pull

echo 'pulled beacon help'
# beacon help
cd ../beacon-en
git pull

echo 'pulled beacon'
# beacon private
cd ../beacon-private-en
git pull

echo 'pulled beacon private'
# campaign
git pull
cd ../campaign-en

echo 'pulled campaign'
# docs-integrations
cd ../integrations-en
git pull

echo 'pulled docs-integrations'
# docs-support-home
cd ../docs-support-home-en
git pull

echo 'pulled docs-support-home'
# engage
cd ../engage-en
git pull

echo 'pulled engage'
# gallery
cd ../gallery-en
git pull

echo 'pulled engage'
# jekyll-template
cd ../jekyll-template
git pull

echo 'pulled jekyll-template'
# live
cd ../live-en
git pull

echo 'pulled live'
# player-dev
cd ../player-en
git pull

echo 'pulled player-dev'
# sdks
cd ../sdks-en
git pull

echo 'pulled sdks'
# social
cd ../social-en
git pull

echo 'pulled social'
# ssai
cd ../ssai-en
git pull

echo 'pulled ssai'
# studio
cd ../studio-en
git pull

echo 'pulled studio'
# zencoder-support
cd ../zencoder-en
git pull

echo 'pulled zencoder-support'

# BCL-developer-docs
cd /Users/rcrooks/git-bcl/BCL-developer-docs
git pull

echo 'pulled BCL-developer-docs'

cd /Users/rcrooks/git-bcl/BCL-General
git pull
echo 'pulled BCL-General'
echo 'all finished!'
