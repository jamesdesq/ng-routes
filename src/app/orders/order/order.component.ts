import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {

    // If we were going to use the ID to get data from a server 
    // (e.g. an API service) we would do it in ngOnInit, rather 
    // than in the constructor, because NgOnInit is when 
    // the component is initializied.
    
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      // Plus sign casts the string value from the URL to a number. 
      const idNum = +id;
      console.log("Snapshot: ", idNum);
      
    }
    // However, if only the URL paramters are changed by the router, 
    // the component is not reinitialized, so we need to use an observable
    
    this.route.paramMap.subscribe(
      params => { 
        console.log("Observble: ", params.get('id'));
      }
    );
  }

}
