"use client"
import Script from 'next/script';
import "@/styles/hubspot.css"

const ContactForm = () => {
  // Función para manejar la carga del script y la inicialización del formulario
  const handleHubSpotLoad = () => {
    if (window.hbspt) {
      window.hbspt.forms.create({
        region: "na1",
        portalId: "43958750",
        formId: "62410fda-9a2a-4d5d-9084-a82c28f36392",
        target: '#hubspotForm' // El ID del elemento donde se cargará el formulario
      });
    }
  };

  return (
    <>

      
      <div className='text-white'>
      <Script 
        src="//js.hsforms.net/forms/embed/v2.js"
        onLoad={handleHubSpotLoad} // Se llama a la función cuando el script ha cargado
      />

      {/* El contenedor donde se renderizará el formulario de HubSpot */}
      <div id="hubspotForm"></div>
      </div>
    </>
  );
};

export default ContactForm;
