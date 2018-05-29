import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-sub',
  templateUrl: './sub.component.html',
  styleUrls: ['./sub.component.css']
})
export class SubComponent implements OnInit {

  // @Input() subtitle : string;
  @Input('subtitle') mysubtitle : string;
  @Input('subsubtitle') mysubtitle2 : string;
  @Output() fromSub = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.fromSub.emit("Hello");
  }

}
