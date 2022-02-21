import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  products = [
    {
      id: 1,
      name: "Chops"
    },
    {
      id: 2, 
      name: "Sausages"
    },
    {
      id: 3,
      name: "Tripe"
    }
  ];

  ngOnInit(): void {
    // We use queryParamMap, rather than paramMap, to get the query parameters
    console.log(this.route.snapshot.queryParamMap.get('newOnly'));
  }

}
