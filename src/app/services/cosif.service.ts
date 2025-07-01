import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CosifService {
    private baseUrl = 'http://localhost:8080/api/cosifs';

    constructor(private http: HttpClient) {}

    listarCosifs(): Observable<any[]> {
        return this.http.get<any[]>(this.baseUrl);
    }

    listarCosifsPorProduto(codProduto: string): Observable<any[]> {
        return this.http.get<any[]>(`${this.baseUrl}/produto/${codProduto}`);
    }
}
