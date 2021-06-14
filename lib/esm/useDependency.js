import { useContext } from 'react';
import { ContainerContext } from './ContainerProvider';
export var useDependency = function (name) {
    var container = useContext(ContainerContext);
    return container.get(name);
};
export default useDependency;
