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

  // Uma lista de exemplo de usuários
  users = [
    { name: 'Usuário 1' },
    { name: 'Usuário 2' },
    { name: 'Usuário 3' },
    { name: 'Usuário 4' },
  ];
}
