import { Container } from './Container';
export declare class ContainerBuilder {
    private _definitions;
    constructor(definitions: any);
    build(): Container;
}
