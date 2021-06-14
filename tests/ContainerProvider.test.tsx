import React, { useContext } from "react";
import { render, screen } from "@testing-library/react";
import { renderHook } from "@testing-library/react-hooks";
import { ContainerProvider, ContainerContext } from "../src/ContainerProvider";

test("creates container and pass children", () => {
  const config = {
    store: {
      hello: "hello",
    },
  };

  render(
    <ContainerProvider config={config}>
      <>{"test"}</>
    </ContainerProvider>
  );

  const element = screen.getByText("test");
  expect(element).toBeInTheDocument();
});

test("config is loaded in container", () => {
  const config = {
    apiService: () => {
      return {};
    },
  };

  const wrapper = ({ children }: any) => <ContainerProvider config={config}>{children}</ContainerProvider>;
  const { result } = renderHook(() => useContext(ContainerContext), { wrapper });

  expect(result.current.definitions).toHaveProperty("apiService");
});
