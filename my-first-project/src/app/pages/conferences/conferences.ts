// // import { Component, OnInit } from '@angular/core';
// // import { ConferenceService, Conference } from '../../services/conferences.service';

// // @Component({
// //   standalone: false,
// //   selector: 'app-conferences',
// //   templateUrl: './conferences.html',
// //   styleUrls: ['./conferences.scss'],
// // })
// // export class ConferencesComponent implements OnInit {
// //   conferences: Conference[] = [];
// //   isLoading = true;
// //   errorMessage = '';

// //   constructor(private conferenceService: ConferenceService) {}

// //   ngOnInit(): void {
// //     this.conferenceService.getConferences().subscribe({
// //       next: (data) => {
// //         this.conferences = data.conferences;
// //         this.isLoading = false;
// //       },
// //       error: (error) => {
// //         this.errorMessage = 'Error loading conferences';
// //         console.error(error);
// //         this.isLoading = false;
// //       },
// //     });
// //   }
// // }


// import { Component, OnInit } from '@angular/core';
// import { ConferenceService, Conference } from '../../services/conferences.service';

// @Component({
//   standalone: false,
//   selector: 'app-conferences',
//   templateUrl: './conferences.html',
//   styleUrls: ['./conferences.scss'],
// })
// export class ConferencesComponent implements OnInit {
//   conferences: Conference[] = [];
//   isLoading = true;
//   errorMessage = '';

//   constructor(private conferenceService: ConferenceService) {}

//   ngOnInit(): void {
//     this.loadConferences();
//   }

//   loadConferences(): void {
//     this.isLoading = true;
//     this.errorMessage = '';
    
//     this.conferenceService.getConferences().subscribe({
//       next: (data) => {
//         this.conferences = data.conferences;
//         this.isLoading = false;
//       },
//       error: (error) => {
//         this.errorMessage = 'Error loading conferences. Please try again.';
//         console.error('Error loading conferences:', error);
//         this.isLoading = false;
//       },
//     });
//   }
// }


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
  filteredConferences: Conference[] = [];
  isLoading = true;
  errorMessage = '';

  // Filtre
  filterStartDate: string = '';
  filterEndDate: string = '';
  filterSpeaker: string = '';

  constructor(private conferenceService: ConferenceService) {}

  ngOnInit(): void {
    this.loadConferences();
  }

  loadConferences(): void {
    this.isLoading = true;
    this.errorMessage = '';
    
    this.conferenceService.getConferences().subscribe({
      next: (data) => {
        this.conferences = data.conferences;
        this.filteredConferences = data.conferences;
        this.isLoading = false;
      },
      error: (error) => {
        this.errorMessage = 'Error loading conferences. Please try again.';
        console.error('Error loading conferences:', error);
        this.isLoading = false;
      },
    });
  }

  applyFilters(): void {
    this.filteredConferences = this.conferences.filter(conf => {
      // Filter by start date - conferința trebuie să înceapă după data selectată
      const matchesStartDate = !this.filterStartDate || 
        conf.startDate >= this.filterStartDate;

      // Filter by end date - conferința trebuie să se termine înainte de data selectată
      const matchesEndDate = !this.filterEndDate || 
        conf.endDate <= this.filterEndDate;

      // Filter by speaker - căutare case-insensitive
      const matchesSpeaker = !this.filterSpeaker || 
        conf.speaker.toLowerCase().includes(this.filterSpeaker.toLowerCase());

      return matchesStartDate && matchesEndDate && matchesSpeaker;
    });
  }

  clearFilters(): void {
    this.filterStartDate = '';
    this.filterEndDate = '';
    this.filterSpeaker = '';
    this.filteredConferences = this.conferences;
  }
}