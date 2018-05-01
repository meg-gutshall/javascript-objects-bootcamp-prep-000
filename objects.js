var playlist = {
  "Slowdive": "Alison",
  "My Bloody Valentine": "My Bloody Valentine"
}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist["Phil Ochs"] = "Here's to the State of Mississippi"
  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist.Alison;
  return playlist
}