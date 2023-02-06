const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {


  return (
    <div className="mx5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre mascota: {""}
        <span className="font-normal normal-case">{paciente.nombre}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Propietario: {""}
        <span className="font-normal normal-case">{paciente.propietario}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email: {""}
        <span className="font-normal normal-case">{paciente.email}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha Alta: {""}
        <span className="font-normal normal-case">{paciente.fecha}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Síntomas: {""}
        <span className="font-normal normal-case">{paciente.sintomas}</span>
      </p>
      <div id="botones" className="flex justify-between">
          <button
            className="py-2 px-10  bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
            type="button"
            onClick={() => setPaciente(paciente)}
          >
            Editar
          </button>
          <button
            className="py-2 px-10  bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
            type="button"
            onClick={() => eliminarPaciente(paciente.id)}
          >
            Eliminar
          </button>
      </div>
    </div>
  );
};

export default Paciente;
