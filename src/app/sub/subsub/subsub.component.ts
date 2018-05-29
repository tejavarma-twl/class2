import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-subsub',
  templateUrl: './subsub.component.html',
  styleUrls: ['./subsub.component.css']
})
export class SubsubComponent implements OnInit {

  @Input() subsubtitle : string;
  constructor() { }

  ngOnInit() {
  }

}
