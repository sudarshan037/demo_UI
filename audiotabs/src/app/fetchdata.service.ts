import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../environments/environment';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FetchdataService {

  constructor(private router : Router,private http: HttpClient) { }
	
	getHindiResults(file){
    console.log(file);
        return new Promise((resolve, reject) => {
      this.http.post(environment.urlhindi, file)
        .subscribe((success: any) => {
        	console.log(success)
          return resolve(success);
        }, error => {
        console.log(error)
          return reject(error);
        });
    });  
  }
  	getEnglishResults(file){
    console.log(file);
        return new Promise((resolve, reject) => {
      this.http.post(environment.urlEnglish, file)
        .subscribe((success: any) => {
          return resolve(success);
        }, error => {
          return reject(error);
        });
    });  
  }  
}
