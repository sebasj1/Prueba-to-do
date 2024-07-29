/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://webpack-inicial/./src/styles.css?");

/***/ }),

/***/ "./src/classes/index.js":
/*!******************************!*\
  !*** ./src/classes/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   To_do: () => (/* reexport safe */ _to_do_class_js__WEBPACK_IMPORTED_MODULE_0__.To_do),\n/* harmony export */   To_do_list: () => (/* reexport safe */ _to_do_list_class_js__WEBPACK_IMPORTED_MODULE_1__.To_do_list)\n/* harmony export */ });\n/* harmony import */ var _to_do_class_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./to_do.class.js */ \"./src/classes/to_do.class.js\");\n/* harmony import */ var _to_do_list_class_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./to_do_list.class.js */ \"./src/classes/to_do_list.class.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n//impórto todo lo que quiero ocupar, y luego lo \r\n\n\n//# sourceURL=webpack://webpack-inicial/./src/classes/index.js?");

/***/ }),

/***/ "./src/classes/to_do.class.js":
/*!************************************!*\
  !*** ./src/classes/to_do.class.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   To_do: () => (/* binding */ To_do)\n/* harmony export */ });\nclass To_do{\r\n\r\n\r\n\r\n    static fromJson({tarea,id,completado,fecha_creado}){\r\n        const to_do_nuevo=new To_do(tarea);\r\n        this.id=id;\r\n        this.completado=completado;\r\n        this.fecha_creado=fecha_creado;\r\n         return to_do_nuevo;\r\n    }\r\n    constructor(tarea){\r\n        this.tarea=tarea;\r\n        this.id=new Date().getTime();\r\n        this.completado=false;\r\n        this.fecha_creado=new Date();\r\n    }\r\n    imprimir_clase(){\r\n        console.log(`${this.tarea}- ${this.id}`);\r\n    }\r\n}\n\n//# sourceURL=webpack://webpack-inicial/./src/classes/to_do.class.js?");

/***/ }),

/***/ "./src/classes/to_do_list.class.js":
/*!*****************************************!*\
  !*** ./src/classes/to_do_list.class.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   To_do_list: () => (/* binding */ To_do_list)\n/* harmony export */ });\n/* harmony import */ var _to_do_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./to_do.class */ \"./src/classes/to_do.class.js\");\n\r\n\r\nclass To_do_list{\r\n    constructor(){\r\n        // this.list=[];\r\n        this.cargar_de_localStorage();\r\n    }\r\n\r\n    nuevo_to_do(tarea){\r\n        this.list.push(tarea);\r\n        this.guardar_en_localStorage();\r\n    }\r\n    eliminar_to_do(id){\r\n        this.list=this.list.filter(u=>u.id!=id); //buscar filter,devuelve un array donde sean distintos a ese id en este caso\r\n        this.guardar_en_localStorage();\r\n    }\r\n    marcar_completado(id){\r\n        const to_do_completar=this.list.find(u=>u.id==id);\r\n        (!to_do_completar.completado)?to_do_completar.completado=true:to_do_completar.completado=false;\r\n        console.log(to_do_completar);\r\n        this.guardar_en_localStorage();\r\n        \r\n    }\r\n    eliminar_completados(){\r\n        this.list=this.list.filter(u=>!u.completado);\r\n        this.guardar_en_localStorage();\r\n       \r\n    } \r\n    guardar_en_localStorage(){\r\n        // localStorage.setItem(\"To_dos\",list);\r\n        localStorage.setItem(\"To_dos\",JSON.stringify(this.list));\r\n    }\r\n    cargar_de_localStorage(){\r\n        \r\n            this.list=(localStorage.getItem(\"To_dos\"))?JSON.parse(localStorage.getItem(\"To_dos\"))\r\n        :\r\n            [];\r\n        this.list=this.list.map(obj=>_to_do_class__WEBPACK_IMPORTED_MODULE_0__.To_do.fromJson(obj));\r\n        this.list[0].imprimir_clase();\r\n    }\r\n}\n\n//# sourceURL=webpack://webpack-inicial/./src/classes/to_do_list.class.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   to_do_list: () => (/* binding */ to_do_list)\n/* harmony export */ });\n/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes */ \"./src/classes/index.js\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _js_componentes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/componentes */ \"./src/js/componentes.js\");\n//si no especificamos busca el index por defecto\n\n\n\nconst to_do_list=new _classes__WEBPACK_IMPORTED_MODULE_0__.To_do_list();\nconsole.log(to_do_list.list)\nto_do_list.list.forEach(To_do=>(0,_js_componentes__WEBPACK_IMPORTED_MODULE_2__.agregar)(To_do));\n// const tarea=new To_do(\"Limpiar la casa\");\n\n// to_do_list.nuevo_to_do(tarea);\n\n//  console.log(to_do_list)\n\n//  agregar(tarea);\n\n//  localStorage.setItem(\"mi-key\",\"ABC123\");\n//  setTimeout(()=>{\n    \n//  localStorage.removeItem(\"mi-key\");\n//  },1500);\n\n//# sourceURL=webpack://webpack-inicial/./src/index.js?");

/***/ }),

/***/ "./src/js/componentes.js":
/*!*******************************!*\
  !*** ./src/js/componentes.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   agregar: () => (/* binding */ agregar)\n/* harmony export */ });\n/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes */ \"./src/classes/index.js\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index */ \"./src/index.js\");\n\n\n\n\n\n    const todo_lista_html=document.querySelector(\".todo-list\");\n    const txtInput=document.querySelector(\".new-todo\");\n    const btn_completados=document.querySelector(\".clear-completed\");\n    const filtro=document.querySelector(\".filters\");\n    const btn_filtro=document.querySelectorAll(\".filtro\");\n\nconst agregar = ( to_do ) => {\n\n    const to_do_html=`<li class=\"${(to_do.completado)?'completed':''}\" data-id=\"${to_do.id}\">\n    <div class=\"view\">\n        <input class=\"toggle\" type=\"checkbox\" ${(to_do.completado)?'checked':''}>\n        <label>${to_do.tarea}</label>\n        <button class=\"destroy\"></button>\n    </div>\n    <input class=\"edit\" value=\"Create a TodoMVC template\">\n    </li> `\n    const div = document.createElement('div');\n    div.innerHTML=to_do_html;\n    todo_lista_html.append(div.firstElementChild);\n    return div.firstElementChild;\n\n}\n\ntxtInput.addEventListener(\"keyup\",(event)=>{//event es la tecla que presiono el usuario\n if(event.keyCode===13&&txtInput.value!=\"\"){\n    const nue_to_do=new _classes__WEBPACK_IMPORTED_MODULE_0__.To_do(txtInput.value);\n    _index__WEBPACK_IMPORTED_MODULE_1__.to_do_list.nuevo_to_do(nue_to_do);\n    agregar(nue_to_do);\n }\n})\n\ntodo_lista_html.addEventListener(\"click\",(event)=>{ \n    const tipo_elemento=event.target.localName;///input,label,button\n    const to_do_indicado=event.target.parentElement.parentElement;\n    const to_do_id=to_do_indicado.getAttribute('data-id');\n    //sabemos el nombre de lo que es\n    if(tipo_elemento==\"input\"){\n        _index__WEBPACK_IMPORTED_MODULE_1__.to_do_list.marcar_completado(to_do_id);\n        to_do_indicado.classList.toggle('completed');\n    }\n    else if(tipo_elemento==\"button\"){\n        _index__WEBPACK_IMPORTED_MODULE_1__.to_do_list.eliminar_to_do(to_do_id);\n        todo_lista_html.removeChild(to_do_indicado);\n    }\n    console.log(_index__WEBPACK_IMPORTED_MODULE_1__.to_do_list);\n})\n\nbtn_completados.addEventListener(\"click\",()=>{\n    _index__WEBPACK_IMPORTED_MODULE_1__.to_do_list.eliminar_completados(); \n    for(let i=todo_lista_html.children.length-1; i>=0;i--){\n        const to_do_elemento=todo_lista_html.children[i];\n        console.log(todo_lista_html.children[i]);\n        if(to_do_elemento.classList.contains(\"completed\")){\n            todo_lista_html.removeChild(to_do_elemento);\n        };\n    }\n})\n\nfiltro.addEventListener(\"click\",(event)=>\n{  const filtro=event.target.text;\n    if(!event.target.text)return;\n    btn_filtro.forEach(btn=>btn.classList.remove('selected'));\n    event.target.classList.add('selected');\n    for(const elem of todo_lista_html.children){\n        elem.classList.remove(\"hidden\")\n        const completo=elem.classList.contains(\"completed\");\n        switch(filtro){\n            case 'Pendientes':\n                if(completo){\n                    elem.classList.add('hidden');\n                    }break;\n            case 'Completados':\n                if(!completo){\n                    elem.classList.add('hidden');\n                    }break;\n        }\n        \n    }\n})\n\n//# sourceURL=webpack://webpack-inicial/./src/js/componentes.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;