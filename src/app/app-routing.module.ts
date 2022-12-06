import { EditarPensamentoComponent } from './components/pensamento/editar-pensamento/editar-pensamento.component';
import { ExcluirPensamentoComponent } from './components/pensamento/excluir-pensamento/excluir-pensamento.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CriarPensamentoComponent } from './components/pensamento/criar-pensamento/criar-pensamento.component';
import { ListarPensamentoComponent } from './components/pensamento/listar-pensamento/listar-pensamento.component';

const routes: Routes = [
  {
  path: '',
  redirectTo: 'listarPensamento',
  pathMatch: 'full'
  },
  {
  path: 'criarPensamento',
  component: CriarPensamentoComponent
  },
  {
  path: 'listarPensamento',
  component: ListarPensamentoComponent
  },
  {
  path: 'pensamento/excluirPensamento/:id',
  component: ExcluirPensamentoComponent
  },
  {
  path: 'pensamento/editarPensamento/:id',
  component: EditarPensamentoComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
