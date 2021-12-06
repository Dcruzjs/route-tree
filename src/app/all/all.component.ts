import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
})
export class AllComponent implements OnInit {
  
  param:any = {};

  constructor( private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this._route.params.subscribe( params => this.param = params)
  }

}
