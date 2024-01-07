import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { TopBarComponent } from './header/topbar.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { HttpClientModule } from '@angular/common/http';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [AppComponent],
    imports: [TopBarComponent, PortfolioComponent, HttpClientModule]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
