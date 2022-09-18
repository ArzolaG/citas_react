import Paciente from "./Paciente";

const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {
    return (
        <div className="md:w-1/2 lg:w-3/5 md:h-screen md:overflow-y-scroll">
            {pacientes.length === 0 ? (
                <>
                    <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
                    <p className=" text-xl text-center mt-5 mb-10">
                        Comienza a agregar pacientes {""}
                        <span className="text-indigo-600 font-bold">y aparecerán en este lugar</span>
                    </p>
                </>
            ) : (
                <>
                    <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
                    <p className=" text-xl text-center mt-5 mb-10">
                        Administra tus {""}
                        <span className="text-indigo-600 font-bold">pacientes y citas</span>
                    </p>

                    {pacientes.map((paciente) => {
                        return (
                            <Paciente
                                key={paciente.id}
                                paciente={paciente}
                                setPaciente={setPaciente}
                                eliminarPaciente={eliminarPaciente}
                            />
                        );
                    })}
                </>
            )}
        </div>
    );
};

export default ListadoPacientes;
