import { ContainerBuilder } from "../src/ContainerBuilder";

test("build container from config", () => {
  const config = {
    store: () => {
      return {
        replaceReducer: () => {},
      };
    },
  };

  const builder = new ContainerBuilder(config);
  const container = builder.build();

  const store = container.get("store");
  expect(store).toHaveProperty("replaceReducer");
});

test("build container from config with cross dependency", () => {
  const config = {
    store: (c: any) => {
      const sagaMiddleware = c.get("sagaMiddleware");
      return {
        sagaMiddleware,
        replaceReducer: () => {},
      };
    },
    sagaMiddleware: () => {
      return {
        run: () => {},
      };
    },
  };

  const builder = new ContainerBuilder(config);
  const container = builder.build();

  const store = container.get("store");

  expect(store).toHaveProperty("sagaMiddleware");
  expect(store.sagaMiddleware).toHaveProperty("run");
});
