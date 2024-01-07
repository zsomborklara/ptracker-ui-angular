import { NgFor, NgIf } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { PortfolioService } from "./portfolio.service";
import { Portfolio } from "./portfolio";
import { Constituent } from "./constituent";

@Component({
    standalone: true,
    selector:    'app-portfolio-details',
    templateUrl: './portfolio.component.html',
    styleUrls:   [ './portfolio.component.css' ],
    imports:     [ NgFor, NgIf ]
  })
export class PortfolioComponent implements OnInit {
    portfolio: Portfolio = {name: "EMPTY", id: 0, constituents: []};
    constituents: Constituent[] = [];
    selectedConstituent: Constituent | undefined;
  
    constructor(private service: PortfolioService) { }
  
    ngOnInit() {
      this.service.getPortfolio().subscribe(val => {
        this.portfolio = val;
        this.constituents = val.constituents;});
    }
  
    selectConstituent(constituent: Constituent) { this.selectedConstituent = constituent; }
  }