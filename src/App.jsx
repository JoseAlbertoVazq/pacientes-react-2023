import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoPacientes from "./components/ListadoPacientes";
import { useState, useEffect } from "react";
function App() {

  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});
  const eliminarPaciente = (id) => {
    const pacientesTrasEliminar = pacientes.filter(pacien => pacien.id !== id);
    setPacientes(pacientesTrasEliminar);
  }
  useEffect(() => {
    if(localStorage.getItem('pacientes')) setPacientes(JSON.parse(localStorage.getItem("pacientes")))
  }, []);

  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes))
  }, [pacientes])
  return (
    <div className="container mx-auto mt-20">
      <Header 
      />
      <div className="mt-12 md:flex">
        <Formulario setPacientes={setPacientes} pacientes={pacientes} paciente={paciente} setPaciente={setPaciente}/>
        <ListadoPacientes className="m-5" pacientes={pacientes} setPaciente={setPaciente} eliminarPaciente={eliminarPaciente}/>
      </div>
    </div>
  );
}

export default App;
