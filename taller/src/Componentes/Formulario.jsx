import React from 'react'

const Formulario = () => {

    const [juego, setjuego] = React.useState('')
    const [descripcion, setDescripcion] = React.useState('')
    const [categoria, setCategoria] = React.useState('')
    const [horasJuego, setHorasJuego] = React.useState('')
    const [jugador, setJugador] = React.useState('')
    const [listajuegos, setListajuegos] = React.useState([])

    const guardarjuegos = (e) => {
        e.preventDefault()

        if (!juego.trim()) {
            alert('Especifique el juego')
            return
        }

        if (!descripcion.trim()) {
            alert('Digite la Descripción del juego')
            return
        }

        setListajuegos([
            ...listajuegos,
            { nombrejuego: juego, Descripcion: descripcion, Categoria: categoria, TiempoJugado: horasJuego, nombreJugador: jugador }
        ])

        e.target.reset()
        setjuego('')
        setDescripcion('')
    }

    return (
        <div className='container mt-5'>
            <h2 className='text-center'>Fomulario</h2>
            <hr />
            <div className='row'>
                <div className='col-8'>
                    <h4 className='text-center'> Listado de Juegos </h4>
                    <ul className='list-group'>
                        {
                            listajuegos.map((item, index) => (
                                <li className='list-group-item' key={index}>
                                    <spam className='lead'>{item.nombrejuego}-{item.nombreDescripcion}</spam>
                                    <button className='btn btn-danger btn-sm float-end mx-2'>
                                        Eliminar
                                    </button>
                                    <button className='btn btn-warning btn-sm float-end'>
                                        Editar
                                    </button>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className='col-4'>
                    <h4 className='text-center'>
                        <form onSubmit={guardarjuegos}>
                            <input
                                className='form-control mb-2'
                                type="text"
                                placeholder='Ingrese juego'
                                onChange={(e) => setjuego(e.target.value)}
                            />
                            <input
                                className='form-control mb-2'
                                placeholder='Ingrese descripción del Juego'
                                type="text"
                                onChange={(e) => setDescripcion(e.target.value)}
                            />
                            <input
                                className='form-control mb-2'
                                placeholder='Ingrese categoria del Juego'
                                type="text"
                                onChange={(e) => setCategoria(e.target.value)}
                            />
                            <input
                                className='form-control mb-2'
                                placeholder='Ingrese las horas de juego'
                                type="text"
                                onChange={(e) => setHorasJuego(e.target.value)}
                            />
                            <input
                                className='form-control mb-2'
                                placeholder='Ingrese el nombre del jugador'
                                type="text"
                                onChange={(e) => setCategoria(e.target.value)}
                            />

                            <button
                                className='btn btn-primary btn-block'
                                type='submit'
                            >Agregar</button>
                        </form>
                    </h4>
                </div>
            </div>
        </div>
    )
}

export default Formulario