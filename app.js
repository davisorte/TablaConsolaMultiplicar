const {crearArchivo}=require('./helpers/multiplicar')//importar multiplicacion
const argv=require('./config/yargs')
const colors=require('colors')
//console.clear();//limpiar la consola
//const n=5;
//console.log(process.argv);

//console.log('base: yargs',argv.base);
//usar una desturturacion para usar el tercer argumento 
//const [,,arg3='base=5']=process.argv
//const [,base=5]=arg3.split('=')//metodo que separa en dos cuando esta igual "="
//console.log(base);/*muestra el node y el programa*/
crearArchivo(argv.b,argv.l,argv.h)//la base va a sakir del argv.b
    .then(nombreArchivo=>console.log(colors.rainbow(nombreArchivo) ,'creado'))
    .catch(err=>console.log(err));
/**
 * npm init:para crear un package json
 * nos ayuda a ejecutar los comandos
 * "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "base3":"node app --base=8"//simplificar los comandos
  },
  en la consola escribir lo siguiente para que se ejecute
  npm run base3
  desintalar un npm
  npm uninstall colors
 * 
 */