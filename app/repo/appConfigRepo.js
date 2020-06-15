
const jsonfile = require('jsonfile');


const configFile = path.join(__dirname, '../data', 'config.json');



async function getAll() {

    let configJson;
    return jsonfile.readFile(configFile)
        .then(obj => {
            configJson = JSON.parse(JSON.stringify(obj));
            console.log(configJson["gridSize"]);
            return configJson;
        })
        .catch(error => console.error(error))


}

async function getGridSize() {
   response =  await getAll()
   console.log(response)

        return response["gridSize"]
}

async function setGridSize(_gridSize){
    response =  await getAll()
    response.gridSize = _gridSize;
    jsonfile.writeFile(configFile, response);
}

exports.getAll = getAll
exports.getGridSize = getGridSize
exports.setGridSize = setGridSize