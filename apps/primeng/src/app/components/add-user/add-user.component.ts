import { Component, OnInit, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { ProductService } from './products.service';
import { Product } from './product';
import { CommonModule } from '@angular/common';
interface City {
  name: string;
  code: string;
}
interface Column {
  field: string;
  header: string;
}

@Component({
  selector: 'app-add-user',
  standalone: true,
  providers: [ProductService],
  imports: [ReactiveFormsModule, DropdownModule, FormsModule, TableModule, CommonModule],
  template: `
    <p>add-user works!</p>
    <div class="card flex justify-content-center">
      <form *ngIf="formGroup" [formGroup]="formGroup">
        <p-dropdown
          formControlName="selectedCity"
          [filter]="true"
          optionValue="code"
          [options]="cities"
          optionLabel="name"
          class="p-dropdown-success"
          placeholder="Select a City"
        />
      </form>
    </div>
    <p-table [value]="products" [tableStyle]="{ 'min-width': '50rem' }">
      <ng-template pTemplate="header">
        <tr>
          <th>Code</th>
          <th>Name</th>
          <th>Category</th>
          <th>Quantity</th>
        </tr>
      </ng-template>
      <ng-template pTemplate="body" let-product>
        <tr>
          <td>{{ product.code }}</td>
          <td>{{ product.name }}</td>
          <td>{{ product.category }}</td>
          <td>{{ product.quantity }}</td>
        </tr>
      </ng-template>
    </p-table>
  `,
  styleUrl: './add-user.component.scss',
})
export class AddUserComponent implements OnInit {
  products!: Product[];

  cols!: Column[];

  productService = inject(ProductService)

  selectCity = '';
  cities: City[] | undefined;
  formGroup?: FormGroup | undefined;

  ngOnInit() {
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' },
    ];
    this.productService.getProductsMini().then((data) => {
      this.products = data;
    });

    this.cols = [
      { field: 'code', header: 'Code' },
      { field: 'name', header: 'Name' },
      { field: 'category', header: 'Category' },
      { field: 'quantity', header: 'Quantity' }
    ];


    this.formGroup = new FormGroup({
      selectedCity: new FormControl<City | null>(null),
    });
  }
}
