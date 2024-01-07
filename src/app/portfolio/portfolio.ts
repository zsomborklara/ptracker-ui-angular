import { Constituent } from "./constituent";

export interface Portfolio {
    id: number;
    name: string;
    constituents: Constituent[];
}

export const EMPTY: Portfolio = {name: "EMPTY", id: 0, constituents: []};