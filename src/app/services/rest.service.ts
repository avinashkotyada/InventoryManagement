import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  private backendApi = "https://aada-115-98-219-242.ngrok-free.app/"
  private token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImlzcyI6InBsYXktbmFtZSIsImV4cCI6MTczMTk0OTQ0MywiaWF0IjoxNzMxOTQ1ODQzfQ.2T8Om0yn2HaTLHANJGqlVQ28R4331kssJrmD6wKvv-4"

  constructor(private httpClient: HttpClient) { }

  async getInventory(): Promise<any> {
    try {
      console.log("Requesting Inventory")
      const response = await this.httpClient.get(this.backendApi + 'products', {
        headers: {
          "ngrok-skip-browser-warning": "1",
          "authorization": "Bearer " + this.token
        }
      }).toPromise();
      return response;
      // return [{
      //   name: "Macbook Air M2 Chip",
      //   description: "Its very good",
      //   id: 123
      // },
      // {
      //   name: "Macbook Air M3 Chip",
      //   description: "Its very good",
      //   id: 122
      // }]
    } catch (error) {
      console.error('Error fetching data', error);
      throw error;
    }
  }

  async getStock(productId: string): Promise<any> {
    try {
      console.log("Requesting Stock")
      // const response = await this.httpClient.get(this.backendApi).toPromise();
      // return response;
      return [{
        serialNo: "NC123QWE",
        availabilityStatus: "AVAILABLE",
        conditionStatus: "GOOD"
      },
      {
        serialNo: "NC124QWE",
        availabilityStatus: "ASSIGNED",
        conditionStatus: "GOOD"
      },
      {
        serialNo: "NC125QWE",
        availabilityStatus: "NOTAVAILABLE",
        conditionStatus: "MAINTENANCE"
      },
      ]
    } catch (error) {
      console.error('Error fetching data', error);
      throw error;
    }
  }

  async getUsers(): Promise<any> {
    try {
      console.log("Requesting User")
      // const response = await this.httpClient.get(this.backendApi).toPromise();
      // return response;
      return [{
        id: "123",
        name: "Avinash",
      },
      {
        id: "124",
        name: "Shankar",
      },
      {
        id: "125",
        name: "Rohith",
      }
      ]
    } catch (error) {
      console.error('Error fetching data', error);
      throw error;
    }
  }

  async raiseRequest() {

  }
}