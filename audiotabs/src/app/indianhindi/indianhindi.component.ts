import { Component, OnInit } from '@angular/core';
import { FetchdataService } from '../fetchdata.service';
import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-indianhindi',
  templateUrl: './indianhindi.component.html',
  styleUrls: ['./indianhindi.component.scss']
})
export class IndianhindiComponent implements OnInit {
  public inputHasValue=false;
  public showLoader=false;
  public fileName="";
  public fileSize="";
  public fileVal:any;
  public res:any=[];
  public resObject:any=[];
  public response:any=[];
  showDownload=false;
  private setting = {
    element: {
      dynamicDownload: null as HTMLElement
    }
  }
  newObj:any[]=[];
  chatContent='';
  constructor(private fetchdataService: FetchdataService) { }

  ngOnInit() {
  }
  getFileName(e){
   this.inputHasValue=false;
   this.fileVal =e.target.files[0];
   // console.log( URL.createObjectURL(this.fileVal));
   if(e.target.value){
  this.showLoader=true;
  setTimeout(()=>{
  		this.fileName = e.target.files[0].name;
  		this.fileSize = Math.floor((e.target.files[0].size)/1000) + 'KB'	 ;
  		this.showLoader=false;
  		this.inputHasValue=true;
  	}
  		,2000);
  	}
  }

  getFileResult(){
    this.showLoader= true;
    const formData: FormData = new FormData();
    formData.append('file', this.fileVal);
    let file = {'file' : formData}
    this.fetchdataService.getHindiResults(formData).then(s=>{
            this.res = Object.keys(s);
            this.response = s;
            this.res.forEach(item=>{
              this.resObject.push(item.split('|').pop());              
            });
            this.transformResponse();
            console.log(this.resObject);
            this.showLoader=false;
            this.showDownload=true;
          });
  }
  transformResponse(){
    this.newObj=[];
    this.res.map((item,i) =>{
      let key= this.res[i].split('|')[1];
      let obj= {};
      obj[key]= this.response[item];
      this.newObj.push(obj);
    });
    let chat= JSON.stringify(this.newObj);
    let i= /},/g;
     let j= /"/g;
     let k= /{/g;
    this.chatContent= chat.replace('[{',"").replace(k,'').replace('}]',"").replace(j,"");
    console.log(chat);
  }
  dynamicDownloadTxt(){
    this.dyanmicDownloadByHtmlTag({
        fileName: 'ChatHindi.txt',
        text: JSON.stringify(this.chatContent)
      });
  }
   private dyanmicDownloadByHtmlTag(arg: {
    fileName: string,
    text: string
  }) {
    if (!this.setting.element.dynamicDownload) {
      this.setting.element.dynamicDownload = document.createElement('a');
    }
    const element = this.setting.element.dynamicDownload;
    const fileType = 'text/plain';
    arg.text= arg.text.replace(/},/g,'\r\n').replace(/"/g,"");
    element.setAttribute('href', `data:${fileType};charset=utf-8,${encodeURIComponent(arg.text)}`);
    element.setAttribute('download', arg.fileName);

    var event = new MouseEvent("click");
    element.dispatchEvent(event);
  }
}
