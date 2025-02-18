module.exports = class Router {

    constructor() {
        this.endpoints = {}
    }

    request(method = "GET", url, handler) {
        if(!this.endpoints[url]){
            this.endpoints[url] = {};
        }

        const endpoints = this.endpoints[url];

        if(endpoints[method]){
            throw new Error(`Method "${method}" already exists.`);
        }
        endpoints[method] = handler;
    }
    get(path, handler) {
        console.log(`Http REQUEST to "${path}" have got.`);
        return this.request("GET",path, handler);
    }
}