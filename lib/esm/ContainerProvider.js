import React, { createContext } from "react";
import { ContainerBuilder } from "./ContainerBuilder";
export var ContainerContext = createContext(undefined);
export var ContainerProvider = function (_a) {
    var config = _a.config, children = _a.children;
    var containerBuilder = new ContainerBuilder(config);
    var container = containerBuilder.build();
    return React.createElement(ContainerContext.Provider, { value: container }, children);
};
