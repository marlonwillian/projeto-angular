import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private addAluno = new Subject<void>();
  add$ = this.addAluno.asObservable();

  adicionar() {
    this.addAluno.next();
  }

  getItems(): { key: string, value: string }[] {
    const items: { key: string, value: string }[] = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key !== null) {
        items.push({ key, value: JSON.parse(localStorage.getItem(key)!) || '' });
      }
    }
    return items;
  }

  constructor() { }
}
