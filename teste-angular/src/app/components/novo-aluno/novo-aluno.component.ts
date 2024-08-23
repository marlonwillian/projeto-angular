import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-novo-aluno',
  templateUrl: './novo-aluno.component.html',
  styleUrls: ['./novo-aluno.component.css']
})
export class NovoAlunoComponent implements OnInit {
  form: FormGroup;
  
  constructor(private fb: FormBuilder, private sharedService: SharedService) { 
    this.form = this.fb.group({
      id: [''],
      name: ['', Validators.required],
      email: ['', Validators.required],
      telefone: [''],
      celular: [''],
      cpf: [''],
      date: ['']
    })
  }

  ngOnInit(): void {
  }

  novoAluno() {
    let id = localStorage.length
    this.form.value.id = id += 1 

    const infoAluno = JSON.stringify(this.form.value);
    localStorage.setItem(this.form.value.id, infoAluno)
    this.sharedService.adicionar();
  }
}
