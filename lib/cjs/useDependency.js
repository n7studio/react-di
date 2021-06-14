"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDependency = void 0;
var react_1 = require("react");
var ContainerProvider_1 = require("./ContainerProvider");
var useDependency = function (name) {
    var container = react_1.useContext(ContainerProvider_1.ContainerContext);
    return container.get(name);
};
exports.useDependency = useDependency;
exports.default = exports.useDependency;
