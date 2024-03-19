/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
    constructor() {
        this.todos = [];
    }

    add(todo){
        this.todos.push(todo);
    }

    remove(indexOfTodo){
        this.todos.splice(indexOfTodo, 1);
    }

    update(index, updatedTodo){
        const n = this.todos.length
        console.log(n, index)
        console.log(this.todos)
        if (!(index >= n)){
            this.todos[index] = updatedTodo;
        }
        console.log(this.todos)
    }

    getAll(){
        return this.todos;
    }

    get(indexOfTodo){
        const n = this.todos.length
        if (indexOfTodo >= n){
            return null;
        }
        return this.todos[indexOfTodo];
    }

    clear(){
        this.todos = []
    }
}

module.exports = Todo;
