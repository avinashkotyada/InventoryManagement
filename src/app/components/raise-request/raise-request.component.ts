import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-raise-request',
  templateUrl: './raise-request.component.html',
  styleUrls: ['./raise-request.component.scss'],
})
export class RaiseRequestComponent  implements OnInit {

  usersData: any;
  @Input() equipmentId: any;
  selectedUser: any;
  returnData: any;
  reason: any;
  returnDate: any;
  constructor(private modalCtrl: ModalController, private restService: RestService) { }

  async ngOnInit() {
    try {
      this.usersData = await this.restService.getUsers();
      console.log(this.usersData);
    } catch (error) {
      console.error('Error loading data', error);
    }
  }
  
  dismissModal() {
    this.modalCtrl.dismiss();
  }

  async submitRaiseRequestForm() {
    try {
      const formattedReturnDate = new Date(this.returnDate).toLocaleDateString('en-US');
  
      const formData = {
        equipmentId: this.equipmentId,
        selectedUser: this.selectedUser,
        returnData: this.returnData,
        reason: this.reason,
        returnDate: formattedReturnDate,  // Pass formatted return date
      };
      console.log(formData);
      await this.restService.raiseRequest();
      this.dismissModal();
      console.log(this.usersData);
    } catch (error) {
      console.error('Error loading data', error);
    }
  }

}
