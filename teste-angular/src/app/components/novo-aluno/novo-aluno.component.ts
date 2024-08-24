import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-novo-aluno',
  templateUrl: './novo-aluno.component.html',
  styleUrls: ['./novo-aluno.component.css'],
})
export class NovoAlunoComponent implements OnInit {
  form: FormGroup;
  invalido: string = '';
  alunos: any;
  editUser: any = 0;

  constructor(private fb: FormBuilder, private sharedService: SharedService) {
    this.form = this.fb.group({
      id: [''],
      name: ['', Validators.required],
      email: ['', Validators.required],
      telefone: [''],
      celular: [''],
      cpf: [''],
      date: [''],
    });
  }

  ngOnInit(): void {
    this.alunos = this.sharedService.getItems()

    this.sharedService.edit$.subscribe((id) => {
      this.editar(id);
    });
  }

  editar(id: any) {
    this.editUser = localStorage.getItem(id);

    if (this.editUser) {
      this.form.patchValue(JSON.parse(this.editUser));
    }
  };

  novoAluno() {
    let id = localStorage.length;
    this.form.value.id = id += 1;
    const infoAluno = JSON.stringify(this.form.value);

    let userEdit = JSON.parse(this.editUser).id;

    if(this.form.valid && this.editUser === 0) {
      localStorage.setItem(this.form.value.id, infoAluno);
      this.sharedService.adicionar();
    } else if(!this.form.valid && this.editUser === 0) {
      this.invalido = "O e-mail e nome são obrigatórios";
    } else if (this.form.valid && this.editUser !== 0) {
      console.log(userEdit.toString())
      // localStorage.setItem(userEdit.toString(), JSON.stringify(infoAluno));
      // this.sharedService.adicionar();
    }
  }

  cancelarCadastro() {
    this.form.reset()
  }
}
