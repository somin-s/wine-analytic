import { ObjectId } from "mongodb";

export interface Metadata1 {
    _id: ObjectId;
    ID : string;
    Producer_Abbrev : string;
}
export interface Metadata {
    ID : string;
    Producer_Abbrev : string;
    Producer : string;
    Vineyard : string;
    Vintage : string;
    Region : string;
    Cost : number;
    Uses : string;
    Closure : string;
    Harvest : string;
    Yield : string;
    Production : string;
    Viticulture : string;
    Quality : number;
    Layer_ID : string;
    Layer_ID1 : string;
    DIV: number;
}

export interface MetadataGraph {
    Producer : string;
    Vineyard : string;
    Viticulture: string;
    Uses : string;
    Cost : number;
    Quality : number;
    Ethyl_butanoate : number;
    Butanoic_acid: number;
    Hexanoic_acid: number;
    Octanoic_acid: number;
    DIV: number;
}
export interface MetadataGraphColor {
    ID: string;
	Producer: string;
    Vineyard: string;
    Quality: number;
    Cost: number;
	Yellow: number;
	Red: number;
	Blue: number;
}
  
export interface MetadataList {
    ID: string;
    Vineyard: string;
}