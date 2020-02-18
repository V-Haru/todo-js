import './styles.css';

import { Todo, TodoList } from './classes';
import { crearTodoHTML } from './js/componentes';

export const todoList = new TodoList();


//todoList.todos.forEach(todo => crearTodoHTML(todo));
//si es el unico argumento que se manda se puede reemplazar
todoList.todos.forEach(crearTodoHTML);