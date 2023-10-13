import styled from "styled-components";
import FormularioTarea from "./FormularioTarea";
import Tarea from "./Tarea";
import { useState, useEffect } from "react";

const ContenedorListaTareas = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

const ListaDeTareas = () => {

    const tareasGuardados = localStorage.getItem('tareas');
    const tareasIniciales = tareasGuardados ? JSON.parse(tareasGuardados) : [];
    
    const [tareas, setTareas] = useState(tareasIniciales);

    const agregarTarea = (tarea) => {
        if (tarea.texto.trim()) {
            tarea.texto = tarea.texto.trim();
            const tareasActualizadas = [tarea, ...tareas];
            setTareas(tareasActualizadas);
        } else {
            alert("Debes agregar texto a tu nueva tarea")
        }
    };

    const eliminarTarea = (id) => {
        const tareasActualizadas = tareas.filter( tarea => tarea.id !== id)
        setTareas(tareasActualizadas);
    };

    const completarTarea = (id) => {
        const tareasActualizadas = tareas.map((tarea => {
            if (tarea.id === id) {
                tarea.completada = !tarea.completada
            } 
            return tarea;
        }))
        setTareas(tareasActualizadas);
    };

      // Función para guardar Tareas en el localStorage
    const guardarTareasEnLocalStorage = (tareas) => {
    localStorage.setItem('tareas', JSON.stringify(tareas));
        };

    // Efecto para guardar colaboradores en el localStorage cuando cambien
    useEffect(() => {
    guardarTareasEnLocalStorage(tareas);
  }, [tareas]);

    return <>
        <FormularioTarea onSubmit={agregarTarea}/>
        <ContenedorListaTareas>
            {
                tareas.map((tarea) =>
                    <Tarea key={tarea.id} id={tarea.id} texto={tarea.texto} completada={tarea.completada} eliminarTarea={eliminarTarea} completarTarea={completarTarea}/>
                )
            }
        </ContenedorListaTareas>
    </>
}

export default ListaDeTareas