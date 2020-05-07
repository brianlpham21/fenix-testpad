import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-location-details',
  templateUrl: './location-details.component.html',
  styleUrls: ['./location-details.component.css']
})
export class LocationDetailsComponent implements OnInit {
  @Input() locations;

  constructor() { }

  ngOnInit(): void {
  }

}
