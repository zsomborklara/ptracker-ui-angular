import { Component } from '@angular/core';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { TopBarComponent } from './header/topbar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [TopBarComponent, PortfolioComponent]
})
export class AppComponent {
}
