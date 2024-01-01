import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { TopBarComponent } from './header/topbar.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [AppComponent],
    imports: [TopBarComponent, PortfolioComponent]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
