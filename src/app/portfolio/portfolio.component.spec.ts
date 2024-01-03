import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PortfolioComponent } from './portfolio.component';
import { PortfolioService } from './portfolio.service';
import { Observable, of } from 'rxjs';
import { Portfolio } from "./portfolio";

let portfolioServiceStub:  Partial<PortfolioService>;

describe('Portfolio List Component', () => {

  let component: PortfolioComponent;
  let fixture: ComponentFixture<PortfolioComponent>;

  beforeEach(() => {
    const portfolio =  {
      name: "My Portfolio",
      id : 1,
      constituents : [{instrument: "IBM", number: 20}, {instrument: "SP500", number: 80}]
    }
    portfolioServiceStub = {
      getPortfolio() : Observable<Portfolio> {  return of(portfolio);}
    };
    TestBed.configureTestingModule({
      imports: [PortfolioComponent],
      providers: [{ provide: PortfolioService, useValue: portfolioServiceStub }],
    }).compileComponents();
    fixture = TestBed.createComponent(PortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
});

  it('should create the portfolio list', () => {
    expect(component).toBeTruthy();
  });

  it(`should have portfolio default name as 'EMPTY'`, () => {
    const fixture = TestBed.createComponent(PortfolioComponent);
    const portfolioList = fixture.componentInstance;
    expect(portfolioList.portfolio.name).toEqual('EMPTY');
  });

  it('should render portfolio name', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h2')?.textContent).toContain('My Portfolio');
  });

});