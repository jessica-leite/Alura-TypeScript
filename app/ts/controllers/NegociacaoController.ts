import { Negociacao, Negociacoes } from '../models/Index';
import { MensagemView, NegociacoesView } from '../views/Index';

export class NegociacaoController{

	private _inputData: JQuery;
	private _inputQuantidade: JQuery;
	private _inputValor: JQuery;
	private _negociacoes = new Negociacoes();
	private _negociacoesView = new NegociacoesView('#negociacoesView');
	private _mensagemView = new MensagemView('#mensagemView');

	constructor() {
		this._inputData = $('#data');
		this._inputQuantidade = $('#quantidade');
		this._inputValor = $('#valor');

		this._negociacoesView.update(this._negociacoes);
	}

	adiciona(event: Event) {

		event.preventDefault();

		const data = new Date(this._inputData.val().replace(/-/g, '/'));
		if (!this._ehDiaUtil(data)) {
			this._mensagemView.update("Negociacoes so sao permitidas em dias uteis");
			return
		}

		const quantidade = parseInt(this._inputQuantidade.val());
		const valor = parseFloat(this._inputValor.val());

		const negociacao = new Negociacao(data, quantidade, valor);

		this._negociacoes.adicionar(negociacao);

		this._negociacoesView.update(this._negociacoes);

		this._mensagemView.update('Negocia\u00e7\u00e3o cadastrada com sucesso!');
	}

	private _ehDiaUtil(data: Date) {
		var dia = data.getDay();
		return dia != DiaDaSemana.Domingo && dia != DiaDaSemana.Sabado;
	}
}

enum DiaDaSemana {
	Domingo,
	Segunda,
	Terca,
	Quarta,
	Quinta,
	Sexta,
	Sabado
}