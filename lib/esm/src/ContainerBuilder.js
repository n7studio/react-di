import { Container } from './Container';
var ContainerBuilder = /** @class */ (function () {
    function ContainerBuilder(definitions) {
        this._definitions = definitions;
    }
    ContainerBuilder.prototype.build = function () {
        var container = new Container(this._definitions);
        return container;
    };
    return ContainerBuilder;
}());
export { ContainerBuilder };
