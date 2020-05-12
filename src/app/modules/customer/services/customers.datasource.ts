


import {CollectionViewer, DataSource} from "@angular/cdk/collections";
import {Observable, BehaviorSubject, of} from "rxjs";
import {catchError, finalize} from "rxjs/operators";
import {Customer} from "../model/customer";
import { CustomerService } from './customer.service';



export class CustomersDataSource implements DataSource<Customer> {

    private customersSubject = new BehaviorSubject<Customer[]>([]);

    private loadingSubject = new BehaviorSubject<boolean>(false);

    public loading$ = this.loadingSubject.asObservable();

    constructor(private customerService: CustomerService) {

    }

    loadCustomers(filter:string,
                sortDirection:string,
                pageIndex:number,
                pageSize:number) {

        this.loadingSubject.next(true);

        this.customerService.findCustomers(filter, sortDirection,
            pageIndex, pageSize).pipe(
                catchError(() => of([])),
                finalize(() => this.loadingSubject.next(false))
            )
            .subscribe(customers => this.customersSubject.next(customers));

    }

    connect(collectionViewer: CollectionViewer): Observable<Customer[]> {
        console.log("Connecting data source");
        return this.customersSubject.asObservable();
    }

    disconnect(collectionViewer: CollectionViewer): void {
        this.customersSubject.complete();
        this.loadingSubject.complete();
    }

}

