import { To_do } from "./to_do.class";

export class To_do_list{
    constructor(){
        // this.list=[];
        this.cargar_de_localStorage();
    }

    nuevo_to_do(tarea){
        this.list.push(tarea);
        this.guardar_en_localStorage();
    }
    eliminar_to_do(id){
        this.list=this.list.filter(u=>u.id!=id); //buscar filter,devuelve un array donde sean distintos a ese id en este caso
        this.guardar_en_localStorage();
    }
    marcar_completado(id){
        const to_do_completar=this.list.find(u=>u.id==id);
        (!to_do_completar.completado)?to_do_completar.completado=true:to_do_completar.completado=false;
        console.log(to_do_completar);
        this.guardar_en_localStorage();
        
    }
    eliminar_completados(){
        this.list=this.list.filter(u=>!u.completado);
        this.guardar_en_localStorage();
       
    } 
    guardar_en_localStorage(){
        // localStorage.setItem("To_dos",list);
        localStorage.setItem("To_dos",JSON.stringify(this.list));
    }
    cargar_de_localStorage(){
        
            this.list=(localStorage.getItem("To_dos"))?JSON.parse(localStorage.getItem("To_dos"))
        :
            [];
        this.list=this.list.map(obj=>To_do.fromJson(obj));
        this.list[0].imprimir_clase();
    }
}