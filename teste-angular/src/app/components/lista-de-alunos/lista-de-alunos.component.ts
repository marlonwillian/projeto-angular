import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-lista-de-alunos',
  templateUrl: './lista-de-alunos.component.html',
  styleUrls: ['./lista-de-alunos.component.css']
})
export class ListaDeAlunosComponent implements OnInit {
  qtdChaves: number = localStorage.length
  aluno: any;
  alunos: any;
  
  constructor(private sharedService: SharedService) { }
  
  ngOnInit(): void {
    this.sharedService.add$.subscribe(() => {
      this.retornaAlunos();
    });

    this.alunos = this.sharedService.getItems();
    this.alunos = this.alunos.sort((a: any, b: any) => a.value.id - b.value.id)
  }
  
  retornaAlunos() {
    window.location.reload()
  }

  formataTC (value: string) {
    if (!value) return '';

    // Remove caracteres não numéricos
    value = value.replace(/\D/g, '');

    // Aplica a formatação
    if (value.length <= 2) {
      return value;
    } else if (value.length <= 5) {
      return `(${value.slice(0, 2)}) ${value.slice(2)}`;
    } else if (value.length <= 10) {
      return `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`;
    } else {
      return `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7, 11)} ${value.slice(11)}`;
    }
  }

  formataCPF (value: string) {
    if (!value) return '';

    value = value.replace(/\D/g, '');

    if (value.length <= 3) {
      return value;
    } else if (value.length <= 6) {
      return `${value.slice(0, 3)}.${value.slice(3)}`;
    } else if (value.length <= 9) {
      return `${value.slice(0, 3)}.${value.slice(3, 6)}.${value.slice(6)}`;
    } else {
      return `${value.slice(0, 3)}.${value.slice(3, 6)}.${value.slice(6, 9)}-${value.slice(9, 11)}`;
    }
  }

  formataData (value: string) {
    if (!value) return '';
    const [ano, mes, dia] = value.split('-');

    return `${dia}/${mes}/${ano}`;
  }
}
