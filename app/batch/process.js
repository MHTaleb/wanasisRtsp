var is = require("electron-is");
const hashtable = require('alib-hashtable');
 
//new instance
const myHashTable = hashtable('id');



const path = require('path');
const run_source = path.join(__dirname, 'run_source.sh');
function initialize() {
    console.log("test de js ")
    if (is.windows())
        console.log("Windows Detected.")
    if (is.macOS())
        console.log("Apple OS Detected.")
    if (is.linux())
        console.log("Linux Detected.")
}

<<<<<<< HEAD
const process = require('child_process'); 
=======
function start(source,player) {
>>>>>>> bugged version

function start(source,player) {

    m3u8_source  = source.replace("rtsp://","/var/www/html/stream/").replace(/[=.]/g,"").replace(/[?&:@]/g,"/")+"/index.m3u8";

    folder = m3u8_source.substring(0,m3u8_source.lastIndexOf("/"));

    console.log(m3u8_source);

    console.log([source,m3u8_source,folder]);

    cmd = run_source;
    
    var child = process.spawn(cmd,[source,m3u8_source,folder]);

<<<<<<< HEAD
=======
    myHashTable.set({id:player,ps:child});

>>>>>>> bugged version
    console.log(child);

    child.on('error', function (err) {
        console.log('stderr error: <' + err + '>');
    });

    child.stdout.on('data', function (data) {
        console.log(data);

    });

    child.stderr.on('data', function (data) {
        if(data.includes("pid==")){
            console.log(String(data));
            debut = String(data).indexOf("pid==");
            console.log(String(data).substr(debut,10))
            var numb = String(data).substr(debut,10).match(/\d/g).join("");

            myHashTable.set({id:player,pid:numb});
            console.log(myHashTable.getCollection());
                    
        }
    });

    child.on('close', function (code) {
        if (code == 0)
        console.log('child process complete.');
        else
        console.log('child process exited with code ' + code);

    });

    
    m3u8_source = m3u8_source.replace("/var/www/html","http://127.0.0.1");
    return m3u8_source;
    
}

function stop(player){
<<<<<<< HEAD
    let pid = myHashTable.get(player).pid;
    console.log("closing the ffmpeg pid "+pid);

    process.execSync("kill -9 "+pid)
=======
    alert(myHashTable);
    myHashTable.get(player).ps.kill();
>>>>>>> bugged version
}

exports.initialize = initialize;
exports.start = start;
exports.stop = stop;