import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
})
export class BrandComponent implements OnInit {


  param:any = {};
  
  constructor(private _route: ActivatedRoute){}
    
  ngOnInit(){
        this._route.params.subscribe(params => this.param = params)
    }

}
