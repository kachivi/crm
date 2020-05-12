import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import {debounceTime, distinctUntilChanged, startWith, tap, delay} from 'rxjs/operators';
import {merge, fromEvent} from "rxjs";
import {Customer} from '../model/customer';
import {CustomerService} from '../services/customer.service';
import {CustomersDataSource} from '../services/customers.datasource';

@Component({
  selector: 'app-search-customer',
  templateUrl: './search-customer.component.html',
  styleUrls: ['./search-customer.component.scss']
})
export class SearchCustomerComponent implements OnInit, AfterViewInit {

    dataSource: CustomersDataSource;

    displayedColumns= ["firstName", "lastName", "gender", "city", "zipCode"];

    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

    @ViewChild(MatSort, { static: true }) sort: MatSort;

    @ViewChild('input', { static: true }) input: ElementRef;

    constructor(private route: ActivatedRoute,
                private customersService: CustomerService) {
    }

    ngOnInit() {

        this.dataSource = new CustomersDataSource(this.customersService);

        this.dataSource.loadCustomers('', 'asc', 0, 3);

    }

    ngAfterViewInit() {

        this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

        fromEvent(this.input.nativeElement,'keyup')
            .pipe(
                debounceTime(300),
                distinctUntilChanged(),
                tap(() => {
                    this.paginator.pageIndex = 0;

                    this.loadCustomersPage();
                })
            )
            .subscribe();

        merge(this.sort.sortChange, this.paginator.page)
        .pipe(
            tap(() => this.loadCustomersPage())
        )
        .subscribe();

    }

    loadCustomersPage() {
        this.dataSource.loadCustomers(
            this.input.nativeElement.value,
            this.sort.direction,
            this.paginator.pageIndex,
            this.paginator.pageSize);
    }
}
