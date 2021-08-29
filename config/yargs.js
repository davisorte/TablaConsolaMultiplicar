const argv=require('yargs').option('b',{//obtener el numero con la b
    alias:'base',
    type:'number',
    demandOption:true,
    describe:'Es la base de multiplicar'
  }).check((argv,options)=>{//checar el valor
    //console.log('yargs',argv);//checamos el error
    if(isNaN(argv.b)){//si la base es indefinida
      throw 'La base tiene que ser un numero';
    }
    return true; //si no hay errores
  }).option('l',{
    alias:'listar',
    type:'boolean',
    default:false,//si no lo llamamos se queda asi
    describe:'Muestra la tabla de multiplicar en consola'
  }).option('h',{
    alias:'hasta',
    type:'number',
    default:10,//si no lo llamamos se queda asi
    describe:'Muestra la tabla de multiplicar en consola '
  }).argv;//crea un array de objectos en la consola para mostrar varias opciones que podemos implementar

module.exports=argv;