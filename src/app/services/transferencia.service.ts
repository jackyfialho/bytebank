import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Transferencia } from '../models/transferencia.model';

@Injectable({
  providedIn: 'root',
})
export class TransferenciaService {
  private listaTransferencia: any[] = [];
  private url = 'http://localhost:3000/transferencias';

  constructor(private httpClient: HttpClient) {}

  get transferencias() {
    return this.listaTransferencia;
  }

  adicionar(transferencia: Transferencia) {
    this.hidratar(transferencia);
    return this.httpClient.post<Transferencia>(this.url, transferencia);
  }

  todas() {
    return this.httpClient.get<Transferencia[]>(this.url);
  }

  private hidratar(transferencia: any) {
    transferencia.data = new Date();
  }
}
