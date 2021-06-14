"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Container_1 = __importDefault(require("./Container"));
var ContainerBuilder = /** @class */ (function () {
    function ContainerBuilder(definitions) {
        this._definitions = definitions;
    }
    ContainerBuilder.prototype.build = function () {
        var container = new Container_1.default(this._definitions);
        return container;
    };
    return ContainerBuilder;
}());
exports.default = ContainerBuilder;
