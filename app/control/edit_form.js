

$(document).ready(function () {

    let firstChoice = `<option value="" disabled selected>Selectionner la racine</option>`;
    let json;


    jsonfile.readFile(file)
        .then(obj => {
            json = JSON.parse(JSON.stringify(obj));
            parents = [];
            getAllParents(json);
            console.log(parents);
            elements = "";
            parents.forEach(p => {
                elements+=`<option value="`+p+`" >`+p+`</option>`;
            });
            $('#parent').empty();
            $('#parent').append(firstChoice);
            $('#parent').append(elements);

        })
        .catch(error => console.error(error))




})

function loadLegacyData(){
    
    let legacy;


    jsonfile.readFile(legacyFile)
        .then(obj => {
            legacy = JSON.parse(JSON.stringify(obj));
            brandJson = {
                "id": "parent",
                "code": "parent",
                "children": []
            };

           for (const [key, value] of Object.entries(legacy)) {
           
            let cameraMode = !value.childrens;

            let cid = key+'';
        
            let parent = value.parent+'';
        
            let source = key+'';
            
            console.log(`${cameraMode}: ${cid}:${parent}: ${source}:${key}`);
            if (cameraMode) {
        
                let wideFormat = value.sourceFullScreen+'';
                let simpleFormat = value.source+'';

                insertChild = { "id": cid, "code": source, "source": simpleFormat, "sourceFullScreen": wideFormat, "children": undefined };
                brandJson= insertIntoChildJSON(brandJson, parent, insertChild)
        
            } else {
                editCamera(parent, cid, source, undefined, undefined, [])
                insertChild = { "id": cid, "code": source, "source": undefined, "sourceFullScreen": undefined, "children": [] };
                brandJson= insertIntoChildJSON(brandJson, parent, insertChild)
            }

           }

           jsonfile.writeFile(file, brandJson).then(err => {console.log("filewrited")});
           json = brandJson;
           html = "";
           html = parseIssues(brandJson.children);
           document.getElementById('a').innerHTML = html;
        })
        .catch(error => console.error(error))

}

function getAllParents(json) {


    if (json && json.children && !parents.includes(json.code)) {
        parents.push(json.code)
    } 
    if (json.children) {
        for (let i = 0; i < json.children.length; i++) {
            const element = json.children[i];
            getAllParents(element);
        }
    }
    return parents;

}


function save() {

    let cameraMode = $('#cameraMode').is(':checked');

    let cid = $('#cid').val();

    let parent = $('#parent').val();

    let source = $('#source').val();

    if (cameraMode) {

        let wideFormat = $('#wideFormat').val();
        let simpleFormat = $('#simpleFormat').val();
        editCamera(parent, cid, source, simpleFormat, wideFormat, undefined);

    } else {
        editParent(parent, cid, source);
    }



}


function switchDisplay() {
    if ($('#videoElement').hasClass('w3-hide')) {
        $('#videoElement').removeClass('w3-hide');
    } else {
        $('#videoElement').addClass('w3-hide');
    }
}


function editParent(parent, cid, source) {
    editCamera(parent, cid, source, undefined, undefined, [])
}

function editCamera(parent, id, source, simpleFormat, wideFormat, children) {

    let json;


    jsonfile.readFile(file)
        .then(obj => {
            json = JSON.parse(JSON.stringify(obj));

            insertChild = { "id": id, "code": source, "source": simpleFormat, "sourceFullScreen": wideFormat, "children": children };
            console.log(json.children);
            json = insertIntoChildJSON(json, parent, insertChild)
            console.log(json);
            //json.children.find((val,ind,obj) => obj.code === parent).children.push(insertChild);
            console.log(JSON.stringify(json));


            jsonfile.writeFile(file, json).then(err => {console.log("filewrited")});
            html = "";
            html = parseIssues(json.children);
            document.getElementById('a').innerHTML = html;
        })
        .catch(error => console.error(error))





}


function insertIntoChildJSON(sourceJSON, childId, value) {
    function insertIntoChild(data, childId, value) {
        if (data.code === childId) {
            if (data.children === undefined) data.children = [];
            if (data.children.length === 0 || data.children.find(ele => ele.code === value.code) === undefined) {
                data.children.push(value);
            } else {
                data.children[data.children.findIndex(ele => ele.code === value.code)] = value;
            }

        } else {
            if (data.children !== undefined && data.children.length > 0) {
                for (let i = 0; i < data.children.length; ++i) {
                    data.children[i] = insertIntoChild(
                        data.children[i],
                        childId,
                        value
                    );
                }
            }
        }

        return data;
    }

    const parsedSource = sourceJSON;

    return insertIntoChild(parsedSource, childId, value);
}