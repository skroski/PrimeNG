import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-buttons',
  standalone: true,
  imports: [],
  template: `
    <Button>{{ label }}</Button>
  `,
  styleUrl: './buttons.component.scss'
})
export class ButtonsComponent {
  @Input() label: string = '';
}
