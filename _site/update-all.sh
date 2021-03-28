sudo chmod -R g+w /Users/rcrooks/github

git pull
sudo bundle update
sudo bundle exec jekyll build --trace
git add --all
git commit --all -m general-update
git push
echo 'rebuilt general content'
# apis
cd ../apis-en
git pull
sudo bundle update
sudo bundle exec jekyll build --trace
git add --all
git commit --all -m general-update
git push
echo 'rebuilt apis'
# audience
cd ../audience-en
git pull
sudo bundle update
sudo bundle exec jekyll build --trace
git add --all
git commit --all -m general-update
git push
echo 'rebuilt audience'
# beacon
cd ../beacon
git pull
sudo bundle update
sudo bundle exec jekyll build --trace
git add --all
git commit --all -m general-update
git push
echo 'rebuilt beacon'
# beacon support
cd ../beacon-support-en
git pull
sudo bundle update
sudo bundle exec jekyll build --trace
git add --all
git commit --all -m general-update
git push
echo 'rebuilt beacon support'
# beacon private
cd ../beacon-private-en
git pull
sudo bundle update
sudo bundle exec jekyll build --trace
git add --all
git commit --all -m general-update
git push
echo 'rebuilt beacon private'
# campaign
git pull
cd ../campaign-en
sudo bundle update
sudo bundle exec jekyll build --trace
git add --all
git commit --all -m general-update
git push
echo 'rebuilt campaign'
# docs-integrations
cd ../docs-integrations-en
git pull
sudo bundle update
sudo bundle exec jekyll build --trace
git add --all
git commit --all -m general-update
git push
echo 'rebuilt docs-integrations'
# docs-support-home
cd ../docs-support-home-en
git pull
sudo bundle update
sudo bundle exec jekyll build --trace
git add --all
git commit --all -m general-update
git push
echo 'rebuilt docs-support-home'
# engage
cd ../engage-en
git pull
sudo bundle update
sudo bundle exec jekyll build --trace
git add --all
git commit --all -m general-update
git push
echo 'rebuilt engage'
# gallery
cd ../gallery-en
git pull
sudo bundle update
sudo bundle exec jekyll build --trace
git add --all
git commit --all -m general-update
git push
echo 'rebuilt engage'
# jekyll-template
cd ../jekyll-template
git pull
sudo bundle update
# sudo bundle exec jekyll build --trace
git add --all
git commit --all -m general-update
git push
echo 'rebuilt jekyll-template'
# live
cd ../live-en
git pull
sudo bundle update
sudo bundle exec jekyll build --trace
git add --all
git commit --all -m general-update
git push
echo 'rebuilt live'
# player-dev
cd ../player-en
git pull
sudo bundle update
sudo bundle exec jekyll build --trace
git add --all
git commit --all -m general-update
git push
echo 'rebuilt player-dev'
# sdks
cd ../sdks-en
git pull
sudo bundle update
sudo bundle exec jekyll build --trace
git add --all
git commit --all -m general-update
git push
echo 'rebuilt sdks'
# social
cd ../social-en
git pull
sudo bundle update
sudo bundle exec jekyll build --trace
git add --all
git commit --all -m general-update
git push
echo 'rebuilt social'
# ssai
cd ../ssai-en
git pull
sudo bundle update
sudo bundle exec jekyll build --trace
git add --all
git commit --all -m general-update
git push
echo 'rebuilt ssai'
# studio
cd ../studio-en
git pull
sudo bundle update
sudo bundle exec jekyll build --trace
git add --all
git commit --all -m general-update
git push
echo rebuilt studio
cd ../zencoder-en
git pull
sudo bundle update
sudo bundle exec jekyll build --trace
git add --all
git commit --all -m general-update
git push
echo 'rebuilt zencoder-support'
cd ../staging-site
git pull
sudo bundle update
sudo bundle exec jekyll build --trace
git add --all
git commit --all -m general-update
git push
echo 'rebuilt staging-site'
cd ../test-site
git pull
sudo bundle update
sudo bundle exec jekyll build --trace
git add --all
git commit --all -m general-update
git push
echo 'rebuilt test-site'
echo 'all finished!'
