import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.page.html',
  styleUrls: ['./inventory.page.scss'],
})
export class InventoryPage implements OnInit {

  inventoryData: any;
  constructor(private restService: RestService, private router: Router) { }

  async ngOnInit(): Promise<void> {
    try {
      this.inventoryData = await this.restService.getInventory();
      console.log(this.inventoryData);
    } catch (error) {
      console.error('Error loading data', error);
    }
  }

  goToStock(productId: string) {
    this.router.navigateByUrl('/stock/'+productId);
  }

}
