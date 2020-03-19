import { Negociacao } from './Index';

export class Negociacoes {
    private _negociacoes: Negociacao[] = [];

    adicionar(negociacao : Negociacao) {

        this._negociacoes.push(negociacao);
    }

    paraArray() {

        return ([] as Negociacao[]).concat(this._negociacoes);
    }
}