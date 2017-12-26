import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Headers } from '@angular/http';
// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';

@Component({
  selector: 'app-product1',
  templateUrl: './product1.component.html',
  styleUrls: ['./product1.component.css']
})
export class Product1Component implements OnInit {

  products: Observable<any>;
  constructor(private http: Http) {
    const myHeader: Headers = new Headers();
    myHeader.append('Authorization', 'Basic 123456');
    this.products = this.http.get('/api/products', {headers: myHeader})
      .map((res) => res.json());
  }

  ngOnInit() {
  }

}
