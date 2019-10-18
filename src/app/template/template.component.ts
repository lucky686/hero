import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  // styleUrls: ['./template.component.css']
  styles: [`input.ng-invalid{border-left:5px solid red;}`]
})
export class TemplateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  onSubmit(value: any) {
console.log(value);

  }

}

