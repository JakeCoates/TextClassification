import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public history = [
    {
      text: 'example 1'
    },
    {
      text: 'example 2'
    }
  ];

  constructor() {}

}
