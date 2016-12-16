import { Component, OnInit, Attribute, Input } from '@angular/core';

@Component({
  selector: 'now',
  template: `
  {{date | date : format}}

  `
  // templateUrl: './now.component.html'
  
})
export class NowComponent implements OnInit {
  private date;
  @Input() format;

  constructor(@Attribute("format") format) 
  {
    this.format = format;
    this.date = new Date();
    
  }

  ngOnInit() {
  }

}
