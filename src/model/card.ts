import { Provider } from "@angular/core";
import { Material } from "./material";
import { Operation } from "./operation";
import { State } from "./state";

export class Card {
    id:number;
    material:Material;
    state:State;
    operation:Operation;
    prov:Provider;
    count:number;
}
