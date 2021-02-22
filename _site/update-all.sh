sudo chmod -R g+w /Users/rcrooks/github

git pull
sudo bundle update
sudo bundle exec jekyll build --trace
git add --all
git commit --all -m general-update
git push
echo 'rebuilt general content'
# apis
cd ../apis
git pull
sudo bundle update
sudo bundle exec jekyll build --trace
git add --all
git commit --all -m general-update
git push
echo 'rebuilt apis'
# audience
cd ../audience
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
cd ../beacon-support
git pull
sudo bundle update
sudo bundle exec jekyll build --trace
git add --all
git commit --all -m general-update
git push
echo 'rebuilt beacon support'
# beacon private
cd ../beacon-private
git pull
sudo bundle update
sudo bundle exec jekyll build --trace
git add --all
git commit --all -m general-update
git push
echo 'rebuilt beacon private'
# campaign
git pull
cd ../campaign
sudo bundle update
sudo bundle exec jekyll build --trace
git add --all
git commit --all -m general-update
git push
echo 'rebuilt campaign'
# docs-integrations
cd ../docs-integrations
git pull
sudo bundle update
sudo bundle exec jekyll build --trace
git add --all
git commit --all -m general-update
git push
echo 'rebuilt docs-integrations'
# docs-support-home
cd ../docs-support-home
git pull
sudo bundle update
sudo bundle exec jekyll build --trace
git add --all
git commit --all -m general-update
git push
echo 'rebuilt docs-support-home'
# engage
cd ../engage
git pull
sudo bundle update
sudo bundle exec jekyll build --trace
git add --all
git commit --all -m general-update
git push
echo 'rebuilt engage'
# gallery
cd ../gallery
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
cd ../live
git pull
sudo bundle update
sudo bundle exec jekyll build --trace
git add --all
git commit --all -m general-update
git push
echo 'rebuilt live'
# player-dev
cd ../player-dev
git pull
sudo bundle update
sudo bundle exec jekyll build --trace
git add --all
git commit --all -m general-update
git push
echo 'rebuilt player-dev'
# sdks
cd ../sdks
git pull
sudo bundle update
sudo bundle exec jekyll build --trace
git add --all
git commit --all -m general-update
git push
echo 'rebuilt sdks'
# social
cd ../social
git pull
sudo bundle update
sudo bundle exec jekyll build --trace
git add --all
git commit --all -m general-update
git push
echo 'rebuilt social'
# ssai
cd ../ssai
git pull
sudo bundle update
sudo bundle exec jekyll build --trace
git add --all
git commit --all -m general-update
git push
echo 'rebuilt ssai'
# studio
cd ../studio
git pull
sudo bundle update
sudo bundle exec jekyll build --trace
git add --all
git commit --all -m general-update
git push
echo rebuilt studio
cd ../zencoder-support
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
