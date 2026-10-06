import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MobileService, Mobile } from './mobile.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Mobile Shop Management';
  mobiles: Mobile[] = [];
  
  newMobile: Mobile = {
    name: '',
    brand: '',
    price: 0,
    description: '',
    imageUrl: ''
  };

  showAddForm = false;

  constructor(private mobileService: MobileService) {}

  ngOnInit(): void {
    this.loadMobiles();
  }

  loadMobiles(): void {
    this.mobileService.getMobiles().subscribe(
      data => this.mobiles = data,
      error => console.error('Error fetching mobiles', error)
    );
  }

  addMobile(): void {
    if (!this.newMobile.name || !this.newMobile.brand || this.newMobile.price <= 0) {
      alert('Please fill all required fields correctly.');
      return;
    }
    
    // Default image if none provided
    if (!this.newMobile.imageUrl) {
      this.newMobile.imageUrl = '/images/mobile_shop_hero_1790928916515.jpg'; // fallback image
    }

    this.mobileService.addMobile(this.newMobile).subscribe(
      data => {
        this.mobiles.push(data);
        this.newMobile = { name: '', brand: '', price: 0, description: '', imageUrl: '' };
        this.showAddForm = false;
      },
      error => console.error('Error adding mobile', error)
    );
  }

  buyMobile(mobile: Mobile): void {
    alert(`Successfully purchased ${mobile.name} for ₹${mobile.price}!`);
  }
}
