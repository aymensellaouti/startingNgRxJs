import { inject, Injectable } from '@angular/core';
import { Todo } from '../model/todo';
import { LoggerService } from '../../services/logger.service';
import { TodoApi } from '../model/todo-api.model';
import { HttpClient } from '@angular/common/http';
import { API } from 'src/config/api.config';
import { map, Observable, tap } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private todos: TodoApi[] = [];
  http = inject(HttpClient)

  /**
   * elle retourne la liste des todos
   *
   * @returns TodoApi[]
   */
  getTodos(): Observable<TodoApi[]> {
    return this.http.get<{todos:TodoApi[]}>(API.todo).pipe(
      tap(response => console.log(response)),
      map(respone => respone.todos),
      tap(response => console.log(response)),
    );
  }

  /**
   *Elle permet d'ajouter un todo
   *
   * @param todo: Todo
   *
   */
  addTodo(todo: TodoApi): void {
    this.todos.push(todo);
  }

  /**
   * Delete le todo s'il existe
   *
   * @param todo: Todo
   * @returns boolean
   */
  deleteTodo(todo: TodoApi): boolean {
    const index = this.todos.indexOf(todo);
    if (index > -1) {
      this.todos.splice(index, 1);
      return true;
    }
    return false;
  }

}
