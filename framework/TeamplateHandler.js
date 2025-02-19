const fs = require('fs');
const path = require('path');
const directory = 'views' ;


module.exports = class TemplateHandler {

    /***
    *  Bardzo prymitywny handler ktory servuje szablony html z foldetu 'views'
    ***/

    static async render(name) {
        const filePath = path.join( process.cwd() ,'src', directory, 'date-view.html');
        try{
            return  await fs.promises.readFile(filePath, 'utf8');
        }catch (err){
            throw new Error(err.message);
        }
    }
}




