#
bundle update
jekyll serve
#
#
echo 'serving general content'
# apis
cd ../apis
#
bundle update
jekyll serve
#
#
echo 'serving apis'
# audience
cd ../audience
#
bundle update
jekyll serve
#
#
echo 'serving audience'
# beacon
cd ../beacon-support
#
bundle update
jekyll serve
#
#
echo 'serving beacon'
# campaign
#
cd ../campaign
bundle update
jekyll serve
#
#
echo 'serving campaign'
# docs-integrations
cd ../docs-integrations
#
bundle update
jekyll serve
#
#
echo 'serving docs-integrations'
# engage
cd ../engage
#
bundle update
jekyll serve
#
#
echo 'serving engage'
# gallery
cd ../gallery
#
bundle update
jekyll serve
#
#
echo 'serving engage'
# live
cd ../live
#
bundle update
jekyll serve
#
#
echo 'serving live'
# player-dev
cd ../player-dev
#
bundle update
jekyll serve
#
#
echo 'serving player-dev'
# sdks
cd ../sdks
#
bundle update
jekyll serve
#
#
echo 'serving sdks'
# social
cd ../social
#
bundle update
jekyll serve
#
#
echo 'serving social'
# ssai
cd ../ssai
#
bundle update
jekyll serve
#
#
echo 'serving ssai'
# studio
cd ../studio
#
bundle update
jekyll serve
#
#
echo 'serving studio'
# zencoder-support
cd ../zencoder-support
#
bundle update
jekyll serve
#
#
echo 'serving zencoder-support'
echo 'all finished!'
