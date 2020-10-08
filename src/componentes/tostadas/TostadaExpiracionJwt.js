import K from 'K';
import React, {useState, useEffect, useRef, useContext} from 'react';
import {Toast, Button} from 'react-bootstrap';
import {GoIssueReopened, GoSync} from 'react-icons/go'


import { ContextoAplicacion } from 'contexto';

import useInterval from 'hooks/useInterval';
import moment from 'moment';

const TostadaExpiracionJwt = () => {

    const { jwt, setJwt } = useContext(ContextoAplicacion);

    const [descartada, setDescartada] = useState(false);
    const [jwtTTL, setJwtTTL] = useState(0);
    const jwtRef = useRef(jwt);

    useEffect(() => {
        if (jwt !== jwtRef.current) {
            jwtRef.current = jwt;
            setDescartada(false);
            setJwtTTL(Infinity);
        }
    }, [jwt]);

    useInterval(() => {
        let ttl = calculaJwtTTL(jwt);
        if (ttl <= 0 && jwt) setJwt(null);
        setJwtTTL(ttl);
    }, 1000);
    

    if (jwtTTL <= 0 || jwtTTL > K.AVISO_JWT_PROXIMO_A_CADUCAR) return null;



    return (
    <Toast style={{ minWidth: '300px' }} onClose={() => setDescartada(true)} show={!descartada} className="border border-danger">
        <Toast.Header>
            <strong className="mr-auto"><GoIssueReopened size={18} style={{paddingBottom: '3px'}} /> Desconexión</strong>
        </Toast.Header>
        <Toast.Body>
            Las credenciales exirarán en {humanizarSegundos(jwtTTL)}.
            Vuelva a logearse para obtener más tiempo.
            
                <Button variant="outline-info" onClick={() => setJwt(null)} size="sm" className="float-right my-2">
                    <GoSync size={18} style={{paddingBottom: '3px'}} />Renovar credenciales
                </Button>
            
        </Toast.Body>
    </Toast>);

}

const calculaJwtTTL = (jwt) => {
    if (!jwt || !jwt.exp) return 0;
    let expiracion = moment.utc(jwt.exp);
    let now = moment();
    let diff = expiracion.diff(now, 'seconds');
    return Math.round(diff);
}
  
const humanizarSegundos = (segundos) => {
    if (segundos < 60) return segundos + ' segundo'+(segundos>1?'s':'');
    let minutos = Math.floor(segundos/60);
    return  minutos+ ' minuto'+(minutos>1?'s':'');
}

TostadaExpiracionJwt.calculaJwtTTL = calculaJwtTTL;
export default TostadaExpiracionJwt;