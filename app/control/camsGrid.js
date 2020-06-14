function getCamPath(idValue, camSourceRepo) {
    console.log("++++++++++++++++" + idValue);
    found_path = "";
    var path = "-";
    function search(path, obj, target) {
        var found = false;
        for (var k in obj) {
            if (obj.hasOwnProperty(k))
                if (obj[k] === target) {
                    value = obj.code
                    if (value)
                        return path + "-" + value + "-"
                    else return path;
                }
                else if (typeof obj[k] === "object") {
                    value = obj.code
                    var result
                    if (value)
                        result = search(path + "-" + obj.code + "-", obj[k], target);
                    else result = search(path, obj[k], target);

                    if (result)
                        return result;
                }
        }
        return false;
    }

    var path

    return camSourceRepo.getAll().then(allCams => {
        path = search(path, allCams, idValue);

        console.log("++++++++++++++++" + path);

        return path.replace("--parent-", "");
    })





}

function addPlayer(player, camSourceRepo, videoPlayer) {
    var node = document.createElement("div");

    getCamPath(player, camSourceRepo).then(path => {
        camPath = path
        
        itemClass = "item" + gridSize + "X" + gridSize;
        node.setAttribute('class', itemClass + ' video-container ');
        node.setAttribute('id', "panel-video-" + player);
        node.innerHTML = "<div ondblclick='fullscreen(" + `"` + player + `"` + ")' class='item-content'><div class='panel-heading'><div class='panel-title-box'><span>" + camPath + "</span></div><div class='panel-body padding-0'><video class='autosize' id='player_" + player + "' style='width:100%; height:100%; max-height:800px;' autoplay muted></video></div></div>";

        /*document.getElementById("grid").appendChild(node);*/

        grid.add([node]);



        grid.show([node], {
            onFinish: function (items) {
                videoPlayer.playVideo(player);
            }
        });

        $('[id^=panel-video]').each((i, v) => {
            console.log(i)
            console.log(v)
            v.className = 'item' + gridSize + 'X' + gridSize;

        })

    });

}

function removePlayer(player) {
    var node = document.getElementById("panel-video-" + player);
    grid.remove([node], { removeElements: true, layout: 'instant' });
    videoPlayer.stop(player);
}

function showFullScreenPlayer(player_id,div_id='fullplayer_'){

    console.log(player_id);
    fs = "<video onclick='hideFullscreen()' id='fullplayer_" + player_id + "' style='width:100%; height:100%;' autoplay muted></video>";
    console.log(fs);
    $("#fullscreen").empty();
    $("#fullscreen").append(fs)
    document.getElementById('id02').style.display = 'block';
    $(document).ready(function () {
        //new ScrollZoom($('#fullplayer_' + p), 4, 0.5);
        new ScrollZoom($('#fullscreen'), 4, 0.5);

    });


    videoPlayer.playVideo(player_id,div_id);

    
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


exports.addPlayer = addPlayer
exports.removePlayer = removePlayer
exports.showFullScreenPlayer = showFullScreenPlayer
