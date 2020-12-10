import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {Repo} from '../interfaces/repo';

@Injectable({
  providedIn: 'root'
})
export class ReposService {

  constructor(private http: HttpClient) {
  }

  list(): Observable<Repo[]> {
    return this.http.get<Repo[]>(`${environment.apiUrl}/users/${environment.apiUser}/repos`);
  }
}
