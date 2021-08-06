import React from 'react';
import { renderHook } from "@testing-library/react-hooks";
import { ContainerProvider } from "../src";
import { useDependency } from "../src";
test("get one single service or param", function () {
    var config = {
        apiUrl: "http://backend.somewhere.com",
    };
    var wrapper = function (_a) {
        var children = _a.children;
        return React.createElement(ContainerProvider, { config: config }, children);
    };
    var result = renderHook(function () { return useDependency("apiUrl"); }, { wrapper: wrapper }).result;
    expect(result.current).toBe("http://backend.somewhere.com");
});
