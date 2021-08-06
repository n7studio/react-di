"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Container = void 0;
var Container = /** @class */ (function () {
    function Container(definitions) {
        this._resolvedDefinitions = {};
        this._definitions = {};
        this._definitions = definitions;
    }
    Container.prototype.get = function (name) {
        if (!this._resolvedDefinitions[name]) {
            this._resolvedDefinitions[name] = this.resolveDefinition(name);
        }
        return this._resolvedDefinitions[name];
    };
    Container.prototype.resolveDefinition = function (name) {
        var definition = this._definitions[name];
        if (definition instanceof Function) {
            return definition(this);
        }
        return definition;
    };
    return Container;
}());
exports.Container = Container;
