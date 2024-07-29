

import {To_do} from "../classes";
import {to_do_list} from "../index";

    const todo_lista_html=document.querySelector(".todo-list");
    const txtInput=document.querySelector(".new-todo");
    const btn_completados=document.querySelector(".clear-completed");
    const filtro=document.querySelector(".filters");
    const btn_filtro=document.querySelectorAll(".filtro");

export const agregar = ( to_do ) => {

    const to_do_html=`<li class="${(to_do.completado)?'completed':''}" data-id="${to_do.id}">
    <div class="view">
        <input class="toggle" type="checkbox" ${(to_do.completado)?'checked':''}>
        <label>${to_do.tarea}</label>
        <button class="destroy"></button>
    </div>
    <input class="edit" value="Create a TodoMVC template">
    </li> `
    const div = document.createElement('div');
    div.innerHTML=to_do_html;
    todo_lista_html.append(div.firstElementChild);
    return div.firstElementChild;

}

txtInput.addEventListener("keyup",(event)=>{//event es la tecla que presiono el usuario
 if(event.keyCode===13&&txtInput.value!=""){
    const nue_to_do=new To_do(txtInput.value);
    to_do_list.nuevo_to_do(nue_to_do);
    agregar(nue_to_do);
 }
})

todo_lista_html.addEventListener("click",(event)=>{ 
    const tipo_elemento=event.target.localName;///input,label,button
    const to_do_indicado=event.target.parentElement.parentElement;
    const to_do_id=to_do_indicado.getAttribute('data-id');
    //sabemos el nombre de lo que es
    if(tipo_elemento=="input"){
        to_do_list.marcar_completado(to_do_id);
        to_do_indicado.classList.toggle('completed');
    }
    else if(tipo_elemento=="button"){
        to_do_list.eliminar_to_do(to_do_id);
        todo_lista_html.removeChild(to_do_indicado);
    }
    console.log(to_do_list);
})

btn_completados.addEventListener("click",()=>{
    to_do_list.eliminar_completados(); 
    for(let i=todo_lista_html.children.length-1; i>=0;i--){
        const to_do_elemento=todo_lista_html.children[i];
        console.log(todo_lista_html.children[i]);
        if(to_do_elemento.classList.contains("completed")){
            todo_lista_html.removeChild(to_do_elemento);
        };
    }
})

filtro.addEventListener("click",(event)=>
{  const filtro=event.target.text;
    if(!event.target.text)return;
    btn_filtro.forEach(btn=>btn.classList.remove('selected'));
    event.target.classList.add('selected');
    for(const elem of todo_lista_html.children){
        elem.classList.remove("hidden")
        const completo=elem.classList.contains("completed");
        switch(filtro){
            case 'Pendientes':
                if(completo){
                    elem.classList.add('hidden');
                    }break;
            case 'Completados':
                if(!completo){
                    elem.classList.add('hidden');
                    }break;
        }
        
    }
})