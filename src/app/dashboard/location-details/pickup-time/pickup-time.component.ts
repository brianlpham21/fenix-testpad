import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pickup-time',
  templateUrl: './pickup-time.component.html',
  styleUrls: ['./pickup-time.component.css']
})
export class PickupTimeComponent implements OnInit {
  @Input() carriers
  constructor() { }

  ngOnInit(): void {
  }

}
