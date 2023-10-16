import styled from "styled-components";
import { FaDeleteLeft } from 'react-icons/fa6'

const TareaContenedor = styled.div`
    width: 500px;
    font-family: 'Reenie Beanie', cursive;
    min-height: 65px;
    text-decoration: ${props => (props.completada === "true" ? 'line-through' : 'none')};
    margin: 5px 0;
    padding: 8px 15px 8px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 7px;
    border: 1px solid #3f7635;
    cursor: pointer;
    color: ${props => (props.completada === "true" ? '#8b7200' : '#cff97c')};

    &:nth-child(3n + 1) {
        background-color: ${props => (props.completada === "true" ? '#ffec83' : '#173d16')};
    }

    &:nth-child(3n + 2) {
        background-color: ${props => (props.completada === "true" ? '#ffec83' : '#2f752d')};
    }

    &:nth-child(3n + 3) {
        background-color: ${props => (props.completada === "true" ? '#ffec83' : '#489145')};
    }
`

const TareaTexto = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    font-size: 30px;
    align-items: center;
    overflow-wrap: anywhere;
`

const TareaIconosContenedor = styled.div`
    width: 25px;
    height: 25px;
`

const IconoEliminar = styled(FaDeleteLeft)`
    font-size:25px;
    &:hover {
        color: #fe4242;
    }
`

const Tarea = ({ texto, completada, id, completarTarea, eliminarTarea }) => {
    return <TareaContenedor completada={completada.toString()}>
        <TareaTexto onClick={() => completarTarea(id)}>
            {texto}
        </TareaTexto>
        <TareaIconosContenedor onClick={() => eliminarTarea(id)}>
            <IconoEliminar />
        </TareaIconosContenedor>
    </TareaContenedor>
}

export default Tarea