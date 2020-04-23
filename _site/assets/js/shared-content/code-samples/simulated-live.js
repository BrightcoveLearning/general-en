videojs.registerPlugin('simulated_live', function() {  var my_player = this,
  playlist_id = '1664503635149515112',
  video_data,
  video_ranges = [],
  playlist_duration = 0,
  playlist_position,
  current_video_index,
  current_video_position,
  origin_time = new Date(2020-01-01),
  now_time = new Date(),
  time_passed = now_time - origin_time;
  my_player.catalog.getPlaylist(playlist_id, function(error, playlist){
    if (error) {
      window.alert('There was an error retrieving the playlist: ' + error)
    }
    console.log('playlist', playlist);
    
    // load the playlist into the player
    my_player.catalog.load(playlist, -1);
    // turn on auto-advance
    my_player.playlist.autoadvance(0);
    // get the video data from the playlist
    video_data = my_player.playlist();
    console.log('video data', video_data);
    
    // get the duration of the playlist and the video ranges
    get_playlist_duration();
    console.log('playlist_duration', playlist_duration);
    console.log('video ranges', video_ranges);
    
    
    // get the start position in the playlist
    get_playlist_position();
    console.log('playlist_position', playlist_position);
    
    // get the index of the video where the start position is
    get_current_video_index();
    console.log('video index', current_video_index);
    
    // get start position in the video
    get_current_video_position();
    console.log('video position', current_video_position);
    
    // set the start video as the current one
    my_player.playlist.currentItem(current_video_index);
    // seek to the start point
    my_player.currentTime(current_video_position / 1000);
    // start the video
    my_player.play();
  })
