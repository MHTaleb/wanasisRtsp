

$(document).ready(function () {
    loadCSS(path.join(__dirname, 'control', 'edit_grid.css'));
    $('#gridRange').val(gridSize)
    updateValue();
})

function updateValue() {
    console.log($('#gridRange').val())
    $('#gridValue').empty();
    $('#gridValue').append($('#gridRange').val());
}


function editGrid() {
    let new_grid_size = $('#gridRange').val();
    console.log($('[id^=panel-video]'))
    $('[id^=panel-video]').each((i,v) => {
        console.log(i)
        console.log(v)
        v.className = 'item'+new_grid_size+'X'+new_grid_size;
        
    })

    setTimeout(resizeWindow(),500);
    configJson.gridSize = new_grid_size;
    gridSize = new_grid_size;
    jsonfile.writeFile(configFile, configJson);

}

function resizeWindow(){
    var evt = document.createEvent('UIEvents');
    evt.initUIEvent('resize', true, false,window,0);
    window.dispatchEvent(evt); 
}