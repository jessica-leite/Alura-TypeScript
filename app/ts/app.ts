import { NegociacaoController } from './controllers/NegociacaoController';

const controller = new NegociacaoController();

$('.form').submit(controller.adiciona.bind(controller));

$('#btn-importar').click(controller.importarDados.bind(controller));
