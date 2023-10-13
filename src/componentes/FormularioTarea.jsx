import styled from "styled-components";
import { useState } from "react";
import { v4 as uuidv4} from "uuid"

const Formulario = styled.form`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content:center; 
    margin-bottom: 1rem;

`

const TareaInput = styled.input`
    width: 350px;
    font-size: 18px;
    background-color: #d6ffc0;
    padding: 14px 32px 14px 16px;
    border-radius: 4px 0 0 4px;
    border: 2px solid #00471b;
    color: #00471b;
    outline: none;
    @media screen and (max-width: 700px){
    width: 33%;
    flex: 1.5;
    height: 42px;
}
@media screen and (min-width: 701px)and(max-width: 900px){
    width: 35%;
}
`

const TareaBoton = styled.button`
    padding: 16px;
    font-size: 18px;
    font-family: Roboto, sans-serif;
    border: none;
    border-radius: 0 4px 4px 0;
    cursor: pointer;
    outline: none;
    background-color: #00471b;
    color: #cff97c;
    text-transform: capitalize;
    @media screen and (max-width:900px){
    flex: 1;
  }
`

const FormularioTarea = (props) => {

const [input, setInput] = useState('');

const manejarCambio = (e) => {
    setInput(e.target.value);
}

const manejarEnvio = (e) => {
    e.preventDefault();
    const TareaNueva = {
        id: uuidv4(),
        texto: input,
        completada: false
    };
    props.onSubmit(TareaNueva);
};

    return <Formulario onSubmit={manejarEnvio}>
        <TareaInput type='text' placeholder='Escribe una tarea' name='texto' onChange={manejarCambio} value={input}/>
        <TareaBoton>Agregar Tarea</TareaBoton>
    </Formulario>
} 

export default FormularioTarea;