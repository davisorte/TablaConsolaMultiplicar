const fs = require("fs"); //importar la libreria File System 'fs'

const crearArchivo = async (base = 5,listar,hasta) => {
  //retorna una promesa

  try {
    //console.log(`tabla del ${base}`);
    let salida = "",consola="";
    for (let index = 1; index <= hasta; index++) {
      salida += `El numero: ${base} x ${index} = ${base * index}\n`; //Guarda los resultados
      //consola+= `El numero: ${base} x ${index} = ${base * index}\n`; //esto si tiene caracteres especiales
    }
    if(listar){
      console.log(salida);
    }
    
    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

    return `tabla-${base}.txt`;
  } catch (err) {
    throw err;
  }

  //metodo con funcion de retorno
  //fs.writeFileSync(`tabla-${base}.txt`, salida); //crear el archivo con la tabla de multiplicar
  //console.log(`tabla-${base}.txt creada`);
};
module.exports = {
  //exportamos la funcion
  crearArchivo,
};
