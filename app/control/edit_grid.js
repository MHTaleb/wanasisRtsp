

$(document).ready(function () {

    console.log('called here')
    appConfigRepo.getAll().then( resp => {
        console.log(resp)
        configJson = resp;
    })

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


    let maxHeigth = 0;
    $('[id^=panel-video]').each((i, v) => {
   
        console.log("height is "+$(v).find("video").height())
        maxHeigth = (maxHeigth>$(v).find("video").height())? maxHeigth:$(v).find("video").height() ;

    })

    $('[id^=panel-video]').each((i, v) => {
        $(v).height(maxHeigth);

    })




    setTimeout(resizeWindow(),500);
    gridSize = new_grid_size;
    appConfigRepo.setGridSize(new_grid_size);

}

