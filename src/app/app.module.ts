import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './components/cabecalho/cabecalho.component';
import { CriarPensamentoComponent } from './components/pensamento/criar-pensamento/criar-pensamento.component';
import { ListarPensamentoComponent } from './components/pensamento/listar-pensamento/listar-pensamento.component';
import { PensamentoComponent } from './components/pensamento/pensamento/pensamento.component';
import { RodapeComponent } from './components/rodape/rodape.component';
import { ExcluirPensamentoComponent } from './components/pensamento/excluir-pensamento/excluir-pensamento.component';
import { EditarPensamentoComponent } from './components/pensamento/editar-pensamento/editar-pensamento.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    RodapeComponent,
    CriarPensamentoComponent,
    ListarPensamentoComponent,
    PensamentoComponent,
    ExcluirPensamentoComponent,
    EditarPensamentoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
