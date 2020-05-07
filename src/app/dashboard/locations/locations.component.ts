import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {
  @Input() locations;
  locationSelect = 'active';

  constructor() { }

  ngOnInit(): void {
  }

  onLocationSelect(activeStatus: string) {
    this.locationSelect = activeStatus;
  }
}
