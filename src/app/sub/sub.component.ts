import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-sub',
  templateUrl: './sub.component.html',
  styleUrls: ['./sub.component.css']
})
export class SubComponent implements OnInit {

  // @Input() subtitle : string;
  // @Input('subtitle') mysubtitle : string;
  // @Input('subsubtitle') mysubtitle2 : string;

  // @Output() fromSub = new EventEmitter();

  mysubtitle = "test";
  mysubtitle2 = "test2";

  constructor() { }

  ngOnInit() {
    // this.fromSub.emit("Hello");
  }

}
