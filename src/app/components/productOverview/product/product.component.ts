import { Component, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { EventEmitter } from 'protractor';
import { ProductComponentDTO } from 'src/app/DTOs/productComponentDTO';
import { ProductDTO } from 'src/app/DTOs/productDTO';
import { EProductMenu } from 'src/app/enums/productMenu';
import { ProductService } from 'src/app/services/product.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  isAdmin = this.userService.getAdmin();
  product: ProductDTO;
  productComponents: ProductComponentDTO;
  productMenu = EProductMenu.Dashboard;

  checkEAN13(ean13:string):boolean {
    const checksum = parseInt(ean13.charAt(12));
    const odd = parseInt(ean13.charAt(11)) + parseInt(ean13.charAt(9)) + parseInt(ean13.charAt(7)) + parseInt(ean13.charAt(5)) + parseInt(ean13.charAt(3)) + parseInt(ean13.charAt(1));
    const even = parseInt(ean13.charAt(10)) + parseInt(ean13.charAt(8)) + parseInt(ean13.charAt(6)) + parseInt(ean13.charAt(4)) + parseInt(ean13.charAt(2)) + parseInt(ean13.charAt(0));
    const sum = ((3 * odd) + even);
    const sumMod10 = sum % 10;
    const calculatedChecksum = (10 - sumMod10) % 10;

    if (calculatedChecksum == checksum) {
      return true;
      
    } else {      
      return false;
    }
  }
 
  switchTab(tab: EProductMenu) {
    this.productMenu = tab;
  }

  goTo(url: string): void {
    this.router.navigate([url]);
  }

  togglePhlippo() {
    if (this.isAdmin) {
      this.product.defaultPhlippo = !this.product.defaultPhlippo;
    }
  }

  toggleNen() {
    this.product.nen = !this.product.nen;
  }

  toggleLoadComponents() {
    this.product.loadComponents = !this.product.loadComponents;
  }

  toggleEmballage() {
    this.product.emballage = !this.product.emballage;
  }

  togglePallet() {
    this.product.pallet = !this.product.pallet;
  }

  toggleFlightcase() {
    this.product.flightcase = !this.product.flightcase;
  }

  toggleProductChanged() {
    this.product.productIdChanged = !this.product.productIdChanged;
  }

  constructor(
    private productService: ProductService,
    private router: Router,
    private userService: UserService) { }

  ngOnInit() {
      this.productService.getProduct().subscribe((result) => {
        this.product = result;
        console.log(this.product);
      });
      this.productService.getComponents().subscribe((result) => {
        this.productComponents = result;
        //console.log(this.productComponents);
      });
      this.userService.loginUpdate.subscribe(update => {
        this.isAdmin = this.userService.getAdmin();
      })
    this.checkEAN13('2109876543210');
  }
}