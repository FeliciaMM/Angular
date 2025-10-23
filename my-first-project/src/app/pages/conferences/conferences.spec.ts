// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { ConferencesComponent } from './conferences';

// describe('Conferences', () => {
//   let component: ConferencesComponent;
//   let fixture: ComponentFixture<ConferencesComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ConferencesComponent],
//     }).compileComponents();

//     fixture = TestBed.createComponent(ConferencesComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });


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

export interface ConferencesResponse {
  conferences: Conference[];
}

@Injectable({
  providedIn: 'root'
})
export class ConferenceService {
  private jsonUrl = 'assets/conferences.json';

  constructor(private http: HttpClient) {}

  getConferences(): Observable<ConferencesResponse> {
    return this.http.get<ConferencesResponse>(this.jsonUrl);
  }
}