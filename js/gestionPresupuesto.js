// TODO: Crear las funciones, objetos y variables indicadas en el enunciado

// TODO: Variable global
var presupuesto=0;


function actualizarPresupuesto(presup) 
{
    if(detectarNegat(presupuesto)==true)
    {
        return presupuesto;
    }
    else
    {
        return -1;
        alert(`El dato introducido es erroneo.`)
        
    }
}

function mostrarPresupuesto(presup) 
{
    alert(`Tu presupuesto actual es de: ${presupuesto}€`);
}

function crearGasto(desc, val)
{
    if(detectarNegat(val)==false)
    {
        val=0;
    }

  let gasto={
      descripcion:desc,
      valor: val,
  }
  return gasto;
}

function detectarNegat(num)
{
    if(num>0)
    {
        num=true;
    }
    else
        num=false;
}

function mostrarGasto()
{
    alert `Gasto correspondiente a ${gasto.descripcion} con valor VALOR €`
}

function actualizarDescripcion(desc)
{
    gasto.descripcion=desc;
}

function actualizarValor()
{
    if(detectarNegat(val)==true)
    {
        gasto.valor=v;
    }
}



// NO MODIFICAR A PARTIR DE AQUÍ: exportación de funciones y objetos creados para poder ejecutar los tests.
// Las funciones y objetos deben tener los nombres que se indican en el enunciado
// Si al obtener el código de una práctica se genera un conflicto, por favor incluye todo el código que aparece aquí debajo
export   {
    mostrarPresupuesto,
    actualizarPresupuesto,
    crearGasto
}
