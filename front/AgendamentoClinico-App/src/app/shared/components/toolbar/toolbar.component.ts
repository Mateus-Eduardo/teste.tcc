import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {

  @Input() popText = true;
  @Input() menuTitle = '';
  @Input() smallScreen = false;
  @Input() title = '';

  currentUser: any;
  users: any[] = [
    { name: 'Usuário 1' },
    { name: 'Usuário 2' },
    { name: 'Usuário 3' },
    { name: 'Usuário 4' },
  ];

  selectUser(user: any) {
    this.currentUser = user;
  }
}
