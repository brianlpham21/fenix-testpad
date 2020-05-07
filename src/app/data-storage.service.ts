import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataStorageService {
  loadedData;

  constructor(private http: HttpClient) { }

  getData() {
    this.http.get('https://techgig.test.fenixcommerce.com/fenixdelest/v1/organization/search/location?orgId=1f1a1388-414e-4bf0-b758-dcb2ca3e6f23&page=0&authToken=Zjg3ZjlmZjg2ZjlhNDNmZWExMTNhNzU4MGZkNTBiYzg')
      .subscribe(resData => {
        return 'hello';
        console.log(resData);
      })
  }

}
