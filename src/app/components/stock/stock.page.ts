import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { RestService } from 'src/app/services/rest.service';
import { RaiseRequestComponent } from '../raise-request/raise-request.component';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.page.html',
  styleUrls: ['./stock.page.scss'],
})
export class StockPage implements OnInit {

  productId: any;
  stockData: any;
  constructor(private route: ActivatedRoute,private restService: RestService, private modalCtrl: ModalController) { }

  async ngOnInit(): Promise<void>  {
    try {
      this.productId = this.route.snapshot.paramMap.get('id');
      this.stockData = await this.restService.getStock(this.productId);
      console.log(this.stockData);
    } catch (error) {
      console.error('Error loading data', error);
    }
  }

  async allocatedStock(equipmentId: string) {
    const modal = await this.modalCtrl.create({
      component: RaiseRequestComponent,
      componentProps: {
        equipmentId: equipmentId // Pass the equipmentId to the modal
      }
    });
    modal.present();

  }
}
