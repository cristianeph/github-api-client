import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {Commit} from '../interfaces/commit';

@Injectable({
  providedIn: 'root'
})
export class CommitsService {

  constructor(private http: HttpClient) {
  }

  listBy(branch: string): Observable<Commit[]> {
    let givenParams = new HttpParams();
    givenParams = givenParams.append('sha', branch);
    return this.http.get<Commit[]>(
      `${environment.apiUrl}/repos/${environment.apiUser}/${environment.apiRepository}/commits`, {params: givenParams}
    );
  }
}
