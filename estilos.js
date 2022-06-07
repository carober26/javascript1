let billetera= 0;
let opcion;
let saldo = 0;
let alojamiento= 0;
let fecha= 0;
let opc;
let mes;


const cargarSaldo = () => {
    billetera = Number(prompt("ingrese su saldo"));
    saldo = saldo + billetera;
  }

  const verAlojamientos = () => {
    let opc= Number(prompt(`
    
      1-Palermo Holliwood Apt $9000
      2-Ciudad de la Paz $7800
      3- Quartier Dorrego $10500
      4-San Telmo House $13400
      5- Barracas Loft $6500
    `))

    switch (opc) {
        case 1:{
            alojamiento = alojamiento + 9000
            saldo = billetera - alojamiento;
            break;
        }
        case 2: {
            alojamiento = alojamiento + 7800
            saldo = billetera - alojamiento;
            break;
        }
        case 3: {
            alojamiento = alojamiento + 10500
            saldo = billetera - alojamiento;
            break;

        }
        case 4: {
            alojamiento = alojamiento + 13400
            saldo = billetera - alojamiento;
            break;
        }
        case 5: {
            alojamiento = alojamiento + 6500
            saldo = billetera - alojamiento;
            break;
        }

    }
}

const verFechas  = () => {
    let mes= Number(prompt(`
    
      1-Julio
      2-Agosto
      3- Septiembre
      4-Octubre
      5- Noviembre
    `))

    switch (opc) {
        case 1:{
            alert("seleccionaste Julio");
            break;
        }
        case 2: {
            alert("seleccionaste Agosto");
           break
        }
        case 3: {
            alert("seleccionaste Septiembre");
          break 
        }
        case 4: {
            alert("seleccionaste Octubre");
          break 
        }
        case 5: {
            alert("seleccionaste Noviembre");
           break
        }

    }
}



const Pagar  = () => {
    alert (`Usted ha pagado  ${alojamiento} por el alojamiento ${} el mes ${opcion}`);
}


do {
    
    opcion = Number(prompt(`
  CAWE - Elegí tu Alojamiento
  mi saldo ${saldo}
  1-Cargar dinero
  2-Ver Alojamientos
  3- Ver Fechas
  4-Pagar
  5-Salir
  
  `))
  
      switch (opcion) {
          case 1: {
              cargarSaldo();
              break;
          }
          case 2: {
              verAlojamientos();
              break;
          }
          case 3: {
              verFechas();
              break;
          }
          case 4: {
               Pagar(); 
              break;
          }
          
          case 5: {
              alert("gracias por usar nuestros servicios")
              break;
          }
          default: {
              alert("dato ingresado no valido")
              break
          };
  
      }
  } while (opcion !== 5)

