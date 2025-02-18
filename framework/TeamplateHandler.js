const fs = require('fs');
const path = require('path');
const directory = 'views' ;


module.exports = class TemplateHandler {

    /***
    *  Bardzo prymitywny handler ktory servuje szablony html z foldetu 'views'
    ***/

    static render(name,res) {
        const filePath = path.join( process.cwd() ,'src', directory, 'date-view.html');

        try{
            if(filePath){
                res.writeHead(200, { 'Content-Type': 'text/html;charset=UTF-8' })
                fs.readFile(filePath, 'utf8', (err, data) => {
                    if (err) {
                        throw new Error(err.message) ;
                    } else {
                        res.end(data);
                    }
                });
            }else{
                throw new Error(`${name} not found.`);
            }
        }catch (err){
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Błąd na serwerze');
        }

    }
}




