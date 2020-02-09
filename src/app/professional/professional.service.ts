import { HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { AppHttp } from '../security/app-http';
import { environment } from '../../environments/environment';

export class Pageable {
    pageNumber: number;
    pageSize: number;
    paged: boolean;
}
export class ProfessionalPage {
    content: any;
    empty: boolean;
    first: boolean;
    number: number;
    numberOfElements: number;
    pageable: Pageable;
    size: number;
    totalElements: number;
    totalPages: number;
}



export class Address {
    constructor() { }
    street: string = null;
    city: string = null;
    state: string = null;
    postalCode: string = null;
    addressNumber: string = null;
    complement: string = null;
    neighborhood: string = null;
}

export class Document {
    constructor(type) {
        this.type = type;
    }
    type: string; // CPF, CNPJ, PASSAPORTE, RNE
    value: string; // Valor do documento
}
export class Professional {
    id: number;
    firstName: string;
    lastName: string;
    fatherName: string;
    motherName: string;
    identity: string;
    dispatcher: string;
    document?: Document = new Document('CPF');
    address?: Address = new Address();
    principalNumber: string;
    secondaryNumber: string;
    bornDate: Date;
    observations: string;
    gender: string;
    email: string;
}


@Injectable()
export class ProfessionalService {
    baseUrl: string;
    token: string;

    constructor(private http: AppHttp) {
        this.baseUrl = `${environment.apiUrl}/professional`;
        this.token = "Bearer " + localStorage.getItem('token');
    }

    getById(id): Promise<Professional> {
        var headers = new HttpHeaders()
            .append('Authorization', this.token);
        if (id) {
            return this.http.get<Professional>(`${this.baseUrl}/${id}`, { headers }).toPromise();

        }
    }

    getPageOfProfessionals(filter): Promise<ProfessionalPage> {
        var headers = new HttpHeaders()
            .append('Authorization', this.token);
        if (!filter) {
            return this.http.get<ProfessionalPage>(this.baseUrl, { headers }).toPromise();
        }
    }


    getByCpf(cpf: string): Promise<Professional> {
        var headers = new HttpHeaders()
            .append('Authorization', this.token);
        if (cpf) {
            return this.http.get<Professional>(`${this.baseUrl}/CPF/${cpf}`, { headers }).toPromise();
        }
    }

    create(professional: Professional): Promise<Professional> {
        var headers = new HttpHeaders()
            .append('Authorization', this.token)
            .append('Content-Type', "application/json");
        if (professional) {
            return this.http.post<Professional>(`${this.baseUrl}`, professional, { headers }).toPromise();
        }
    }

    update(professional: Professional): Promise<Professional> {
        var headers = new HttpHeaders()
            .append('Authorization', this.token)
            .append('Content-Type', "application/json");
        if (professional) {
            return this.http.put<Professional>(`${this.baseUrl}/${professional.id}`, professional, { headers }).toPromise();
        }
    }
}