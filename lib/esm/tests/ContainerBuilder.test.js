import { ContainerBuilder } from "../src/ContainerBuilder";
test("build container from config", function () {
    var config = {
        store: function () {
            return {
                replaceReducer: function () { },
            };
        },
    };
    var builder = new ContainerBuilder(config);
    var container = builder.build();
    var store = container.get("store");
    expect(store).toHaveProperty("replaceReducer");
});
test("build container from config with cross dependency", function () {
    var config = {
        store: function (c) {
            var sagaMiddleware = c.get("sagaMiddleware");
            return {
                sagaMiddleware: sagaMiddleware,
                replaceReducer: function () { },
            };
        },
        sagaMiddleware: function () {
            return {
                run: function () { },
            };
        },
    };
    var builder = new ContainerBuilder(config);
    var container = builder.build();
    var store = container.get("store");
    expect(store).toHaveProperty("sagaMiddleware");
    expect(store.sagaMiddleware).toHaveProperty("run");
});
