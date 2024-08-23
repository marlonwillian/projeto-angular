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

  constructor() { }
}
