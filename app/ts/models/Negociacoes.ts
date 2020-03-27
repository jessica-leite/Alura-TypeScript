import { Negociacao } from './Index';
import { MeuObjeto } from './MeuObjeto';

export class Negociacoes implements MeuObjeto<Negociacao[]> {
    private _negociacoes: Negociacao[] = [];

    adicionar(negociacao : Negociacao) {

        this._negociacoes.push(negociacao);
    }

    paraArray() {

        return ([] as Negociacao[]).concat(this._negociacoes);
    }

    paraTexto() {
        console.log('-----Imprimindo-----');
        console.log(JSON.stringify(this._negociacoes));
    }

    ehIgual(negociacoes: Negociacao[]): boolean {

        return JSON.stringify(this._negociacoes) == JSON.stringify(negociacoes);
    }
}