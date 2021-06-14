import React, { createContext } from 'react';
import ContainerBuilder from './ContainerBuilder';

interface ContainerProviderProps {
    config: any;
    children: JSX.Element;
}

export const ContainerContext = createContext(undefined as any);

export const ContainerProvider = ({ config, children }: ContainerProviderProps) => {
    const containerBuilder = new ContainerBuilder(config);
    const container = containerBuilder.build();

    return <ContainerContext.Provider value={container}>{children}</ContainerContext.Provider>;
};

export default ContainerProvider;
