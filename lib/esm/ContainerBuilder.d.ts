import Container from './Container';
declare class ContainerBuilder {
    private _definitions;
    constructor(definitions: any);
    build(): Container;
}
export default ContainerBuilder;
