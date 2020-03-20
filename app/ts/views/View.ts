import { logarTempoDeExecucao } from '../helpers/decorators/index';

export abstract class View<T> {
    private _element: JQuery;

    constructor(selector : string) {
        this._element = $(selector);
    }

    @logarTempoDeExecucao()
    update(model : T) : void {
        this._element.html(this.template(model));
    }

    abstract template(model : T) : string
}