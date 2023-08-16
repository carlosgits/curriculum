import React, { useState, useEffect } from 'react';
import "../styles/cryptoclock.css"


const Clock = () => {

    const tiempoInicialEnMilisegundos = 2 * 24 * 60 * 60 * 1000; // Dos días en milisegundos
    const [tiempoRestante, setTiempoRestante] = useState(tiempoInicialEnMilisegundos);

    useEffect(() => {
        const intervalo = setInterval(() => {
            if (tiempoRestante > 0) {
                setTiempoRestante(prevTiempo => prevTiempo - 1000); // Restar 1 segundo (1000 ms)
            } else {
                setTiempoRestante(tiempoInicialEnMilisegundos); // Reiniciar el contador
            }
        }, 1000);

        return () => clearInterval(intervalo);
    }, [tiempoRestante, tiempoInicialEnMilisegundos]);

    const segundos = Math.floor((tiempoRestante / 1000) % 60);
    const minutos = Math.floor((tiempoRestante / 1000 / 60) % 60);
    const horas = Math.floor((tiempoRestante / 1000 / 60 / 60) % 24);
    const dias = Math.floor(tiempoRestante / 1000 / 60 / 60 / 24);

    return (
        <div className='clock'>
            <div className='clock-container'>
            <div className="clock-item text-center">{dias} <br /> <p className='time-span'>DAYS</p></div ><p className="span-points text-center">:</p>,
            <div className="clock-item text-center">{horas}  <br /> <p className='time-span'>HOURS</p></div><p className="span-points text-center">:</p> ,
            <div className="clock-item text-center">{minutos} <br /> <p className='time-span'>MINUTES</p></div ><p className="span-points text-center">:</p> ,
            <div className="clock-item text-center">{segundos} <br /> <p className='time-span'>SECONDS</p></div>
        </div>
        </div>
    );
}

export default Clock;