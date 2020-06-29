import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-catalog-order-list',
  templateUrl: './catalog-order-list.component.html',
  styleUrls: ['./catalog-order-list.component.scss'],
})
export class CatalogOrderListComponent implements OnInit {

  @Input() orderList;


  constructor() { }

  ngOnInit() {}

}
