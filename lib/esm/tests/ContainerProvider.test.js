import React, { useContext } from "react";
import { render, screen } from "@testing-library/react";
import { renderHook } from "@testing-library/react-hooks";
import { ContainerProvider, ContainerContext } from "../src/ContainerProvider";
test("creates container and pass children", function () {
    var config = {
        store: {
            hello: "hello",
        },
    };
    render(React.createElement(ContainerProvider, { config: config },
        React.createElement(React.Fragment, null, "test")));
    var element = screen.getByText("test");
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
        return React.createElement(ContainerProvider, { config: config }, children);
    };
    var result = renderHook(function () { return useContext(ContainerContext); }, { wrapper: wrapper }).result;
    expect(result.current.definitions).toHaveProperty("apiService");
});
