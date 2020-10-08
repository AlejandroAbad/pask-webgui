import React from 'react';
import { HashRouter as Router, Switch, Route } from "react-router-dom";


import BootstrapMedia from 'componentes/debug/bootstrapMedia/BootstrapMedia';
import BarraNavegacionSuperior from 'componentes/barraNavegacionSuperior/BarraNavegacionSuperior';



import Pantallas from 'pantallas/Pantallas';


import { ToastContainer } from 'react-toastify';

const App = () => {



  // Almacena el JWT del usuario logeado
  //const [jwt, setJwt] = useStateLocalStorage('login.jwt', null, true);

  let content = null;

  // Si cuando el usuario entra no hay token o lo hay pero esta caducado o proximo a caducar
  // mostramos login para refrescar el token

    content = (
      <Switch>

        {/*<Route path="/usuario">
          <h3>Tu JWT</h3>
          <ReactJson src={jwt || {}} />
        </Route>*/}

        {/*<Route path="/maestro/proveedores" render={(props) => <Pantallas.MaestroProveedores {...props} />} />*/}

        <Route path="/" render={(props) => <Pantallas.Bienvenida {...props} />} />

      </Switch>
    );




  return (
    <Router>
      <BootstrapMedia />
      

      <div className="App container-xl mt-xl-5">
        <BarraNavegacionSuperior />
      
        <div className="AppBody">
          {content}
        </div>

      </div>

      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

    </Router>
  );


}

export default App;
