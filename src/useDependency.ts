import { useContext } from 'react';
import { ContainerContext } from './ContainerProvider';

export const useDependency = (name: string) => {
    const container = useContext(ContainerContext);

    return container.get(name);
};
