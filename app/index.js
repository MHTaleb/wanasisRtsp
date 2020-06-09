
const jsonfile = require('jsonfile')
const path = require('path')
var a = require("array-tools");
const file = path.join(__dirname, 'data', 'data.json');
const configFile = path.join(__dirname, 'data', 'config.json');
const legacyFile = path.join(__dirname, 'data', 'legacy.json');

var json;
var configJson;
var gridSize;
var html = "";// The returned object.
let parents = [];


$(document).ready(function () {
    jsonfile.readFile(file)
        .then(obj => {
            json = JSON.parse(JSON.stringify(obj));
            console.log(json["id"]);
            console.log(json["rtsp"]);
            parseIssues(json.children);
            document.getElementById('a').innerHTML = html;
        })
        .catch(error => console.error(error))



    jsonfile.readFile(configFile)
        .then(obj => {
            configJson = JSON.parse(JSON.stringify(obj));
            console.log(configJson["gridSize"]);
            gridSize = configJson["gridSize"];
        })
        .catch(error => console.error(error))

});



function createCheck(issue) {
    if(issue.children) return "<span>"+ issue.code+"</span>";


    return "<span><input class='cbx' style='display:none;' type='checkbox' id='" + issue.id + "' value='" + issue.id + "' onclick='handleSelectedCam(this);'/>"+
    "<label class='toggle' for='" + issue.id + "'>  "+
    "<span> </span>"   +  "</label>"+"<span>"+ issue.code+"</span> </span>";
}

function parseIssues(issues) {
    console.log(issues);
    html += "<ul>";
    for (var i = 0; i < issues.length; i++) {
        var issue = issues[i],
            input = createCheck(issue); // Creates the html for the checkbox
        html += "<li style='margin:5px;'>" + input;
        if (typeof issue.children !== "undefined" && issue.children.length > 0) {
            parseIssues(issue.children); // Calls a function which does similar to this for with the children.
        }
        html += "</li>";
    }
    html += "</ul>";
    return html;
}



function addPlayer(p) {
    var node = document.createElement("div");

    camPath = getCamPath(p);
    itemClass = "item" + gridSize + "X" + gridSize;
    node.setAttribute('class', itemClass+' video-container ');
    node.setAttribute('id', "panel-video-" + p);
    node.innerHTML = "<div ondblclick='fullscreen(" + `"` + p + `"` + ")' class='item-content'><div class='panel-heading'><div class='panel-title-box'><span>" + camPath + "</span></div><div class='panel-body padding-0'><video class='autosize' id='player_" + p + "' style='width:100%; height:100%; max-height:800px;' autoplay muted></video></div></div>";

    /*document.getElementById("grid").appendChild(node);*/

    grid.add([node]);



    grid.show([node], {
        onFinish: function (items) {
            playVideo(p);
        }
    });

    $('[id^=panel-video]').each((i,v) => {
        console.log(i)
        console.log(v)
        v.className = 'item'+gridSize+'X'+gridSize;
        
    })

}

function getCamPath(idValue) {
    console.log("++++++++++++++++" + idValue);
    found_path = "";
    var path = "-";
    function search(path, obj, target) {
        var found = false;
        for (var k in obj) {
            if (obj.hasOwnProperty(k))
                if (obj[k] === target){
                    value = obj.code 
                    if(value)
                    return path + "-" + value+ "-"
                    else return path;
                }
                 else if (typeof obj[k] === "object") {
                    value = obj.code
                    var result 
                    if(value)
                    result = search(path + "-" + obj.code + "-", obj[k], target);
                    else result = search(path , obj[k], target);
                     
                     if (result)
                         return result;
                    }
        }
        return false;
    }
    var path = search(path,json,idValue);


    console.log("++++++++++++++++" + path);

    return path.replace("--parent-","");

}

function removePlayer(p) {

    var node = document.getElementById("panel-video-" + p);
    grid.remove([node], { removeElements: true, layout: 'instant' });
}

function handleSelectedCam(checkBox) {

    // If the checkbox is checked, display the output text
    if (checkBox.checked == true) {
        addPlayer(checkBox.id);
    } else {
        removePlayer(checkBox.id);
    }
    resizeWindow();
}

function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("grid").style.width = "100%";
}

function playVideo(p1) {

    var video = document.getElementById('player_' + p1);
    var player = new Hls();
    source = screenSource(p1);
    console.log(source);
    player.attachMedia(video);
    player.on(Hls.Events.MEDIA_ATTACHED, function () {
        player.loadSource(source);
        player.on(Hls.Events.MANIFEST_PARSED, function () {
            video.play();
        });

    });
}

var grid = new Muuri('.grid', {
    dragEnabled: true,
    layout: {
        fillGaps: true
    }
});

function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
}

function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
}



function edit_source() {

    $("#w3-modal").load("control/edit_form.html");
    $.getScript("control/edit_form.js")
        .done(function (script, textStatus) {
            console.log('Successfully loaded script');
        })
        .fail(function (jqxhr, settings, exception) {
            console.error('Failed to load script');
        });
    document.getElementById('id01').style.display = 'block';

}

function edit_grid() {

    $("#w3-modal").load("control/edit_grid.html");
    $.getScript("control/edit_grid.js")
        .done(function (script, textStatus) {
            console.log('Successfully loaded script');
        })
        .fail(function (jqxhr, settings, exception) {
            console.error('Failed to load script');
        });
    document.getElementById('id01').style.display = 'block';
}

function hideFullscreen() {
    document.getElementById('id02').style.display = 'none';
    $("#fullscreen").empty();
}

function fullscreen(p) {


    console.log(p);
    fs = "<video onclick='hideFullscreen()' id='fullplayer_" + p + "' style='width:100%; height:100%;' autoplay muted></video>";
    console.log(fs);
    $("#fullscreen").empty();
    $("#fullscreen").append(fs)
    document.getElementById('id02').style.display = 'block';
    $(document).ready(function () {
        //new ScrollZoom($('#fullplayer_' + p), 4, 0.5);
        new ScrollZoom($('#fullscreen'), 4, 0.5);

    });
    var video = document.getElementById('fullplayer_' + p);
    var player = new Hls();
    source = fullscreenSource(p);
    console.log(source);
    player.attachMedia(video);
    player.on(Hls.Events.MEDIA_ATTACHED, function () {
        player.loadSource(source);
        player.on(Hls.Events.MANIFEST_PARSED, function () {
            video.play();
        });
    });




}


function fullscreenSource(id) {
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

    return search(json, id);
}


function screenSource(id) {
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
    console.log(json);
    return search(json, id);
}


function ScrollZoom(container, max_scale, factor) {
    var target = container
    var size = { w: target.width(), h: target.height() }
    var pos = { x: 0, y: 0 }
    var zoom_target = { x: 0, y: 0 }
    var zoom_point = { x: 0, y: 0 }
    var scale = 1
    target.css('transform-origin', '0 0')
    target.on("mousewheel DOMMouseScroll", scrolled)

    function scrolled(e) {
        var offset = container.offset()
        zoom_point.x = e.pageX - offset.left
        zoom_point.y = e.pageY - offset.top

        e.preventDefault();
        var delta = e.delta || e.originalEvent.wheelDelta;
        if (delta === undefined) {
            //we are on firefox
            delta = e.originalEvent.detail;
        }
        delta = Math.max(-1, Math.min(1, delta)) // cap the delta to [-1,1] for cross browser consistency

        // determine the point on where the slide is zoomed in
        zoom_target.x = (zoom_point.x - pos.x) / scale
        zoom_target.y = (zoom_point.y - pos.y) / scale

        // apply zoom
        scale += delta * factor * scale
        scale = Math.max(1, Math.min(max_scale, scale))

        // calculate x and y based on zoom
        pos.x = -zoom_target.x * scale + zoom_point.x
        pos.y = -zoom_target.y * scale + zoom_point.y


        // Make sure the slide stays in its container area when zooming out
        if (pos.x > 0)
            pos.x = 0
        if (pos.x + size.w * scale < size.w)
            pos.x = -size.w * (scale - 1)
        if (pos.y > 0)
            pos.y = 0
        if (pos.y + size.h * scale < size.h)
            pos.y = -size.h * (scale - 1)

        update()
    }

    function update() {
        console.log('translate(' + (pos.x) + 'px,' + (pos.y) + 'px) scale(' + scale + ',' + scale + ')');
        target.css('transform', 'scale(' + scale + ',' + scale + ')');
    }
}

loadCSS = function (href) {

    var cssLink = $("<link>");
    $("head").append(cssLink); //IE hack: append before setting href

    cssLink.attr({
        rel: "stylesheet",
        type: "text/css",
        href: href
    });

};

function resizeWindow(){
    var evt = document.createEvent('UIEvents');
    evt.initUIEvent('resize', true, false,window,0);
    window.dispatchEvent(evt); 
}