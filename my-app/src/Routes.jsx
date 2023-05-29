import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MenuApp from "./componentes/MenuApp.jsx";
import FormularioEstudiante from "./componentes/FormularioEstudiante";
import FormularioProfesor from "./componentes/FormularioProfesor";
import FormularioAsignatura from "./componentes/FormularioAsignatura";

const Routes = () => {
  return (
    <Router>
      <MenuApp />
      <Switch>
        <Route exact path="/" component={MenuApp} />
        <Route path="/crear-estudiante" component={FormularioEstudiante} />
        <Route path="/crear-profesor" component={FormularioProfesor} />
        <Route path="/crear-asignatura" component={FormularioAsignatura} />
      </Switch>
    </Router>
  );
};

export default Routes;
