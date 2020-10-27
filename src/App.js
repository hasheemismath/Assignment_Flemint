import './App.css';
import {Container} from '@material-ui/core';
import { Route, Switch } from 'react-router-dom';
import Header from './component/header/header';
import Demo from './pages/form/Main';
import React from "react";
import Divider from "./component/Divider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
        <Container maxWidth="lg">

                <Header/>
              <Switch>
                <Route exact path='/' component={Demo}  />
              </Switch>
              <Divider/>
      </Container>
  );
}

export default App;
