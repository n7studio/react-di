"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContainerBuilder = void 0;
var Container_1 = require("./Container");
var ContainerBuilder = /** @class */ (function () {
    function ContainerBuilder(definitions) {
        this._definitions = definitions;
    }
    ContainerBuilder.prototype.build = function () {
        var container = new Container_1.Container(this._definitions);
        return container;
    };
    return ContainerBuilder;
}());
exports.ContainerBuilder = ContainerBuilder;
