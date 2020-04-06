import { Component, OnInit } from '@angular/core';
import { Todo } from '../interfaces/todo';
import { Button } from 'protractor';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [
    {
      task: 'Fold clothes',
      completed: false,
    },
    {
      task: 'Put Clothes in Dresser',
      completed: false,
    },
    {
      task: 'Relax',
      completed: false,
    },
    {
      task: 'Try to Pet Cat',
      completed: true,
    },
    {
      task: 'Pet Dog',
      completed: false,
    },
    {
      task: 'Be Awesome',
      completed: false,
    },
  ];

  addTask = (newTask) => {
    this.todos.push({
      task: newTask,
      completed: false,
    });
  };

  completedTask = (itemCompleted) => {
    itemCompleted.completed = !itemCompleted.completed;
  };

  removeTask = (item) => {
    console.log(item);
    //t is a placeholder variable below
    this.todos = this.todos.filter((t) => t.task !== item.task);
    //filtering through task objects in array above^... creates a new array and will not allow through the one thing it's looking for
  };

  constructor() {}

  ngOnInit(): void {}
}
