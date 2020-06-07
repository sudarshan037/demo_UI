import { Component,OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {FetchdataService} from './fetchdata.service';
import * as data from './data.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	public activeRoute=true;
  title = 'tabs-view';
  showLoader=false;
  active=true;
  chat:any;
  chatContent:any;
  private setting = {
    element: {
      dynamicDownload: null as HTMLElement
    }
  }
  constructor(private router : Router, private fetchdataService: FetchdataService){}
  ngOnInit(){
  }
  changeactiveRoute(e){
    this.active=true;
  this.activeRoute = e==="hindi" ? true : false;
  this.activeRoute == true ? this.router.navigate(['indianhindi']) : this.router.navigate(['indianenglish']);
  }
  routing(e){
    this.active= false;
    this.activeRoute=false;
    this.router.navigate([e])
  }

}
