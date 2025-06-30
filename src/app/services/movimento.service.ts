import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class MovimentoService {
    private baseUrl = 'http://localhost:8080/api/movimentos';

    constructor(private http: HttpClient) {
    }

    listar(): Observable<any[]> {
        return this.http.get<any[]>(this.baseUrl);
    }

    criar(movimento: any): Observable<any> {
        return this.http.post<any>(this.baseUrl, movimento);
    }

}