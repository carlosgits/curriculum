const copyToClipboard = (text: string): Promise<void> => {
    return new Promise((resolve, reject) => {
      if (!text) {
        reject("No hay texto para copiar");
        return;
      }
  
      navigator.clipboard.writeText(text)
        .then(() => {
          console.log('Texto copiado al portapapeles');
          resolve();
        })
        .catch(err => {
          console.error('Error al copiar el texto: ', err);
          reject(err);
        });
    });
  };
  
  export default copyToClipboard;