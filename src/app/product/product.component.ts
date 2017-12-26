import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  dataSource: Observable<any>;
  products: Array<any> = [];
  constructor(private http: Http) {
    // 此处为订阅服务
    this.dataSource = this.http.get('/api/products')
      .map((res) => res.json());
  }

  ngOnInit() {
    // 此处才是真正的调用
    this.dataSource.subscribe(
      (data) => this.products = data
    );
  }

}
