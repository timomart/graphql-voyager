
"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
exports.__esModule = true;
var render = require("./render-voyager-page");
var pkg = require('../package.json');
var plugin  = {
    name: 'graphql-voyager',
    register: function (server, options) {
        var path = options.path, _a = options.route, config = _a === void 0 ? {} : _a, middlewareOptions = __rest(options, ["path", "route"]);
        console.log('path:'  + path );
        server.route({
            method: 'GET',
            path: path,
            config: config,
            handler: function (request, h) {
                const page = render.renderVoyagerPage(middlewareOptions);
                return page;
            }
        });
    }
};
exports["default"] = plugin;
