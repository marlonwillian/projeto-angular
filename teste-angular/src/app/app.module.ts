import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NovoAlunoComponent } from './components/novo-aluno/novo-aluno.component';
import { ListaDeAlunosComponent } from './components/lista-de-alunos/lista-de-alunos.component';

@NgModule({
  declarations: [
    AppComponent,
    NovoAlunoComponent,
    ListaDeAlunosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgxMaskModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
