/**
 * author Taleb mohammed housseyn
 * 
 * main app entry
 */

//



require('web-animations-js')
require('hammerjs')
const Muuri = require('muuri')


const camsMenu = require('./control/camsMenu.js')

const camSourceRepo = require('./repo/camSourceRepo.js')

const appConfigRepo = require('./repo/appConfigRepo.js')

const gridManager = require("./control/camsGrid.js")

const videoPlayer = require("./control/videoPlayer.js")

var a = require("array-tools");

var fs = require('fs');
var util = require('util');
var log_file = fs.createWriteStream(__dirname + '/debug.log', {flags : 'w'});
var log_stdout = process.stdout;
/*
console.log = function(d) { //
  log_file.write(util.format(d) + '\n');
  log_stdout.write(util.format(d) + '\n');
};*/

var gridSize;

var html = "";// The returned object.
let parents = [];

appConfigRepo.getGridSize().then(_gridSize => {
    gridSize = _gridSize;
    console.log(gridSize);
});

camSourceRepo.getAll().then(cams => {
    camsMenu.updateCamsMenu(cams);
})



function handleSelectedCam(checkBox) {

    // If the checkbox is checked, display the output text
    if (checkBox.checked == true) {
        gridManager.addPlayer(checkBox.id, camSourceRepo, videoPlayer);
    } else {
        gridManager.removePlayer(checkBox.id);
       
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
    gridManager.showFullScreenPlayer(p)
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

function resizeWindow() {
    var evt = document.createEvent('UIEvents');
    evt.initUIEvent('resize', true, false, window, 0);
    window.dispatchEvent(evt);
}