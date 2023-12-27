import { Injectable } from "@angular/core";
import { Logger } from "../common/service/logger.service";
import { Portfolio } from "./portfolio";

@Injectable({providedIn: 'root'})
export class PortfolioService {
    private portfolio!: Portfolio;
  
    constructor(
      private logger: Logger) { }
  
      getPortfolio() {
      this.portfolio =  {
        name: "My Portfolio",
        id : 1,
        constituents : [{instrument: "IBM", number: 20}, {instrument: "SP500", number: 80}]
      }
      return this.portfolio;
    }
  }