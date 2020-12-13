import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductDTO } from 'src/app/DTOs/productDTO';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  productList: ProductDTO[];

  goTo(url: string): void {
    this.router.navigate([url]);
  }

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit() {
      this.productService.getProducts().subscribe((result) => {
        this.productList = result.content;
        console.log(this.productList);
      });
  }

}
