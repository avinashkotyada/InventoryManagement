import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-allocations',
  templateUrl: './allocations.page.html',
  styleUrls: ['./allocations.page.scss'],
})
export class AllocationsPage implements OnInit {

  requestData: any;
  constructor(private restService: RestService) { }


  async ngOnInit(): Promise<void>  {
    try {
      this.requestData = await this.restService.getRequests();
      console.log(this.requestData);
    } catch (error) {
      console.error('Error loading data', error);
    }
  }

}
