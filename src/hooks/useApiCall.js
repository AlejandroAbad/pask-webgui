import K from 'K';
import { useState, useRef, useCallback } from 'react';

export const useApiCall = (ourl, token) => {


	const [resultado, setResultado] = useState({ ok: undefined, datos: null, error: null, cargando: false, respuesta: null, query: null })

	// Para no perder el ultimo resultado entre cargas de mas resultados
	const ultimoResultado = useRef(resultado);
	if (resultado !== ultimoResultado.current) ultimoResultado.current = resultado;

	const ejecutarConsulta = useCallback((opciones, callback) => {

		if (!opciones) opciones = {};
		if (!opciones.body) opciones.body = null;
		if (!opciones.url) opciones.url = ourl;
		let { body, url, ...opcionesHttp } = opciones;

		setResultado({
			datos: ultimoResultado.current?.datos,
			error: ultimoResultado.current?.error,
			cargando: true,
			respuesta: ultimoResultado.current?.respuesta,
			query: ultimoResultado.current?.query
		});

		console.group('EJECUTANDO CONSULTA ' + url);
		console.log('URL', K.DESTINOS.CORE + url);
		console.log('OPCIONES', opcionesHttp);
		console.log('BODY', body);
		console.groupEnd();

		elamFetch(K.DESTINOS.CORE + url, opcionesHttp, token, body)
			.then(response => {
				if (response) {
					if (response.ok) {
						setResultado({ ok: true, datos: response.body, error: null, cargando: false, respuesta: response, query: body });
						if (callback) callback(null, response.body);
					} else {
						setResultado({ ok: false, datos: null, error: response.body, cargando: false, respuesta: response, query: body });
						if (callback) callback(response.body, null);
					}

				}
			})
			.catch(error => {
				setResultado({ ok: false, datos: null, error, cargando: false, respuesta: null, query: body });
				if (callback) callback(error, null);
			})

	}, [setResultado, ourl, token])

	return {
		ejecutarConsulta,
		resultado,
		setResultado
	}

}




const jsonFetch = async (url, options = {}, body = null) => {

	options.mode = 'cors';

	if (body) {
		options.body = JSON.stringify(body);
		if (options.headers)
			options.headers['Content-Type'] = 'application/json';
		else
			options.headers = { 'Content-Type': 'application/json' };
		if (!options.method) options.method = 'POST';
	}

	const r = await fetch(url, options);
	const data = await r.json();
	return ({
		ok: (r.status >= 200 && r.status < 300),
		status: r.status,
		body: data,
		headers: r.headers
	});
}

const elamFetch = (url, options = {}, token = null, body = null) => {
	if (!options.headers) options.headers = {};

	if (token) {
		options.headers['jwt'] = token;
	}

	return jsonFetch(url, options, body);
}

