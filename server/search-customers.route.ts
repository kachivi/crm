


import {Request, Response} from 'express';
import {CUSTOMERS} from "./db-data";
import {setTimeout} from "timers";
import { Customer } from '../src/app/modules/customer/model/customer';

export function searchCustomers(req: Request, res: Response) {

    const queryParams = req.query;

    const filter = queryParams.filter || '',
          sortOrder = queryParams.sortOrder,
          pageNumber = parseInt(queryParams.pageNumber.toString()) || 0,
          pageSize = parseInt(queryParams.pageSize.toString());

    let customers = Object.values<Customer>(CUSTOMERS);
   

    if (filter) {
        customers = customers.filter(customer => customer.firstName.trim().toLowerCase().search(filter.toString().toLowerCase()) >= 0);
    }

    if (sortOrder == "desc") {
        customers = customers.reverse();
    }
    const initialPos = pageNumber * pageSize;

    const customersPage = customers.slice(initialPos, initialPos + pageSize);

    setTimeout(() => {
        res.status(200).json({payload: customersPage});
    },1000);


}