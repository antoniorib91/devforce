import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu-top-item',
  templateUrl: './menu-top-item.component.html',
  styleUrls: ['./menu-top-item.component.scss']
})
export class MenuTopItemComponent implements OnInit {
  
  @Input() text: string;

  constructor() { }

  ngOnInit() {
  }

}
