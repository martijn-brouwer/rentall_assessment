// this file is an intermediate to import the product from the json which has inconsistent cases. After importing this DTO, it should be converted to a proper ProductDTO

export class ProductInconsistentDTO {
    error: number;
    GrowlMessage: string;
    GrowlType: string;
    ProductId: number;
    ProductKey: string;    
    Description: string;
    GroupNumber: number;
    AgpNumber: number;
    Length: number;
    Width: number;
    Height: number;
    Weight: number;
    WeightAwms: number;
    HeaderVolumeWeightCalc: string;
    HeaderVolumeWeightUpdated: string;
    LabelRow1: string;
    LabelRow2: string;
    QrRow1: string;
    QrRow2: string;
    OV: number;
    Emballage: number;
    Pallet: number;
    Flightcase: number;
    PrintTypeId: number; // Don't know what type it is, assuming number, because provided field data is null.
    ServiceGroupId: number;
    NEN: number;
    TUV: number;
    TUVGroupId: number; // Don't know what type it is, assuming number, because provided field data is null.
    PropertieGroupId: number;   // Don't know what type it is, assuming number, because provided field data is null.
                                // Also, property is misspelled
    changeSG: number;
    setInspections: number;
    addProperties: number;
    delProperties: number;
    editQR: number;
    changePG: number;
    SetProperties: number; // note: Inconsistent case use.
    changePL: number;
    LoadComponents: number;
    editAgpNumber: number;
    changeChangeType: number;
    ProductChangeTypeId: number;
    changeTagType: number;
    ProductTagTypeId: number;
    changeProductIdChanged: number;
    ProductIdChanged: number;
    SeeProductIdChanged: number;
    ChangeProductId: number;
    LevelId: number;
    changeLevelId: number;
    Image: string;
    DefaultPhlippo: number;
    MainItem: string;

    headerCount: Object;
    printTypes: DropDownMenuOption[];
    changeTypes: DropDownMenuOption[];
    tagTypes: Object;
    serviceGroups: Object;
    TUVGroups: Object;
    PropertyGroups: Object;
    RssiLevel: Object; //arrayname is not plural (inconsistent)
}

export class ProductComponentDTO{
    productComponentsId: number;
    agpNumber: number;
    componentAgpNumber: number;
    quantity: number;
    sort: number;
    ondemand: boolean;
    deleted: number;
    auxcisStatus: boolean;
    productSet: false;
    priority: boolean;
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

export class DropDownMenuOption{
    id: number;
    description: string;
}


export class PropertyDTO{
    error: number;
}