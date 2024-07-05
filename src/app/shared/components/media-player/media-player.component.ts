import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { MultimediaService } from '@shared/services/multimedia.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrl: './media-player.component.css'
})
export class MediaPlayerComponent implements OnInit, OnDestroy{
  
  mockCover!: TrackModel;

  listObserver$:Array<Subscription> = [];
  state: string = 'paused';
  constructor(public multimediaService:MultimediaService) { }

  ngOnInit(): void {
    const observer$ = this.multimediaService.playerStatus$.subscribe(
      (state) => this.state = state
    );
    this.listObserver$ = [observer$];
  }

  ngOnDestroy(): void {
    this.listObserver$.forEach( observer => observer.unsubscribe());
  }

}
