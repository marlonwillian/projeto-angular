import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-de-alunos',
  templateUrl: './lista-de-alunos.component.html',
  styleUrls: ['./lista-de-alunos.component.css']
})
export class ListaDeAlunosComponent implements OnInit {
  qtdChaves: number = localStorage.length
  aluno: any;
  
  constructor() { }
  
  ngOnInit(): void {
  }
  
  retornaAlunos() {
    const ultimoAluno = localStorage.getItem(this.qtdChaves.toString())
    this.aluno = JSON.parse(ultimoAluno!);
    console.log(this.aluno.name!)
  }
}
