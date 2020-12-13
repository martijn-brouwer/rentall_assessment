export class ProductComponentDTO {
    error = false;
    growlMessage: string;
    growlType: string;
    mainItem: string;
    setItem: string;
    changeRFID: string;
    components: ComponentDTO[];
}

export class ComponentDTO{
    error = false;
    productKey: string;
    description: string;
    quantity: number;
    ondemand = false;
    serialitem: number;    
}

export class ProductComponentInconsistentDTO {
    error: number;
    GrowlMessage: string;
    GrowlType: string;
    MainItem: string;
    SetItem: string;
    ChangeRFID: string;
    Components: ComponentInconsistentDTO[];
}

export class ComponentInconsistentDTO{
    error: number;
    ProductKey: string;
    Description: string;
    Quantity: number;
    Ondemand: number;
    Serialitem: number;
}
