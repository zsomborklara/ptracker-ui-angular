import { TestBed } from '@angular/core/testing';
import { PortfolioComponent } from './portfolio.component';

describe('Portfolio List Component', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [PortfolioComponent]
  }));

  it('should create the portfolio list', () => {
    const fixture = TestBed.createComponent(PortfolioComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have portfolio default name as 'EMPTY'`, () => {
    const fixture = TestBed.createComponent(PortfolioComponent);
    const portfolioList = fixture.componentInstance;
    expect(portfolioList.portfolio.name).toEqual('EMPTY');
  });

  it('should render portfolio name', () => {
    const fixture = TestBed.createComponent(PortfolioComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h2')?.textContent).toContain('My Portfolio');
  });

});