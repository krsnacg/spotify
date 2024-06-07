import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { Observable, catchError, map, of } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class TrackService {
  private readonly URL = environment.api
  constructor(private httpClient: HttpClient) { 
  }
  
  getAllTracks$(): Observable<any> {
    return this.httpClient.get(`${this.URL}/tracks`).pipe(
      map(({data}: any) => {
        return data
      })
    )
  }

  getAllRandom$(): Observable<any> {
    return this.httpClient.get(`${this.URL}/tracks01`).pipe(
      map(({data}: any) => {
        return data.reverse()
      }), catchError((error) => {
        alert('Error');
        const {status, statusText} = error;
        console.log("Algo paso revisar",[status, statusText]);
        return of([])
      })
    )
  }
}
