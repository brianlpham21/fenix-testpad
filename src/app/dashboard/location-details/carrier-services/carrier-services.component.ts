import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-carrier-services',
  templateUrl: './carrier-services.component.html',
  styleUrls: ['./carrier-services.component.css']
})
export class CarrierServicesComponent implements OnInit {
  @Input() carriers
  selectedCarrier = 'FEDEX';

  constructor() { }

  ngOnInit(): void {
  }

  onSelectCarrier(event, carrier: string) {
    event.preventDefault();
    this.selectedCarrier = carrier;
  }
}
