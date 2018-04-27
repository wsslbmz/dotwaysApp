import { Component, Input } from '@angular/core';

/**
 * Generated class for the RealtimenavComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'realtimenav',
  templateUrl: 'realtimenav.html'
})
export class RealtimenavComponent {
  @Input() mapstop :boolean;
  @Input() map ;

  text: string;

  constructor() {
    console.log('Hello RealtimenavComponent Component');
    this.text = 'Hello World';
  }

}
