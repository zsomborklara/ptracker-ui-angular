import { TestBed } from '@angular/core/testing';
import { TopBarComponent } from './topbar.component';

describe('TopBarComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [TopBarComponent]
  }));

  it('should create the top bar', () => {
    const fixture = TestBed.createComponent(TopBarComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Portfolio Tracker Angular UI'`, () => {
    const fixture = TestBed.createComponent(TopBarComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Portfolio Tracker Angular UI');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(TopBarComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Portfolio Tracker Angular UI');
  });

  it('should render refresh button', () => {
    const fixture = TestBed.createComponent(TopBarComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('a')?.textContent).toContain('Refresh');
  });
});