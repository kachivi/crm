

import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Customer} from "../model/customer";
import {map} from "rxjs/operators";


@Injectable()
export class CustomerService {

    constructor(private http:HttpClient) {

    }

    findCustomerById(customerId: number): Observable<Customer> {
        return this.http.get<Customer>(`/api/customer/${customerId}`);
    }

    findAllCustomers(): Observable<Customer[]> {
        return this.http.get('/api/customers')
            .pipe(
                map(res => res['payload'])
            );
    }
  
    findCustomers(
        filter = '', sortOrder = 'asc',
        pageNumber = 0, pageSize = 3):  Observable<Customer[]> {

        return this.http.get('/api/customers', {
            params: new HttpParams()
                .set('filter', filter)
                .set('sortOrder', sortOrder)
                .set('pageNumber', pageNumber.toString())
                .set('pageSize', pageSize.toString())
        }).pipe(
            map(res =>  res["payload"])
        );
    }

}