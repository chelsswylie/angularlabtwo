import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(todo: any[], searchText: string): any[] {
    if (!todo) return [];
    if (!searchText) return todo;
    searchText = searchText.toLowerCase();
    return todo.filter((t) => {
      return t.task.toLowerCase().includes(searchText);
    });
  }
}
