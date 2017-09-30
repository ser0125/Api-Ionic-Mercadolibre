import { Component } from '@angular/core';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
var output = console.log;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  informationItems: any=[];
  ready: boolean=false;
   url: any ='https://api.mercadolibre.com/sites/MCO/search?q=';

  constructor(public http: Http) {

  }

  searchProduct(item: any){

    return new Promise((resolve, reject)=> {
      var link:string = this.url + item
      this.http.get(link).map(res=>res.json()).subscribe(
        (data) => {
          this.informationItems=data
          resolve(data)
         output(this.informationItems)
        },
        (error) => {
          reject("Error: "+ error)
        })
      
})

}

}  


