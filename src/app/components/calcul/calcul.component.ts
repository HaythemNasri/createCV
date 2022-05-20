import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calcul',
  templateUrl: './calcul.component.html',
  styleUrls: ['./calcul.component.css']
})
export class CalculComponent implements OnInit {

  constructor() { }
 a =1 ;
 b =0;

;
  ngOnInit(): void {
  }
  calcul(){
  this.b + this.b ;
  }

}
