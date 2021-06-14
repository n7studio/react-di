import Container from './Container';

class ContainerBuilder {
    private _definitions: any;

    constructor(definitions: any) {
        this._definitions = definitions;
    }

    build() {
        const container = new Container(this._definitions);
        return container;
    }
}

export default ContainerBuilder;
