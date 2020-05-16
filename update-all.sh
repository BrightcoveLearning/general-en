git pull
sudo bundle update
jekyll build
git add --all
git commit --all -m general-update
git push
echo 'rebuilt general content'
# apis
cd ../apis
git pull
sudo bundle update
jekyll build
git add --all
git commit --all -m general-update
git push
echo 'rebuilt apis'
# audience
cd ../audience
git pull
sudo bundle update
jekyll build
git add --all
git commit --all -m general-update
git push
echo 'rebuilt audience'
# beacon
cd ../beacon-support
git pull
sudo bundle update
jekyll build
git add --all
git commit --all -m general-update
git push
echo 'rebuilt beacon'
# campaign
git pull
cd ../campaign
sudo bundle update
jekyll build
git add --all
git commit --all -m general-update
git push
echo 'rebuilt campaign'
# docs-cms-connectors
cd ../docs-cms-connectors
git pull
sudo bundle update
jekyll build
git add --all
git commit --all -m general-update
git push
echo 'rebuilt docs-cms-connectors'
# docs-support-home
cd ../docs-support-home
git pull
sudo bundle update
jekyll build
git add --all
git commit --all -m general-update
git push
echo 'rebuilt docs-support-home'
# engage
cd ../engage
git pull
sudo bundle update
jekyll build
git add --all
git commit --all -m general-update
git push
echo 'rebuilt engage'
# gallery
cd ../gallery
git pull
sudo bundle update
jekyll build
git add --all
git commit --all -m general-update
git push
echo 'rebuilt engage'
# jekyll-template
cd ../jekyll-template
git pull
sudo bundle update
# jekyll build
git add --all
git commit --all -m general-update
git push
echo 'rebuilt jekyll-template'
# live
cd ../live
git pull
sudo bundle update
jekyll build
git add --all
git commit --all -m general-update
git push
echo 'rebuilt live'
# player-dev
cd ../player-dev
git pull
sudo bundle update
jekyll build
git add --all
git commit --all -m general-update
git push
echo 'rebuilt player-dev'
# sdks
cd ../sdks
git pull
sudo bundle update
jekyll build
git add --all
git commit --all -m general-update
git push
echo 'rebuilt sdks'
# social
cd ../social
git pull
sudo bundle update
jekyll build
git add --all
git commit --all -m general-update
git push
echo 'rebuilt social'
# ssai
cd ../ssai
git pull
sudo bundle update
jekyll build
git add --all
git commit --all -m general-update
git push
echo 'rebuilt ssai'
# studio
cd ../studio
git pull
sudo bundle update
jekyll build
git add --all
echo rebuilt studio
cd ../zencoder-support
git pull
sudo bundle update
jekyll build
git add --all
git commit --all -m general-update
git push
echo 'rebuilt zencoder-support'
echo 'all finished!'
