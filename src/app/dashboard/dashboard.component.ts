import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    loadedData

    constructor(private http: HttpClient) { }

    ngOnInit() {
      this.http.get('https://techgig.test.fenixcommerce.com/fenixdelest/v1/organization/search/location?orgId=1f1a1388-414e-4bf0-b758-dcb2ca3e6f23&page=0&authToken=Zjg3ZjlmZjg2ZjlhNDNmZWExMTNhNzU4MGZkNTBiYzg')
        .subscribe(resData => {
          this.loadedData = resData
        })
    }

  }
