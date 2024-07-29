export class To_do{



    static fromJson({tarea,id,completado,fecha_creado}){
        const to_do_nuevo=new To_do(tarea);
        this.id=id;
        this.completado=completado;
        this.fecha_creado=fecha_creado;
         return to_do_nuevo;
    }
    constructor(tarea){
        this.tarea=tarea;
        this.id=new Date().getTime();
        this.completado=false;
        this.fecha_creado=new Date();
    }
    imprimir_clase(){
        console.log(`${this.tarea}- ${this.id}`);
    }
}