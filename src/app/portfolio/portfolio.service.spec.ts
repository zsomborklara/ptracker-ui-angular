import { Logger } from "../common/service/logger.service";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { PortfolioService } from "./portfolio.service";
import { MOCK_PORTFOLIO } from "./mock-portfolio";
import { defer } from "rxjs";
import { EMPTY } from "./portfolio";


describe('Portfolio Service', () => {

let httpClientSpy: jasmine.SpyObj<HttpClient>;
let portfolioService: PortfolioService;

beforeEach(() => {
  httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
  portfolioService = new PortfolioService(httpClientSpy, new Logger());
});

it('should return expected portfolio (HttpClient called once)', (done: DoneFn) => {

  httpClientSpy.get.and.returnValue(asyncData(MOCK_PORTFOLIO));
  
  portfolioService.getPortfolio().subscribe({
    next: (returnValue) => {
      expect(returnValue).withContext('expected portfolio').toEqual(MOCK_PORTFOLIO);
      done();
    },
    error: done.fail,
  });
  expect(httpClientSpy.get.calls.count()).withContext('one call').toBe(1);
});

it('should return an error when the server returns a 404', (done: DoneFn) => {
  const errorResponse = new HttpErrorResponse({
    error: 'test 404 error',
    status: 404,
    statusText: 'Not Found',
  });

  httpClientSpy.get.and.returnValue(asyncError(errorResponse));

  portfolioService.getPortfolio().subscribe({
    next: (returnValue) => {
      expect(returnValue).withContext('expected portfolio').toEqual(EMPTY);
      done();
    },
    error: (_) => {
      done.fail('error should be caught and empty portfolio returned')
      done();
    },
  });
});

function asyncData<T>(data: T) {
  return defer(() => Promise.resolve(data));
}

function asyncError(errorObject: any) {
  return defer(() => Promise.reject(errorObject));
}

});
