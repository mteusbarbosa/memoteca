import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

//Injeção de dependencia // Decorator Injectable
@Injectable({
  //metadado providedIn
  providedIn: 'root',
})
export class PensamentoService {
  constructor(private http: HttpClient) {}
}
