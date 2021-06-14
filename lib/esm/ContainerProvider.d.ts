import React from "react";
interface ContainerProviderProps {
    config: any;
    children: JSX.Element;
}
export declare const ContainerContext: React.Context<any>;
export declare const ContainerProvider: ({ config, children }: ContainerProviderProps) => JSX.Element;
export {};
