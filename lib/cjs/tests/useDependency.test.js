"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_hooks_1 = require("@testing-library/react-hooks");
var src_1 = require("../src");
var src_2 = require("../src");
test("get one single service or param", function () {
    var config = {
        apiUrl: "http://backend.somewhere.com",
    };
    var wrapper = function (_a) {
        var children = _a.children;
        return react_1.default.createElement(src_1.ContainerProvider, { config: config }, children);
    };
    var result = react_hooks_1.renderHook(function () { return src_2.useDependency("apiUrl"); }, { wrapper: wrapper }).result;
    expect(result.current).toBe("http://backend.somewhere.com");
});
