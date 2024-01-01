import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-top-bar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopBarComponent {
    title = 'Portfolio Tracker Angular UI';
}