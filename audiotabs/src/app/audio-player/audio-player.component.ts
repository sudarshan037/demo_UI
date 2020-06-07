import { Component, OnInit,Input,ViewChild,ElementRef} from '@angular/core';

@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.scss']
})
export class AudioPlayerComponent implements OnInit {
	@Input() audioFile:any;
	@ViewChild('audio',null) audio:ElementRef;
	showModal=false;
  constructor() { }

  ngOnInit() {
  	console.log(this.audioFile);
  	this.audio.nativeElement.src= URL.createObjectURL(this.audioFile);
  }
  showModalHandler(){
  	this.showModal= true;
  }
  hide(){
  	this.showModal= false;
  	this.audio.nativeElement.pause();
    this.audio.nativeElement.currentTime = 0;
  }

}
