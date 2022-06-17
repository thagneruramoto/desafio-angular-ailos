import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, switchMap, throwError } from 'rxjs';
import { API_URL } from '../constants/api.constants';
import { CPFApi } from '../interfaces/cpf-api.interface';
import { CooperadoModel } from '../models/cooperado.model';

@Injectable({
  providedIn: 'root'
})
export class CooperadoService {

  private API_CPF = API_URL + '/cpf'
  private API_COOPERADO = API_URL + '/cooperado'

  constructor(
    private http: HttpClient,
  ) { }

  consultaCPFApi(cpf: String): Observable<CPFApi> {
    return this.http.get<CPFApi>(`${this.API_CPF}/${cpf}`)
      .pipe(map(cpfApi => {
        return cpfApi
      }))
  }

  consultaCooperadoCPF(cpf: String) {
    return this.http.get<CooperadoModel>(`${this.API_COOPERADO}/${cpf}`)
      .pipe(map(cooperado => {
        return cooperado
      }))
  }
}
