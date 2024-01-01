import { Injectable } from "@angular/core";
import { Logger } from "../common/service/logger.service";
import { Portfolio } from "./portfolio";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from "rxjs";
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class PortfolioService {
    private ptrackerBackendUrl: string;
    private empty: Portfolio = {name: "EMPTY", id: 0, constituents: []};
  
    constructor(
      private http: HttpClient,
      private logger: Logger) { 
        this.ptrackerBackendUrl = "http://localhost:8080/tracker/portfolio/personal";
      }
  
      getPortfolio() : Observable<Portfolio> {

      this.logger.log('Loading portfolio');
      return this.http.get<Portfolio>(this.ptrackerBackendUrl)
      .pipe(
        catchError(this.handleError<Portfolio>('getPortfolio', this.empty))
      );
    }

    private handleError<T>(operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
    
        console.error(error);
    
        this.logger.log(`${operation} failed: ${error.message}`)
    
        // Let the app keep running by returning an empty portfolio.
        return of(result as T);
      };
    }
  }