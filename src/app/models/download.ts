export interface AromaLincoln
{
    ID: string;
    Ethyl_acetate: number;
    Ethyl_2_methylpropanoate: number;
    Ethyl_butanoate: number;
    Ethyl_3_methylbutanoate: number;
    Methylpropan_1: number;
    Methylbutyl_acetate: number;
    Ethyl_pentanoate: number;
    Methylbutan_1_ol: number;
    Ethyl_hexanoate: number;
    Hexyl_Acetate: number;
    Ethyl_2_hydroxypropanoate: number;
    Hexan_1_ol: number;
    E_Hex_3: number;
    Ethyl_heptanoate: number;
    Z_Hex_3: number;
    Heptan_1: number;
    Ethyl_octanoate: number;
    Benzaldehyde: number;
    Ethyl_decanoate: number;
    Phenylethan_1: number;
    Methylpropyl_acetate: number;
    Ethyl_methylbutanoate: number;
    Methyl_butyl_acetate: number;
    E_Hex_2: number;
    Dimethylocta_6: number;
    Octan_1_ol: number;
    Dimethyloct: number;
    Dimethylocta: number;
    Phenethyl_acetate: number;
    Trimethylcyclohexa_3_dien: number;
    Methoxyphenol: number;
    Dimethylocta_6_dien: number;
    Trimethylcyclohex_en_1: number;
    Ethyl__phenylpropanoate: number;
    Trimethylcyclohexen_1_yl: number;
    Phenol: number;
    Ethyl_methoxyphenol: number;
    Ethyl_phenylprop: number;
    Methoxy_enylphenol: number;
    Methyl_aminobenzoate: number;
    Acetic_acid: number;
    Methylpropanoic_acid: number;
    Butanoic_acid: number;
    Methylbutanoic_acid: number;
    Methylbutanoic_acid_2: number;
    Hexanoic_acid: number;
    Octanoic_acid: number;
    Tested: number;

}
export interface Berry_OD
{
    ID: string;
    Berry_OD_g_2018: number;
    Berr_Mass_2019: number;
    Berry_OD_g_2019: number;
    Berr_Mass_2020: number;
    Berry_OD_g_2020: number;
    Yield_2018: number;
    Berry_OD_kg_2018: number;
    Yield_2019: number;
    Berry_OD_kg_2019: number;
    Yield_2020: number;
    Berry_OD_kg_2020: number;
    Berry_per_vine2018: number;
    Berry_OD_no_per_vine_2018: number;
    Berry_vine20181: number;
    Berry_OD_no_vine_2019: number;
    Berry_vine20182: number;
    Berry_OD_no_vine_2020: number;

}
export interface Color_Lincoln
{
    ID: string;
    polymeric_Anthocyanin: number;
    Brilliance: number;
    Intensity: number;
    Yellow: number;
    Red: number;
    Blue: number;
    Hue: number;
    Color_density: number;
    Degree_of_coloration: number;
    SO2_Resistance: number;
    Total_Red_Pig: number;
    Total_phenolic: number;
    Colored_Anthocyanin: number;
    L: number;
    a: number;
    b: number;
    C: number;
    H: number;
    Chemical_Age: number;
    Total_Anthocyanin: number;
    Anthocyanin_in_colored_form: number;
    Anthocyanins_decolorized_by_SO2: number;
    Tested: number;

}
export interface Comp_Kea_Berry_Vs_AWRI
{
    ID: string;
    Region_ID: string;
    Site_ID: string;
    Year: number;
    Vine_yield: number;
    Bunch_weight: number;
    Berry_weight: number;
    TSS: number;
    TA: number;
    pH: number;
    AWRI_OD280_AU: number;
    AWRI_OD320_AU: number;
    AWRI_OD520_AU: number;
}

export interface Oenological_analysis_PFR
{
    ID: string;
    Variety: string;
    Vintage: string;
    Company: string;
    Brand: string;
    Region: string;
    Trial: string;
    Date_Analysed: string;
    Ethanol_V_per_Vpercent: number;
    pH: number;
    TA_g_per_L: number;
    Total_Sulphur_mg_per_L: number;
    Free_Sulphur_mg_per_L: number;
    Glucose_g_per_L: number;
    Fructose_g_per_L: number;
    Gluc_Fruc_g_per_L: number;
    OD_280_AU: number;
    OD_320_AU: number;
    OD_420_AU: number;
    OD_520_AU: number;
    OD_620_AU: number;
    Total_phenolics_mg_GAE_L: number;

}