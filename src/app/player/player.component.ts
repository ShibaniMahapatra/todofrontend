import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  // @ViewChild('video') matVideo: MatVideoComponent;
  // video: HTMLVideoElement;

  constructor() { }

  ngOnInit() :void {
    // this.video = this.matVideo.getVideoTag();
    // this.renderer.listen(this.video, 'ended', () => console.log('video ended'));
    // this.video.addEventListener('ended', () => console.log('video ended'));
  }
}
