import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Conference {
  id: number;
  title: string;
  startDate: string;
  endDate: string;
  speaker: string;
  location: string;
}

@Injectable({
  providedIn: 'root',
})
export class ConferenceService {
  private jsonUrl = 'conferences.json';

  constructor(private http: HttpClient) {}

  getConferences(): Observable<{ conferences: Conference[] }> {
    return this.http.get<{ conferences: Conference[] }>(this.jsonUrl);
  }
}
