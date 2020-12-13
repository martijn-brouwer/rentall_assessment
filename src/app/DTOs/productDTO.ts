export class ProductDTO {
    productId: number;
    productKey: string;
    agpNumber: number;
    description: string;
    ov=false;
    emballage=false;
    deleted=false;
    pallet=false;
    flightcase=false;
    minimumPeakRssi: number;
    //productComponents: ProductComponentDTO[];

    // product detail fields

    error: number;
    growlMessage: string;
    growlType: string;
    groupNumber: number;
    length: number;
    width: number;
    height: number;
    weight: number;
    weightAwms: number;
    headerVolumeWeightCalc: string;
    headerVolumeWeightUpdated: string;
    labelRow1: string;
    labelRow2: string;
    qrRow1: string;
    qrRow2: string;
    printTypeId: number; // Don't know what type it is, assuming number, because provided field data is null.
    serviceGroupId: number;
    nen = false;
    tuv: number;
    tuvGroupId: number; // Don't know what type it is, assuming number, because provided field data is null.
    propertyGroupId: number;   // Don't know what type it is, assuming number, because provided field data is null.
    
    // assuming these are rights to edit fields
    changeSG: boolean;
    setInspections: boolean;
    addProperties: boolean;
    delProperties: boolean;
    editQR: boolean;
    changePG: boolean;
    setProperties: boolean; // note: Inconsistent case use.
    changePL: boolean;
    loadComponents: boolean;
    changeAgpNumber: boolean;
    changeChangeType: boolean;
    productChangeTypeId: boolean;
    changeTagType: boolean;
    productTagTypeId: boolean;
    changeProductIdChanged: boolean;
    productIdChanged: boolean;
    seeProductIdChanged: boolean;
    changeProductId: boolean;
    levelId: number;
    changeLevelId: boolean;
    image: string;
    defaultPhlippo = false;
    mainItem: string;
    printTypes: DropDownMenuOption[];
    changeTypes: DropDownMenuOption[];
    tagTypes: DropDownMenuOption[];
    serviceGroups: DropDownMenuOption[];
    tuvGroups: DropDownMenuOption[];
    propertyGroups: DropDownMenuOption[];
    rssiLevels: DropDownMenuOption[];    
    headerCount: DropDownMenuOptionStringId[]; 
    properties: PropertyDTO[];
}

export class PrintTypeDTO{
    id: number;
    description: string;
}
export class ChangeTypeDTO{
    id: number;
    description: string;
}
export class TagTypeDTO{
    id: number;
    description: string;
}
export class ServiceGroupDTO{
    id: number;
    description: string;
}

export class TuvGroupDTO{
    id: number;
    description: string;
}

export class PropertyGroupDTO{
    id: number;
    description: string;
}

export class RssiLevelDTO{
    id: number;
    description: string;
}
export class HeaderCountDTO{
    id: string;
    description: string;
}

export class PropertyDTO{
    error: number;
}

export class DropDownMenuOption{
    id: number;
    description: string;
}
export class DropDownMenuOptionStringId{
    id: number;
    description: string;
}