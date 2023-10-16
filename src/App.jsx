import styled from 'styled-components';
import LogoApp from './img/TasksLogo.svg';
import ListaDeTareas from './componentes/ListadeTareas';
import LogoTasks from './img/logo-footer-tasks.png'

const AppTasks = styled.div`
  color: white;
  background-color: #d6ffc0;
  padding:40px 0 0 0;
  display: flex;
  flex-wrap:wrap;
  justify-content: center;
  align-items: center;
`

const ContenedorLogo = styled.div`
  width: 100%;
  margin: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Logo = styled.img`
  width: 400px;
  @media screen and (max-width: 900px){
   width: 200px; 
  }
`

const ListaTareasPrincipal = styled.div`
  width: 600px;
  min-height: 500px;
  background-color: #aef182;
  padding: 25px;
  margin: 10px 10px 100px 10px;
  border-radius: 26px;
  @media screen and (max-width: 900px){
    width: 80%;
    margin-bottom: 5rem;
  }
`

const ListaTareasTitulo = styled.h1`
  color: #103902;
  font-size: 35px;
  font-family: 'Rampart One', sans-serif;
  text-align: center;
  margin: 20px 0;
`

const Footer = styled.footer`
  display: flex;
  padding: 3rem 0;
  justify-content: center;
  align-items: center;
  border-top: 3px solid #233b19;
`

const FooterLogo = styled.img`
  width: 30%;
  border-radius: 25px;
  @media screen and (max-width:600px){
    width: 70%;
  }
  @media screen and (min-width: 601px) and (max-width:900px){
    width: 50%;
  }
`

function App() {
  return (
    <AppTasks>
      <ContenedorLogo>
        <Logo src={LogoApp} alt='Logo de Tasks'/>
      </ContenedorLogo>
      <ListaTareasPrincipal>
        <ListaTareasTitulo>Mis tareas</ListaTareasTitulo>
        <ListaDeTareas />
      </ListaTareasPrincipal>
      <Footer>
        <FooterLogo src={LogoTasks} alt='Logo del Pie de Página de Tasks'/>
      </Footer>
    </AppTasks>
  );
}

export default App;
