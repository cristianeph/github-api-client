import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {Branch} from '../interfaces/branch';

@Injectable({
  providedIn: 'root'
})
export class BranchesService {

  constructor(private http: HttpClient) {
  }

  list(): Observable<Branch[]> {
    return this.http.get<Branch[]>(`${environment.apiUrl}/repos/${environment.apiUser}/${environment.apiRepository}/branches`);
  }
}
