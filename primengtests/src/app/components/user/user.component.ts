import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { AddUserComponent } from "../add-user/add-user.component";
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
  `,
    styleUrl: './user.component.scss',
    imports: [FormsModule, DropdownModule, AddUserComponent]
})
export class UserComponent implements OnInit {
  cities: City[] | undefined;

  selectedCity: City | undefined;

  ngOnInit() {
      this.cities = [
          { name: 'New York', code: 'NY' },
          { name: 'Rome', code: 'RM' },
          { name: 'London', code: 'LDN' },
          { name: 'Istanbul', code: 'IST' },
          { name: 'Paris', code: 'PRS' }
      ];
  }
}
