

self.addEventListener('message', function (e) {
    playVideo(e.data);
});

function playVideo(p1){
    let video = document.getElementById('player_' + p1);
    try {
        while (!fs.exists(source.replace("http://127.0.0.1", "/var/www/html"))) {
            setTimeout(1000);
            //file !exists
        }
        video.play();
    } catch (err) {
        console.error(err)
    }
}


