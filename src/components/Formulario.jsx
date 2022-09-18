import { useState, useEffect } from "react";
import Error from "./Error";

function Formulario({ pacientes, setPacientes, paciente, setPaciente }) {
    const [nombre, setNombre] = useState("");
    const [propietario, setPropietario] = useState("");
    const [email, setEmail] = useState("");
    const [fecha, setFecha] = useState("");
    const [sintomas, setSintomas] = useState("");

    const [error, setError] = useState(false);

    useEffect(() => {
        if (Object.keys(paciente).length > 0) {
            setNombre(paciente.nombre);
            setPropietario(paciente.propietario);
            setEmail(paciente.email);
            setFecha(paciente.fecha);
            setSintomas(paciente.sintomas);
        } else {
        }
    }, [paciente]);

    const generarId = () => {
        const random = Math.random().toString(36).slice(2);
        const fecha = Date.now().toString(36);

        return random + fecha;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // validacion
        if ([nombre, propietario, email, fecha, sintomas].includes("")) {
            setError(true);
        } else {
            setError(false);

            // objeto paciente

            const objetoPaciente = {
                nombre,
                propietario,
                email,
                fecha,
                sintomas,
            };

            if (paciente.id) {
                objetoPaciente.id = paciente.id;
                const pacientesActualizados = pacientes.map((pacienteState) => {
                    return pacienteState.id === paciente.id ? objetoPaciente : pacienteState;
                });

                setPacientes(pacientesActualizados);
                setPaciente({});
            } else {
                objetoPaciente.id = generarId();
                setPacientes([...pacientes, objetoPaciente]);
            }

            setNombre("");
            setPropietario("");
            setEmail("");
            setFecha("");
            setSintomas("");
        }
    };

    return (
        <div className=" md:w-1/2 lg:w-2/5 m-3 md:m-0">
            <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
            <p className="text-lg mt-5 text-center mb-10">
                Añade Pacientes y {""}
                <span className="font-bold text-indigo-600">Administralos</span>
            </p>

            <form className="bg-white shadow-md rounded-md py-5 px-5" onSubmit={handleSubmit}>
                {error && <Error>Todos los campos son obligatorios</Error>}
                <div className="mb-5">
                    <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">
                        Nombre Mascota
                    </label>
                    <input
                        className="block border-2 w-full p-2 mt-2 placeholder-slate-400 rounded-md outline-slate-500"
                        type="text"
                        name="mascota"
                        id="mascota"
                        placeholder="Ingresa el nombre de la mascota"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">
                        Nombre Propietario
                    </label>
                    <input
                        className="block border-2 w-full p-2 mt-2 placeholder-slate-400 rounded-md outline-slate-500"
                        type="text"
                        name="propietario"
                        id="propietario"
                        placeholder="Ingresa el nombre del propietario"
                        value={propietario}
                        onChange={(e) => setPropietario(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="email" className="block text-gray-700 uppercase font-bold">
                        Correo Electrónico
                    </label>
                    <input
                        className="block border-2 w-full p-2 mt-2 placeholder-slate-400 rounded-md outline-slate-500"
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Ingresa el correo electrónico del propietario"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="fecha-alta" className="block text-gray-700 uppercase font-bold">
                        Fecha de alta
                    </label>
                    <input
                        className="block border-2 w-full p-2 mt-2  rounded-md outline-slate-500"
                        type="date"
                        name="fecha-alta"
                        id="fecha-alta"
                        value={fecha}
                        onChange={(e) => setFecha(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold ">
                        Síntomas
                    </label>
                    <textarea
                        className="block border-2 w-full p-2 mt-2  rounded-md outline-slate-500 resize-none placeholder-slate-400"
                        name="sintomas"
                        id="sintomas"
                        rows="5"
                        placeholder="Describe los síntomas"
                        value={sintomas}
                        onChange={(e) => setSintomas(e.target.value)}
                    ></textarea>
                </div>

                <input
                    type="submit"
                    value={paciente.id ? "Editar Paciente" : "Agregar Paciente"}
                    className="rounded-md bg-slate-700 text-white w-full p-3 uppercase font-bold hover:cursor-pointer hover:bg-slate-800 transition-all"
                />
            </form>
        </div>
    );
}

export default Formulario;
