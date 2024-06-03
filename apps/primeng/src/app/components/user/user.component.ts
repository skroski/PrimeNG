import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { AddUserComponent } from "../add-user/add-user.component";
import { HttpClient } from '@angular/common/http';
import { Table, TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
interface City {
  name: string;
  code: string;
}
@Component({
  selector: 'app-user',
  standalone: true,
  template: `
    <p>
      user works!
    </p>
    <app-add-user></app-add-user>
    <div class="card flex justify-content-center">
    <p-dropdown 
        [options]="cities" 
        [(ngModel)]="selectedCity" 
        optionLabel="name"
        placeholder="Select a City" />
</div>
<p-table [value]="userList"
#dt1
          [paginator]="true"
          [rows]="5"
          [rowsPerPageOptions]="[5, 10, 20]"
          [globalFilterFields]="['name', 'username', 'email', 'website']"
         [tableStyle]="{ 'min-width': '50rem' }">

         <ng-template pTemplate="caption">
        <div class="flex">
            <p-button label="Clear" severity="success" icon="pi pi-check" (click)="clear(dt1)" />
            <span class="p-input-icon-left ml-auto">
                <i class="pi pi-search"></i>
                <input pInputText type="text"  (input)="dt1?.filterGlobal($event.target, 'contains')" placeholder="Search keyword" />
            </span>
        </div>
    </ng-template>
         
      <ng-template pTemplate="header">
        <tr>
          <th pSortableColumn="name"> <p-sortIcon field="name"></p-sortIcon> Name</th>
          <th pSortableColumn="username"><p-sortIcon field="username"></p-sortIcon>UserName</th>
          <th pSortableColumn="email"><p-sortIcon field="email"></p-sortIcon>Email</th>
          <th pSortableColumn="website"><p-sortIcon field="website"></p-sortIcon>Website</th>
        </tr>
      </ng-template>
      <ng-template pTemplate="body" let-user>
        <tr>
          <td>{{ user.name }}</td>
          <td>{{ user.username }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.website }}</td>
        </tr>
      </ng-template>
    </p-table>
  `,
  styleUrl: './user.component.scss',
  imports: [FormsModule, DropdownModule, AddUserComponent, TableModule, ButtonModule]
})
export class UserComponent implements OnInit {

  userList: any[] = [];
  cities: City[] | undefined;
  http = inject(HttpClient);

  selectedCity: City | undefined;
  getUsers() {
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((data: any) => {
      console.log(data);
      this.userList = data;
    });
  }
  clear(table: Table) {
    table.clear();
  }
  ngOnInit() {
    this.getUsers();
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' }
    ];
  }
}
