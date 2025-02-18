const http = require('http');
const EventEmiter = require('events');


module.exports = class Application{
    constructor() {
        this.emiter = new EventEmiter();
        this.server = this._createServer();
    }
    listen(port, callback) {
        this.server.listen(port, callback);
    }

    addRouter(router) {
        Object.keys(router.endpoints).forEach((path) => {
            const endpoint = router.endpoints[path];
            Object.keys(endpoint).forEach((method) => {
                const handler = endpoint[method];
                this.emiter.on(this._getRouteMask(path, method) , (req,res) => {
                    handler(req, res);
                });
            })
        })
    }

    _createServer() {
        return http.createServer((req, res) => {
            const emited = this.emiter.emit(this._getRouteMask(req.url,req.method),req , res)
            if(!emited) {
                res.end();
            }
        });
    }
    _getRouteMask(path, method) {
        return `[${path}][${method}]`;
    }
}