bundle update
jekyll build
echo 'rebuilt general content'
# apis
cd ../apis
bundle update
jekyll build
echo 'rebuilt apis'
# audience
cd ../audience
bundle update
jekyll build
echo 'rebuilt audience'
# beacon
cd ../beacon-support
bundle update
jekyll build
echo 'rebuilt beacon'
# campaign
cd ../campaign
bundle update
jekyll build
echo 'rebuilt campaign'
# docs-cms-connectors
cd ../docs-cms-connectors
bundle update
jekyll build
echo 'rebuilt docs-cms-connectors'
# engage
cd ../engage
bundle update
jekyll build
echo 'rebuilt engage'
# gallery
cd ../gallery
bundle update
jekyll build
echo 'rebuilt engage'
# live
cd ../live
bundle update
jekyll build
echo 'rebuilt live'
# player-dev
cd ../player-dev
bundle update
jekyll build
echo 'rebuilt player-dev'
# sdks
cd ../sdks
bundle update
jekyll build
echo 'rebuilt sdks'
# social
cd ../social
bundle update
jekyll build
echo 'rebuilt social'
# ssai
cd ../ssai
bundle update
jekyll build
echo 'rebuilt ssai'
# studio
cd ../studio
bundle update
jekyll build
echo 'rebuilt studio'
# zencoder-support
cd ../zencoder-support
bundle update
jekyll build
echo 'rebuilt zencoder-support'
echo 'all finished!'
