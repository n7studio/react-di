"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContainerProvider = exports.useDependency = void 0;
var useDependency_1 = require("./useDependency");
Object.defineProperty(exports, "useDependency", { enumerable: true, get: function () { return __importDefault(useDependency_1).default; } });
var ContainerProvider_1 = require("./ContainerProvider");
Object.defineProperty(exports, "ContainerProvider", { enumerable: true, get: function () { return ContainerProvider_1.ContainerProvider; } });
