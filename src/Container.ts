class Container {
    private _resolvedDefinitions: any = {};
    private _definitions: any = {};

    constructor(definitions: any) {
        this._definitions = definitions;
    }

    public get(name: string) {
        if (!this._resolvedDefinitions[name]) {
            this._resolvedDefinitions[name] = this.resolveDefinition(name);
        }

        return this._resolvedDefinitions[name];
    }

    private resolveDefinition(name: string) {
        const definition = this._definitions[name];
        if (definition instanceof Function) {
            return definition(this);
        }

        return definition;
    }
}

export default Container;
