"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var react_2 = require("@testing-library/react");
var react_hooks_1 = require("@testing-library/react-hooks");
var ContainerProvider_1 = require("../src/ContainerProvider");
test("creates container and pass children", function () {
    var config = {
        store: {
            hello: "hello",
        },
    };
    react_2.render(react_1.default.createElement(ContainerProvider_1.ContainerProvider, { config: config },
        react_1.default.createElement(react_1.default.Fragment, null, "test")));
    var element = react_2.screen.getByText("test");
    expect(element).toBeInTheDocument();
});
test("config is loaded in container", function () {
    var config = {
        apiService: function () {
            return {};
        },
    };
    var wrapper = function (_a) {
        var children = _a.children;
        return react_1.default.createElement(ContainerProvider_1.ContainerProvider, { config: config }, children);
    };
    var result = react_hooks_1.renderHook(function () { return react_1.useContext(ContainerProvider_1.ContainerContext); }, { wrapper: wrapper }).result;
    expect(result.current.definitions).toHaveProperty("apiService");
});
