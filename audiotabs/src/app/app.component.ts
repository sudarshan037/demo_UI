import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
	public activeRoute=true;
  title = 'tabs-view';
  constructor(private router : Router){}
  changeactiveRoute(e){
  this.activeRoute = e==="hindi" ? true : false;
  this.activeRoute == true ? this.router.navigate(['indianhindi']) : this.router.navigate(['indianenglish']);
  }
}
