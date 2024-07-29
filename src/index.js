import {  To_do,To_do_list} from './classes';//si no especificamos busca el index por defecto
import './styles.css';
import { agregar } from './js/componentes';

export const to_do_list=new To_do_list();
console.log(to_do_list.list)
to_do_list.list.forEach(To_do=>agregar(To_do));
// const tarea=new To_do("Limpiar la casa");

// to_do_list.nuevo_to_do(tarea);

//  console.log(to_do_list)

//  agregar(tarea);

//  localStorage.setItem("mi-key","ABC123");
//  setTimeout(()=>{
    
//  localStorage.removeItem("mi-key");
//  },1500);