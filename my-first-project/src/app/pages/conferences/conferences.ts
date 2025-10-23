import { Component, OnInit } from '@angular/core';
import { ConferenceService, Conference } from '../../services/conferences.service';

@Component({
  standalone: false,
  selector: 'app-conferences',
  templateUrl: './conferences.html',
  styleUrls: ['./conferences.scss'],
})
export class ConferencesComponent implements OnInit {
  conferences: Conference[] = [];
  isLoading = true;
  errorMessage = '';

  constructor(private conferenceService: ConferenceService) {}

  ngOnInit(): void {
    this.conferenceService.getConferences().subscribe({
      next: (data) => {
        this.conferences = data.conferences;
        this.isLoading = false;
      },
      error: (error) => {
        this.errorMessage = 'Error loading conferences';
        console.error(error);
        this.isLoading = false;
      },
    });
  }
}
