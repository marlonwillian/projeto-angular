import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDeAlunosComponent } from './lista-de-alunos.component';

describe('ListaDeAlunosComponent', () => {
  let component: ListaDeAlunosComponent;
  let fixture: ComponentFixture<ListaDeAlunosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaDeAlunosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaDeAlunosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
