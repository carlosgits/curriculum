"use client"

import Spline from '@splinetool/react-spline';
import { useRef, useState, useEffect } from 'react';

const SplineDesign = () => {
    const cube = useRef();
    const [isMobile, setIsMobile] = useState(true);

    useEffect(() => {
        // Función para verificar el tamaño de la pantalla
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth < 640);  // 640px es el breakpoint para 'sm' en Tailwind
        };

        // Verifica el tamaño de pantalla al montar y en cada cambio de tamaño
        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);

        // Limpiar el event listener al desmontar el componente
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    function onLoad(spline) {
        const obj = spline.findObjectByName('Cube');
        cube.current = obj;
    }

    function moveObj() {
        console.log(cube.current);
        cube.current.position.x += 10;
    }

    // Si 'isMobile' es verdadero, no renderizar el componente Spline
    if (isMobile) {
        return null;
    }
    return (
        <div>
            {!isMobile && (
                <div className='scale-[40%] z-[-50] top-[275px] left-[-599px] absolute lg:right-[55vw] lg:top-[-185px] md:top-[-185px] md:right-[20vw]'>
                    <Spline
                        scene="https://prod.spline.design/XtmCvxx6rIRsVzpj/scene.splinecode"
                        onLoad={onLoad}
                    />
                   
                </div>
            )}
        </div>
    );
            }
export default SplineDesign;
