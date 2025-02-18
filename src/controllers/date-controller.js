
const Router = require('../../framework/Router');
const DateService = require('../../src/services/date-service');
const TemplateHandler = require('../../framework/TeamplateHandler');

const controller = new Router();

/***
*  Kontroller z klasy router ktory reprezentuje dwa routy z otzrymaniem api oraz strony
*
***/

controller.get('/api/get-date', (req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ date : DateService.getDateFormatted_ISO_8601() })) ;
})
controller.get('/check-date', (req, res) => {
    TemplateHandler.render('date-view.html',res);
})

module.exports = controller;