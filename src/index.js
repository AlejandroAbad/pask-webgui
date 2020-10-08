import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';

import './bootstrapExtensions.scss';
import './toastifyExtensions.scss';
import './App.scss';

import App from 'App';
import * as serviceWorker from 'serviceWorker';

import { ProveedorContextoAplicacion } from 'contexto';
import { IconContext } from "react-icons";


ReactDOM.render(
	<ProveedorContextoAplicacion>
		<IconContext.Provider value={{ size: '1.1em', className: "react-icon" }}>
			<App />
		</IconContext.Provider>
	</ProveedorContextoAplicacion>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
