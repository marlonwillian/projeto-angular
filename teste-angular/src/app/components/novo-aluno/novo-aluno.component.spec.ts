import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoAlunoComponent } from './novo-aluno.component';

describe('NovoAlunoComponent', () => {
  let component: NovoAlunoComponent;
  let fixture: ComponentFixture<NovoAlunoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovoAlunoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NovoAlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
