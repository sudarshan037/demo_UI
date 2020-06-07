import { Component, OnInit } from '@angular/core';
import { FetchdataService } from '../fetchdata.service';
import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-indianenglish',
  templateUrl: './indianenglish.component.html',
  styleUrls: ['./indianenglish.component.scss']
})
export class IndianenglishComponent implements OnInit {
	public inputHasValue=false;
  public showLoader=false;
  public fileName="";
  public fileSize="";
  public fileVal:any;
  constructor(private fetchdataService: FetchdataService) { }

  ngOnInit() {
  }
  getFileName(e){
   this.inputHasValue=false;
   this.fileVal =e.target.files[0];
   if(e.target.value){
  this.showLoader=true;
  setTimeout(()=>{
      this.fileName = e.target.files[0].name;
      this.fileSize = Math.floor((e.target.files[0].size)/1000) + 'KB'   ;
      this.showLoader=false;
      this.inputHasValue=true;
    }
      ,2000);
    }
  }
  getFileResult(){
    const formData: FormData = new FormData();
    formData.append('file', this.fileVal);
    let file = {'file' : formData}
    this.fetchdataService.getEnglishResults(file).then(s=>{
            console.log(s);
          });
  }
}
