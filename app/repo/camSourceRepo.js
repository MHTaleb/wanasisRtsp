const jsonfile = require('jsonfile')


const path = require('path')
const file = path.join(__dirname, '../data', 'data.json');


function getAll() {
    let json;
    return jsonfile.readFile(file)
        .then(obj => {

            json = JSON.parse(JSON.stringify(obj));
            return json;
        })
        .catch(error => console.error(error))


}


exports.getAll = getAll;