git pull
bundle update
jekyll build
git commit --all -m general-update
git push
echo 'rebuilt general content'
# apis
cd ../apis
git pull
bundle update
jekyll build
git commit --all -m general-update
git push
echo 'rebuilt apis'
# audience
cd ../audience
git pull
bundle update
jekyll build
git commit --all -m general-update
git push
echo 'rebuilt audience'
# beacon
cd ../beacon-support
git pull
bundle update
jekyll build
git commit --all -m general-update
git push
echo 'rebuilt beacon'
# campaign
git pull
cd ../campaign
bundle update
jekyll build
git commit --all -m general-update
git push
echo 'rebuilt campaign'
# docs-cms-connectors
cd ../docs-cms-connectors
git pull
bundle update
jekyll build
git commit --all -m general-update
git push
echo 'rebuilt docs-cms-connectors'
# engage
cd ../engage
git pull
bundle update
jekyll build
git commit --all -m general-update
git push
echo 'rebuilt engage'
# gallery
cd ../gallery
git pull
bundle update
jekyll build
git commit --all -m general-update
git push
echo 'rebuilt engage'
# live
cd ../live
git pull
bundle update
jekyll build
git commit --all -m general-update
git push
echo 'rebuilt live'
# player-dev
cd ../player-dev
git pull
bundle update
jekyll build
git commit --all -m general-update
git push
echo 'rebuilt player-dev'
# sdks
cd ../sdks
git pull
bundle update
jekyll build
git commit --all -m general-update
git push
echo 'rebuilt sdks'
# social
cd ../social
git pull
bundle update
jekyll build
git commit --all -m general-update
git push
echo 'rebuilt social'
# ssai
cd ../ssai
git pull
bundle update
jekyll build
git commit --all -m general-update
git push
echo 'rebuilt ssai'
# studio
cd ../studio
git pull
bundle update
jekyll build
git commit --all -m general-update
git push
echo 'rebuilt studio'
# zencoder-support
cd ../zencoder-support
git pull
bundle update
jekyll build
git commit --all -m general-update
git push
echo 'rebuilt zencoder-support'
echo 'all finished!'
