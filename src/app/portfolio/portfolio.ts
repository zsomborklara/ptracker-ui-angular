import { Constituent } from "./constituent";

export interface Portfolio {
    id: number;
    name: string;
    constituents: Constituent[];
}