

self.addEventListener('message', function (e) {
    playVideo(e.data.player,e.data.videoPlayer)
});

function playVideo(p1,videoPlayer){
    videoPlayer.playVideo(p1);
}