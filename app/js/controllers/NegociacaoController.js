System.register(["../models/Index", "../views/Index"], function (exports_1, context_1) {
    "use strict";
    var Index_1, Index_2, NegociacaoController, DiaDaSemana;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (Index_1_1) {
                Index_1 = Index_1_1;
            },
            function (Index_2_1) {
                Index_2 = Index_2_1;
            }
        ],
        execute: function () {
            NegociacaoController = class NegociacaoController {
                constructor() {
                    this._negociacoes = new Index_1.Negociacoes();
                    this._negociacoesView = new Index_2.NegociacoesView('#negociacoesView');
                    this._mensagemView = new Index_2.MensagemView('#mensagemView');
                    this._inputData = $('#data');
                    this._inputQuantidade = $('#quantidade');
                    this._inputValor = $('#valor');
                    this._negociacoesView.update(this._negociacoes);
                }
                adiciona(event) {
                    event.preventDefault();
                    const data = new Date(this._inputData.val().replace(/-/g, '/'));
                    if (!this._ehDiaUtil(data)) {
                        this._mensagemView.update("Negociacoes so sao permitidas em dias uteis");
                        return;
                    }
                    const quantidade = parseInt(this._inputQuantidade.val());
                    const valor = parseFloat(this._inputValor.val());
                    const negociacao = new Index_1.Negociacao(data, quantidade, valor);
                    this._negociacoes.adicionar(negociacao);
                    this._negociacoesView.update(this._negociacoes);
                    this._mensagemView.update('Negocia\u00e7\u00e3o cadastrada com sucesso!');
                }
                _ehDiaUtil(data) {
                    var dia = data.getDay();
                    return dia != DiaDaSemana.Domingo && dia != DiaDaSemana.Sabado;
                }
            };
            exports_1("NegociacaoController", NegociacaoController);
            (function (DiaDaSemana) {
                DiaDaSemana[DiaDaSemana["Domingo"] = 0] = "Domingo";
                DiaDaSemana[DiaDaSemana["Segunda"] = 1] = "Segunda";
                DiaDaSemana[DiaDaSemana["Terca"] = 2] = "Terca";
                DiaDaSemana[DiaDaSemana["Quarta"] = 3] = "Quarta";
                DiaDaSemana[DiaDaSemana["Quinta"] = 4] = "Quinta";
                DiaDaSemana[DiaDaSemana["Sexta"] = 5] = "Sexta";
                DiaDaSemana[DiaDaSemana["Sabado"] = 6] = "Sabado";
            })(DiaDaSemana || (DiaDaSemana = {}));
        }
    };
});
