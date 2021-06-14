declare class Container {
    private _resolvedDefinitions;
    private _definitions;
    constructor(definitions: any);
    get(name: string): any;
    private resolveDefinition;
}
export default Container;
