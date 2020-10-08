import React from 'react';
import moment from 'moment';
import { Button, Card, Col, Container, FormControl, InputGroup, Row } from 'react-bootstrap';

// eslint-disable-next-line no-unused-vars
import { Holder } from 'react-holder';

import {  MdAddAlert, MdSearch } from 'react-icons/md';


const TAREAS = [
	{ categoria: 'Hogar', titulo: 'Fosa Séptica', descripcion: 'Realizar mantenimiento de la fosa con el producto activador.', ultima: moment('2010-06-09T15:20:00Z'), periodo: { valor: 6, unidad: 'month' }, imagen: { tipo: 'TXT', valor: 'FS' } },
	{ categoria: 'Hogar', titulo: 'Termo Eléctrico', descripcion: 'Limpiar la cal del termo eléctrico.', ultima: moment('2010-06-09T15:20:00Z'), periodo: { valor: 2, unidad: 'year' }, imagen: { tipo: 'TXT', valor: 'TE' } },
	{ categoria: 'Coche', titulo: 'Escobillas', descripcion: 'Cambiar las escobillas del limpiaparabrisas.', ultima: moment('2010-06-09T15:20:00Z'), periodo: { valor: 4, unidad: 'year' }, imagen: { tipo: 'TXT', valor: 'E' } },
	{ categoria: 'Hogar', titulo: 'Deshumidificador', descripcion: 'Limpiar la cal del termo eléctrico.', ultima: moment('2010-06-09T15:20:00Z'), periodo: { valor: 2, unidad: 'year' }, imagen: { tipo: 'TXT', valor: 'DH' } },
	{ categoria: 'Hogar', titulo: 'Hollín', descripcion: 'Eliminar el hollín de la chimenea.', ultima: moment('2010-06-09T15:20:00Z'), periodo: { valor: 2, unidad: 'year' }, imagen: { tipo: 'TXT', valor: 'H' } },
	{ categoria: 'Hogar', titulo: 'Mantenimiento PC', descripcion: 'Desmontar la torre del PC y limpiar el polvo.', ultima: moment('2010-06-09T15:20:00Z'), periodo: { valor: 2, unidad: 'mes' }, imagen: { tipo: 'TXT', valor: 'PC' } },
	{ categoria: 'Finanzas', titulo: 'IBI', descripcion: 'Realiza el pago del IBI al ayuntamiento.', ultima: moment('2010-06-09T15:20:00Z'), periodo: { valor: 2, unidad: 'year' }, imagen: { tipo: 'TXT', valor: 'IBI' } },
	{ categoria: 'Finanzas', titulo: 'Seguro Coche', descripcion: 'Revisión del contrato del seguro del coche.', ultima: moment('2010-06-09T15:20:00Z'), periodo: { valor: 2, unidad: 'year' }, imagen: { tipo: 'TXT', valor: 'SC' } },
]



const PantallaBienvenida = () => {
	return (<>

		<div className="bg-claro p-4">
			<h3>Añadir nueva tarea</h3>

			<InputGroup className="mb-3">
				<InputGroup.Prepend>
					<InputGroup.Text className="bg-muyclaro border-0 text-muyclaro px-3" ><MdSearch /></InputGroup.Text>
				</InputGroup.Prepend>

				<FormControl size='lg'
					placeholder="Introduce el título de la tarea"
					aria-label="Introduce título de la tarea"
					aria-describedby="basic-addon2"
					className="bg-muyclaro text-oscuro text-center border-0"
				/>
				<InputGroup.Append>
					<Button size='lg' variant='light' className="bg-muyclaro border-0 text-oscuro" ><MdAddAlert /></Button>
				</InputGroup.Append>
			</InputGroup>

			<h5 className="mt-4">Sugerencias:</h5>
			<Container fluid>
				<Row className="flex-row justify-content-left no-gutters">
					<CardSugerencia tarea={TAREAS[0]} />
					<CardSugerencia tarea={TAREAS[1]} />
					<CardSugerencia tarea={TAREAS[2]} className="d-none d-sm-block" />
					<CardSugerencia tarea={TAREAS[3]} className="d-none d-sm-block" />
					<CardSugerencia tarea={TAREAS[4]} className="d-none d-md-block" />
					<CardSugerencia tarea={TAREAS[5]} className="d-none d-md-block" />
					<CardSugerencia tarea={TAREAS[6]} className="d-none d-lg-block" />
					<CardSugerencia tarea={TAREAS[7]} className="d-none d-lg-block" />
				</Row>
			</Container>


		</div>

		<div className='p-3 px-5'>
			<h1>Tus próximas tareas</h1>
			<p className="text-sans-serif">
				Estas son las tareas que han vencido ya o que van a vencer dentro de poco
  			</p>

			<Row className="pt-3">
				<CardTarea tarea={TAREAS[0]} />
				<CardTarea tarea={TAREAS[1]} />
				<CardTarea tarea={TAREAS[2]} />
				<CardTarea tarea={TAREAS[3]} />
				<CardTarea tarea={TAREAS[4]} />
				<CardTarea tarea={TAREAS[5]} />
				<CardTarea tarea={TAREAS[6]} />
				<CardTarea tarea={TAREAS[7]} />
			</Row>

		</div>

		<div className='p-3 px-5 bg-muyclaro'>
			<h1>Ultimas acciones</h1>
			<p className="text-sans-serif">
				Estas son las tareas que han sido realizadas recientemente
  			</p>

			<Row className="pt-3">
				<CardTareaCompletada tarea={TAREAS[0]} />
				<CardTareaCompletada tarea={TAREAS[1]} />
				<CardTareaCompletada tarea={TAREAS[2]} />
				<CardTareaCompletada tarea={TAREAS[3]} />
				<CardTareaCompletada tarea={TAREAS[4]} />
				<CardTareaCompletada tarea={TAREAS[5]} />
				<CardTareaCompletada tarea={TAREAS[6]} />
				<CardTareaCompletada tarea={TAREAS[7]} />
			</Row>

		</div>

	</>
	)
}

const CardSugerencia = ({ tarea, className, ...props }) => {
	return <Col {...props} lg={3} md={4} sm={6} className={`${className || ''} m-0 p-1`} >
		<div className="text-center bg-muyclaro" style={{ minHeight: '9em' }}>



			<div className="text-dark py-2 px-3">

				<Card.Title className="font-weight-bold mt-1 mb-1">{tarea.titulo}</Card.Title>
				<Card.Text className="text-compacto text-sans-serif mb-4">
					{tarea.descripcion}
				</Card.Text>
			</div>
			<small className="d-block absolute-bottom-center text-oscuro pb-1">
				{tarea.categoria}
			</small>

		</div>
	</Col>
}

const CardTareaCompletada = ({ tarea }) => {

	return <Col lg={4} md={6} className="mb-4">
		<div className="text-center">

			<ImagenTareaCompletada imagen={tarea.imagen} />

			<Categoria>
				{tarea.categoria}
			</Categoria>

			<div className="text-dark absolute-top-center pt-4 px-3">

				<Card.Title className="font-weight-bold mt-1">{tarea.titulo}</Card.Title>
				<Card.Text className="text-compacto text-sans-serif">
					{tarea.descripcion}
				</Card.Text>



			</div>

			<Card.Text as="div"  className="text-right text-sans-serif bg-claro p-2">
				<small>
					<div>Completada por última vez hace 5 meses</div>
				</small>
			</Card.Text>
		</div>
	</Col>

}

const CardTarea = ({ tarea }) => {

	return <Col lg={4} md={6} className="mb-4">
		<div className="text-center">

			<ImagenTarea imagen={tarea.imagen} />

			<Categoria>
				{tarea.categoria}
			</Categoria>

			<div className="text-dark absolute-top-center pt-4 px-4">

				<Card.Title className="font-weight-bold mt-1">{tarea.titulo}</Card.Title>
				<Card.Text className="text-compacto text-sans-serif">
					{tarea.descripcion}
				</Card.Text>



			</div>

			<Card.Text as="div" className="text-right text-sans-serif bg-claro p-2">
				<small>
					<div className='text-danger'>Retrasado por 1 mes</div>
					<div>Completada por última vez hace 5 meses</div>
				</small>
			</Card.Text>
		</div>
	</Col>

}


const Categoria = ({ ...props }) => {
	return <small {...props} className="d-block absolute-top-center pt-1 px-4 text-left text-oscuro" />
}


const ImagenTarea = ({ imagen }) => {

	return <ImgHolder className='card-img-top' height='140' width='100p' variant="top" text={imagen.valor} size={60} font='Carter One' bg='f0f8ff' fg='b0c4de' />
	// 4682b4
	// b0c4de
	// f0f8ff
}


const ImagenTareaCompletada = ({ imagen }) => {

	return <ImgHolder className='card-img-top' height='140' width='100p' variant="top" text={imagen.valor} size={60} font='Carter One' bg='ffffff' fg='f0f8ff' />
	// 4682b4
	// b0c4de
	// f0f8ff
}


const ImgHolder = ({ width, height, theme, random, bg, fg, text, size, font, align, outline, lineWrap, ...props }) => {

	//theme: The theme to use for the placeholder.Example: holder.js / 300x200 ? theme = sky
	//random: Use random theme.Example: holder.js / 300x200 ? random = yes
	//bg: Background color.Example: holder.js / 300x200 ? bg = 2a2025
	//fg: Foreground(text) color.Example: holder.js / 300x200 ? fg = ffffff
	//text: Custom text.Example: holder.js / 300x200 ? text = Hello
	//size: Custom text size.Defaults to pt units.Example: holder.js / 300x200 ? size = 50
	//font: Custom text font.Example: holder.js / 300x200 ? font = Helvetica
	//align: Custom text alignment(left, right).Example: holder.js / 300x200 ? align = left
	//outline: Draw outline and diagonals for placeholder.Example: holder.js / 300x200 ? outline = yes
	//lineWrap: Maximum line length to image width ratio.Example: holder.js / 300x200 ? lineWrap = 0.5

	let formEncodedData = new FormData();

	if (theme) formEncodedData.append('theme', theme);
	if (random) formEncodedData.append('random', 'yes');
	if (bg) formEncodedData.append('bg', bg);
	if (fg) formEncodedData.append('fg', fg);
	if (text) formEncodedData.append('text', text);
	if (size) formEncodedData.append('size', size);
	if (font) formEncodedData.append('font', font);
	if (align) formEncodedData.append('align', align);
	if (outline) formEncodedData.append('outline', 'yes');
	if (lineWrap) formEncodedData.append('align', lineWrap);

	const queryString = [...formEncodedData.entries()].map(x => `${encodeURIComponent(x[0])}=${encodeURIComponent(x[1])}`).join('&');
	const holderUrl = 'holder.js/' + (width || 300) + 'x' + (height || 200) + '?' + queryString;

	return <img {...props} src={holderUrl} alt={text} />
}

export default PantallaBienvenida;