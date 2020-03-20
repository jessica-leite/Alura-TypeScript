System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function logarTempoDeExecucao(emSegundos) {
        return function (target, propertyKey, descriptor) {
            const metodoOriginal = descriptor.value;
            descriptor.value = function (...args) {
                let divisor = 1;
                let unidade = "ms";
                if (emSegundos) {
                    divisor = 1000;
                    unidade = "s";
                }
                console.log(`Argumentos do metodo ${propertyKey} : ${JSON.stringify(args)}`);
                const t1 = performance.now();
                const retorno = metodoOriginal.apply(this, args);
                console.log(`O retorno do metodo ${propertyKey} foi ${JSON.stringify(retorno)}`);
                const t2 = performance.now();
                console.log(`O tempo decorrido foi de ${(t2 - t1) / divisor} ${unidade}`);
                return retorno;
            };
            return descriptor;
        };
    }
    exports_1("logarTempoDeExecucao", logarTempoDeExecucao);
    return {
        setters: [],
        execute: function () {
        }
    };
});
