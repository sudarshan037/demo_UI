import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import {FetchdataService} from '../fetchdata.service';
import { HttpClient } from '@angular/common/http'; 
@Component({
  selector: 'app-pre-uploaded',
  templateUrl: './pre-uploaded.component.html',
  styleUrls: ['./pre-uploaded.component.scss']
})
export class PreUploadedComponent implements OnInit {
	file;
	public res:any=[];
  public resObject:any=[];
  public response:any=[];
	showData=false;
	showLoader=false;
  showDownload= false;
  toggleFlag=false;
  errorMessage='';
  newObj:any[]=[];
  chatContent='';
  private setting = {
    element: {
      dynamicDownload: null as HTMLElement
    }
  }
  audioFiles=[
    {
      path: '../../assets/eng_avg_pradeepkumar.mp3',
      id: 'english',
      title: 'eng_avg_pradeepkumar'
    },
    {
      path: '../assets/eng_avg_rohitsinghrawat.mp3',
      id: 'english',
      title: 'eng_avg_rohitsinghrawat'
    },
    {
      path: '../assets/eng_conv_ravipandey.mp3',
      id: 'english',
      title: 'eng_conv_ravipandey'
    },
    {
      path: '../assets/hin_avg_poojakumari1.mp3',
      id: 'hindi',
      title: 'hin_avg_poojakumari1'
    },
    {
      path: '../assets/hin_avg_rishabhpal.mp3',
      id: 'hindi',
      title: 'hin_avg_rishabhpal'
    },
    {
      path: '../assets/hin_best_poojanaharwal.mp3',
      id: 'hindi',
      title: 'hin_best_poojanaharwal'
    },
    {
      path: '../assets/hin_conv_dilipdas.mp3',
      id: 'hindi',
      title: 'hin_conv_dilipdas'
    }
  ];
  title= '';
  constructor(private fetchdataService: FetchdataService, private fetchFile: HttpClient) { }

  ngOnInit() {
  	// this.uploadFile();
  }
  toggleHandler(lang){
    if(lang == 'english'){
      this.toggleFlag= true;
    }
    else{
      this.toggleFlag= false;
    }
  }
  uploadFile(audioFile){
    this.showData= false;
    this.showDownload=false;
    this.res=[];
    this.resObject=[];
    this.response=[];
    this.title= audioFile.title;
    // console.log(audioFile.path);
  	this.showLoader=true;
  	let blob = null;
  	let xhr = new XMLHttpRequest();
    let path= audioFile.path.toString();
    // console.log(path);
    xhr.open("GET", path);  
  	xhr.responseType = "blob";
  	let th=this;//force the HTTP response, response-type header to be blob
  	xhr.onload = function() 
  	{
  	    blob = xhr.response;//xhr.response is now a blob object
  	    // console.log(blob.URL())
  	    th.file = new File([blob], audioFile.title, {type: 'audio/mp3', lastModified: Date.now()});
  	    console.log(th.file); 
  	    th.getFileResult(audioFile.id);  
  	}
  	xhr.send()
	// console.log(blob);
  }
   getFileResult(lang){
     // console.log(lang);
	const formData: FormData = new FormData();
    formData.append('file', this.file);
    if(lang == 'english'){
       this.fetchdataService.getEnglishResults(formData).then(s=>{
      console.log(s)
            this.res = Object.keys(s);
            this.response = s;
               this.res.forEach(item=>{
              this.resObject.push(item.split('|').pop());              
            });
            console.log(this.resObject);
            this.transformResponse();
            this.showData=true;
            this.showLoader=false;
            this.showDownload= true;
          });
    }
    else{
      this.fetchdataService.getHindiResults(formData).then(s=>{
            this.res = Object.keys(s);
            this.response = s;
               this.res.forEach(item=>{
              this.resObject.push(item.split('|').pop());              
            });
            this.transformResponse();
            this.showData=true;
            this.showLoader=false;
            this.showDownload=true;
          });
    }
   
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
        fileName: 'ChatPreUpld.txt',
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
