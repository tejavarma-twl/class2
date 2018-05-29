import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Its working in Subcomponent';
  title2 = 'Its working in Subsubcomponent';
  fromSubComp = "";
  subCalled(value){
    this.fromSubComp = value;
  }
  subCalled2(value){
    console.log(value);
  }
}
