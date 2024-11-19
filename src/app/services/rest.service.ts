import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  private backendApi = "https://e921-115-98-219-242.ngrok-free.app/"
  private token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImlzcyI6InBsYXktbmFtZSIsImV4cCI6MTczMTk0OTQ0MywiaWF0IjoxNzMxOTQ1ODQzfQ.2T8Om0yn2HaTLHANJGqlVQ28R4331kssJrmD6wKvv-4"

  constructor(private httpClient: HttpClient) { }

  async getInventory(): Promise<any> {
    try {
      // console.log("Requesting Inventory")
      // const response = await this.httpClient.get(this.backendApi + 'products', {
      //   headers: {
      //     // "ngrok-skip-browser-warning": "1",
      //     // "authorization": "Bearer " + this.token,
      //     // "Content-Type": "application/json",
      //     // "Access-Control-Allow-Origin": "*"
      //   }
      // }).toPromise();
      // return response;
      return [{
        name: "Macbook Air M2 Chip",
        description: "2022 Apple MacBook Air Laptop with M2 chip: 13.6-inch Liquid Retina Display, 16GB RAM, 256GB SSD Storage, Backlit Keyboard, 1080p FaceTime HD Camera. Works with iPhone and iPad; Midnight",
        id: 121
      },
      {
        name: "Macbook Air M3 Chip",
        description: "2024 MacBook Air: 13-inch, Apple M3 chip with 8‑core CPU and 8‑core GPU, 16GB Unified Memory, 256GB - Midnight",
        id: 122
      },
      {
        name: "Dell Inspiron 5430",
        description: "13th Gen Laptop, Intel i7-1355U/16GB LPDDR5/512GB SSD/14.0 (35.56Cms) FHD+ Comfort View/Backlit KB + FPR/Windows 11+MSO'21/McAfee 15 Months/Platinum Silver/Thunderbolt 4.0/1.59KGs",
        id: 123
      },
      {
        name: "Lenovo ThinkPad E14",
        description: "E14 Intel Core i7 13th Gen 14 WUXGA IPS 300 Nits Thin and Light Laptop (16GB RAM/1TB SSD/Windows 11 Home/Backlit Keyboard/FPR/Black/1Y Onsite/1.41 kg), 21JKS13J00",
        id: 124
      },
      {
        name: "boAt Rockerz 450",
        description: "Bluetooth On Ear Headphones with Mic, Upto 15 Hours Playback, 40MM Drivers, Padded Ear Cushions, Integrated Controls and Dual Modes(Luscious Black)",
        id: 125
      },

      {
        name: "Sony WH-CH520",
        description: "Wireless On-Ear Bluetooth Headphones with Mic, Upto 50 Hours Playtime, DSEE Upscale, Multipoint Connectivity/Dual Pairing,Voice Assistant App Support for Mobile Phones (Blue)",
        id: 126
      }
      ]
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
        id: "123123",
        name: "Avinash",
      },
      {
        id: "124123",
        name: "Shankar",
      },
      {
        id: "125123",
        name: "Rohith",
      }
      ]
    } catch (error) {
      console.error('Error fetching data', error);
      throw error;
    }
  }

  async getRequests(): Promise<any> {
    try {
      console.log("Requesting Requests")
      // const response = await this.httpClient.get(this.backendApi).toPromise();
      // return response;
      return [
        {
          "id": 1,
          "userId": "Srinija",
          "equipmentId": "NC123QWE",
          "purpose": "Allocated as part of onboarding",
          "requestDate": "2024-11-15",
          "expectedReturnDate": "2024-12-15",
          "returnStatus": "pending",
          "returnDate": "2024-12-15",
          "returnCondition": "good"
        },
        {
          "id": 2,
          "userId": "Saketh",
          "equipmentId": "NC124QWE",
          "purpose": "Special request for speaker, approved by manager",
          "requestDate": "2024-11-15",
          "expectedReturnDate": "2024-12-15",
          "returnStatus": "pending",
          "returnDate": "2024-12-15",
          "returnCondition": "good"
        },
        {
          "id": 3,
          "userId": "Srinija",
          "equipmentId": "NC125QWE",
          "purpose": "Special request for SSD, approved by manager",
          "requestDate": "2024-11-15",
          "expectedReturnDate": "2024-12-15",
          "returnStatus": "returned",
          "returnDate": "2024-12-15",
          "returnCondition": "Good"
        }
      ]
    } catch (error) {
      console.error('Error fetching data', error);
      throw error;
    }
  }

  async raiseRequest() {
    try {
      
    } catch (error) { 
      console.error('Error fetching data', error);
      throw error;
    }
  }
}