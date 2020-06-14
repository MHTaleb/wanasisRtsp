const fs = require('fs')

<<<<<<< HEAD
const Hls = require('hls.js')

=======
>>>>>>>  prior prod version
const process = require('../batch/process.js')

process.initialize();


<<<<<<< HEAD
async function fullscreenSource(id) {
=======
function fullscreenSource(id) {
>>>>>>>  prior prod version

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

<<<<<<< HEAD
async function screenSource(id) {
=======
function screenSource(id) {
>>>>>>>  prior prod version
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

<<<<<<< HEAD
async function playVideo(p1, div_prefix = "player_") {
=======
function playVideo(p1,div_prefix="player_") {
>>>>>>>  prior prod version

    var video = document.getElementById(div_prefix + p1);
    var player = new Hls();
    let source

<<<<<<< HEAD
    console.log('pikakkakakka' + div_prefix)
    console.log('pikakkakakka' + p1);
    var _screenSource = screenSource;
    if (div_prefix.includes("fullplayer_")) _screenSource = fullscreenSource;
    _screenSource(p1).then(source => {
        console.log('pikakkakakka - dshfgdksf' + source);
=======
    console.log(div_prefix)
    console.log(p1);
    var _screenSource = screenSource;
    if(div_prefix.includes("fullplayer_"))_screenSource = fullscreenSource;
    _screenSource(p1).then(source => {
        console.log(source);
>>>>>>>  prior prod version
        source = process.start(source, p1);

        console.log("the source to play is " + source)
        player.attachMedia(video);
        player.on(Hls.Events.MEDIA_ATTACHED, function () {

<<<<<<< HEAD
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

=======
            while (fs.existsSync(source.replace("http://127.0.0.1", "/var/www/html")) !== true) {
                console.log(" ffmpeg not streming m3u8 yet")
                setTimeout(1000,() => {});   
            }

            player.loadSource(source);
            
            player.on(Hls.Events.MANIFEST_PARSED, function () {

                video.play();
                /*const path = require('path');
                const playvidworker = path.join(__dirname, 'asynch', 'playVidWorker.js');
    
                var worker = new Worker(playvidworker);
    
                worker.postMessage(p1);
    */
            });
>>>>>>>  prior prod version

        });
    });

}


<<<<<<< HEAD
function stop(id) {
=======
function stop(id){
>>>>>>>  prior prod version
    process.stop(id);
}
exports.playVideo = playVideo;
exports.stop = stop