import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) { }
  
  goToInventory() {
    console.log('clickedInventory')
    this.router.navigateByUrl('/inventory')
  }

  goToRequestAllocations() {
    console.log('clickedAllocation')
    this.router.navigateByUrl('/requests')
  }

}
