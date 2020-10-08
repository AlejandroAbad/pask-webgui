import React from 'react';
import { Alert, Spinner } from 'react-bootstrap';

const PanelCarga = ( {variant, texto} ) => {

	if (!variant) variant = 'primary';

	return <Alert variant={variant}>
		
		<div className="text-center">
			<Spinner animation="border" size="lg" variant={variant} className="my-3" />
			<br />
			<h4 className={`text-` + variant}>{texto || 'Cargando datos ...'}</h4> 
		</div>
		
		

	</Alert>
}

export default PanelCarga;