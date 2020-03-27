import { Imprimivel } from '../models/Index';

export function imprime(...negociacoes: Imprimivel[]) {

    negociacoes.forEach(n => n.paraTexto());
}