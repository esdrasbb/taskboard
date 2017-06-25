import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Estoria } from './estoria';

@Injectable()
export class TaskboardService {

  private estoriaURL = 'http://127.0.0.1:3999/estorias';
  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http) { }

  getEstorias(): Observable<Estoria[]> {
    return this.http.get(this.estoriaURL)
      .map(res => <Estoria[]>res.json())
      .catch(this.handleError);
  }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  getEstoriaById(id: number): Observable<Estoria> {
    const url = `${this.estoriaURL}/${id}`;
    return this.http.get(url)
      .map(res => <Estoria>res.json())
      .catch(this.handleError);
  }

  update(estoria: Estoria): Observable<Estoria> {
    const url = `${this.estoriaURL}/${estoria.id}`;
    return this.http
      .put(url, JSON.stringify(estoria), { headers: this.headers })
      .map((res: Response) => res.json() as Estoria)
      .catch(this.handleError);
  }

  create(estoria: Estoria): Observable<Estoria> {
    return this.http
      .post(this.estoriaURL, JSON.stringify(estoria), { headers: this.headers })
      .map((res: Response) => res.json() as Estoria)
      .catch(this.handleError);
  }

  delete(id: number): Observable<void> {
    const url = `${this.estoriaURL}/${id}`;
    return this.http.delete(url, { headers: this.headers })
      .map((res: Response) => res.json())
      .catch(this.handleError);
  }
}
