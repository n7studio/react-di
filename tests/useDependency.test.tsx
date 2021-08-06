import React from 'react'
import { renderHook } from "@testing-library/react-hooks";
import { ContainerProvider } from "../src";
import { useDependency } from "../src";

test("get one single service or param", () => {
  const config = {
    apiUrl: "http://backend.somewhere.com",
  };

  const wrapper = ({ children }: any) => <ContainerProvider config={config}>{children}</ContainerProvider>;
  const { result } = renderHook(() => useDependency("apiUrl"), { wrapper });

  expect(result.current).toBe("http://backend.somewhere.com");
});
