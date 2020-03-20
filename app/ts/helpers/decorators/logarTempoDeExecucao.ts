export function logarTempoDeExecucao(emSegundos?: boolean) {

	return function (target: any, propertyKey: string, descriptor: PropertyDescriptor ) {

		const metodoOriginal = descriptor.value;

		descriptor.value = function (...args: any[]) {

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
		}

		return descriptor;
	}
}