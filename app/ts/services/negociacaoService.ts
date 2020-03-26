import { NegociacaoParcial, Negociacao } from '../models/index';

export class NegociacaoService {

    obterNegociacoes(handler: ResponseHandler): Promise<Negociacao[]> {

        var promise = fetch('http://localhost:8080/dados')
            .then(res => handler(res))
            .then(res => res.json())
            .then((dados: NegociacaoParcial[]) =>
                dados.map(dado => new Negociacao(new Date(), dado.vezes, dado.montante))
            );
        //TODO chatch return void but it must return a promise
        //.catch(err => console.log(err)); 

        return promise;

    }
}

export interface ResponseHandler{
    (res: Response): Response;
}