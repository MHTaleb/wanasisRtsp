const fs = require('fs')

const Hls = require('hls.js')

const process = require('../batch/process.js')

process.initialize();


async function fullscreenSource(id) {

    function search(child, id) {

        if (child !== undefined) {

            if (child.id === id || child.code === id) {
                console.log(id);
                console.log(child.id);
                return child.sourceFullScreen;
            } else {
                if (child.children !== undefined && child.children.length > 0) {
                    for (let index = 0; index < child.children.length; index++) {
                        data = undefined;
                        data = search(child.children[index], id);
                        if (data !== undefined) return data;
                    }
                }
            }

        }
    }

    //console.log(camSourceRepo.getAll());
    return camSourceRepo.getAll().then(cams => {
        console.log(cams)
        return search(cams, id);
    })

}

async function screenSource(id) {
    function search(child, id) {

        if (child !== undefined) {

            if (child.id === id || child.code === id) {
                console.log(id);
                console.log(child.id);
                return child.source;
            } else {
                if (child.children !== undefined && child.children.length > 0) {
                    for (let index = 0; index < child.children.length; index++) {
                        data = undefined;
                        data = search(child.children[index], id);
                        if (data !== undefined) return data;
                    }
                }
            }

        }
    }

    //console.log(camSourceRepo.getAll());
    return camSourceRepo.getAll().then(cams => {
        console.log(cams)
        return search(cams, id);
    })


}

async function playVideo(p1, div_prefix = "player_") {

    var video = document.getElementById(div_prefix + p1);
    var player = new Hls();
    let source

    console.log('pikakkakakka' + div_prefix)
    console.log('pikakkakakka' + p1);
    var _screenSource = screenSource;
    if (div_prefix.includes("fullplayer_")) _screenSource = fullscreenSource;
    _screenSource(p1).then(source => {
        console.log('pikakkakakka - dshfgdksf' + source);
        source = process.start(source, p1);

        console.log("the source to play is " + source)
        player.attachMedia(video);
        player.on(Hls.Events.MEDIA_ATTACHED, function () {

            console.log("hello ")


            /*      new Promise((resolve) => {
                     
                      setTimeout(() =>  function() {
                          console.log("hello ")
                          while (fs.existsSync(source.replace("http://127.0.0.1", "/var/www/html")) !== true) {
          
                              setTimeout(() => { console.log(" ffmpeg not streming m3u8 yet") }, 1000);
                          }
          
                          player.loadSource(source);
          
                          player.on(Hls.Events.MANIFEST_PARSED, function () {
                              console.log("hello ")
                              video.play();
                              /*const path = require('path');
                              const playvidworker = path.join(__dirname, 'asynch', 'playVidWorker.js');
                  
                              var worker = new Worker(playvidworker);
                  
                              worker.postMessage(p1);
                  
                          });
          
                        //  return "success"
          
                      }, 1000);
                      
                     
                     
                  }).then(console.log("hello "));
                  */
            let interval_call;
            new Promise((resolve) => {
                interval_call = setInterval(() => {
                    if (fs.existsSync(source.replace("http://127.0.0.1", "/var/www/html")) === true) {
                        console.log("stoping interval")
                        clearInterval(interval_call)
                        console.log(" I will play video")
                        player.loadSource(source);

                        player.on(Hls.Events.MANIFEST_PARSED, function () {
                            console.log("hello ")
                            video.play();


                        });
                        return "";
                    } else {
                        console.log("still waiting for interval")
                    }
                }, 1000);


            })


        });
    });

}


function stop(id) {
    process.stop(id);
}
exports.playVideo = playVideo;
exports.stop = stop