import { BrowserRouter as Router, Switch, Route} from 'react-router-dom' 
import styled from 'styled-components';
import { NavBar } from "./components/navbar"
import { SideBarMenu } from "./components/sidebar"
import { 
    Home,
    Pacientes, 
    Atendimento, 
    PacienteDetalhe } from './pages'

export default function Routes() {
    return (
        <Router>
            <NavBar />
            <SideBarMenu />
            <MainView>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/pacientes" component={Pacientes}/>
                    <Route exact path="/atendimento" component={Atendimento}/>
                    <Route exact path="/atendimento/:id" component={Atendimento}/>
                    <Route exact path="/pacientes/detalhe/:idPaciente" component={PacienteDetalhe}/>
                    <Route exact path="/pacientes/detalhe/" component={PacienteDetalhe}/>
                </Switch>
        </MainView>
       </Router>
    )

}

const MainView = styled.div`
  padding-top: var(--height-navbar);
  padding-left: var(--width-sidebar-closed);
  width: 100%;
  z-index: 90;

`;