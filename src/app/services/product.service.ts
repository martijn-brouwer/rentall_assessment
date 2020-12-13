import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DropDownMenuOption, DropDownMenuOptionStringId, HeaderCountDTO, ProductDTO } from '../DTOs/productDTO';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { PagedDTO } from '../DTOs/pagedDTO';
import { ProductInconsistentDTO } from '../DTOs/productInconsistentDTO';
import { forEach } from '@angular/router/src/utils/collection';
import { ComponentDTO, ProductComponentDTO, ProductComponentInconsistentDTO } from '../DTOs/productComponentDTO';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productsUrl = environment.backend + 'products.json';
  productUrl = environment.backend + 'product.json';
  componentsUrl = environment.backend + 'productCompontents.json';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  // converts dropdown options (id+description) from the json object, which are defined as objects instead of arrays.
  convertDropDownMenuOptions(inconsistentObject: Object): DropDownMenuOption[] {
    const dropDownMenuOptions = [];
    Object.values(inconsistentObject).forEach(element => {
      const newOption = new DropDownMenuOption;
      newOption.id = element.id;
      newOption.description = element.description;
      dropDownMenuOptions.push(newOption);
    });
    return dropDownMenuOptions;
  }

  // same as convertDropDownMenuOptions, but headerCount has a string for an id, so needs a different conversion.
  convertDropDownMenuOptionsWithStringId(inconsistentObject: Object): DropDownMenuOptionStringId[] {    
    const dropDownMenuOptions = [];
    Object.values(inconsistentObject).forEach(element => {
      const newOption = new DropDownMenuOptionStringId;
      newOption.id = element.id;
      newOption.description = element.description;
      dropDownMenuOptions.push(newOption);
    });
    return dropDownMenuOptions;
  }
  // converts a number to a boolean
  convertBoolean(number: number): boolean {
    let result = false; // defaults to false
    if (number==1) {
      result = true;
    }
    return result;
  }

  getProducts(): Observable<PagedDTO<ProductDTO>> {
    return this.http.get<PagedDTO<ProductDTO>>(this.productsUrl , this.httpOptions).pipe(
      tap(() => this.log('fetched products')),
      catchError(this.handleError<PagedDTO<ProductDTO>>('getProducts'))
    );
  }
  
  getProduct(): Observable<ProductDTO> {
    return this.http.get<ProductInconsistentDTO>(this.productUrl , this.httpOptions).pipe(
      tap(() => this.log('fetched products')),
      // mapping inconsistent product onto proper product
      map((response) => {
        return this.convertInconsistentProduct(response);
      }),
      catchError(this.handleError<ProductDTO>('getProducts'))
    );
  }

  getComponents(): Observable<ProductComponentDTO> {
    return this.http.get<ProductComponentInconsistentDTO>(this.componentsUrl , this.httpOptions).pipe(
      tap(() => this.log('fetched components')),
      // mapping inconsistent product onto proper product
      map((response) => {
        return this.convertInconsistentProductComponents(response);
      }),
      catchError(this.handleError<ProductComponentDTO>('getComponents'))
    );
  }

  /**
   * Returns a properly formatted productDTO.
   * @param inconsistent the inconsistent product from the backend
   */
  convertInconsistentProduct(inconsistent: ProductInconsistentDTO): ProductDTO{
    // this function renames certain variables to be consistent with the json list of products, as well as being consistent with itself.
    // found consistency errors such as: 
    // - inconsistent use of lower and upper case
    // - using numbers for booleans
    // - inconsistent use of plurality (the word 'level' for an array of 'levels')
    // - lists like print/change/tag types are object lists, not array lists, so they need to be converted to arrays.
    const product = new ProductDTO;
    product.productId = inconsistent.ProductId;
    product.productKey = inconsistent.ProductKey;
    product.description = inconsistent.Description;

    product.error = inconsistent.error;
    product.growlMessage = inconsistent.GrowlMessage;
    product.growlType = inconsistent.GrowlType;
    product.groupNumber = inconsistent.GroupNumber;
    product.agpNumber = inconsistent.AgpNumber;
    product.length = inconsistent.Length;
    product.width = inconsistent.Width;
    product.height = inconsistent.Height;
    product.weight = inconsistent.Weight;
    product.weightAwms = inconsistent.WeightAwms;
    product.headerVolumeWeightCalc = inconsistent.HeaderVolumeWeightCalc;
    product.headerVolumeWeightUpdated = inconsistent.HeaderVolumeWeightUpdated;
    product.labelRow1 = inconsistent.LabelRow1;
    product.labelRow2 = inconsistent.LabelRow2;
    product.qrRow1 = inconsistent.QrRow1;
    product.qrRow2 = inconsistent.QrRow2;

    product.printTypeId = inconsistent.PrintTypeId;
    product.serviceGroupId = inconsistent.ServiceGroupId;
    product.tuv = inconsistent.TUV;
    product.tuvGroupId = inconsistent.TUVGroupId;
    product.propertyGroupId = inconsistent.PropertieGroupId;
    product.levelId = inconsistent.LevelId;
    product.image = inconsistent.Image;    
    product.mainItem = inconsistent.MainItem;
    product.printTypes = inconsistent.printTypes;
    product.changeTypes = inconsistent.changeTypes;

    //converting objects to java objects
    product.tagTypes = this.convertDropDownMenuOptions(inconsistent.tagTypes);
    product.serviceGroups = this.convertDropDownMenuOptions(inconsistent.serviceGroups);
    product.rssiLevels = this.convertDropDownMenuOptions(inconsistent.RssiLevel)
    product.tuvGroups = this.convertDropDownMenuOptions(inconsistent.TUVGroups);
    product.propertyGroups = this.convertDropDownMenuOptions(inconsistent.PropertyGroups);
    product.headerCount = this.convertDropDownMenuOptionsWithStringId(inconsistent.headerCount);    
    
    // converting to boolean
    product.ov = this.convertBoolean(inconsistent.OV);
    product.emballage = this.convertBoolean(inconsistent.Emballage);
    product.pallet = this.convertBoolean(inconsistent.Pallet);
    product.flightcase = this.convertBoolean(inconsistent.Flightcase);
    product.defaultPhlippo = this.convertBoolean(inconsistent.DefaultPhlippo);
    product.nen = this.convertBoolean(inconsistent.NEN);

    // converting numerical rights to booleans
    product.changeSG = this.convertBoolean(inconsistent.changeSG);
    product.setInspections = this.convertBoolean(inconsistent.setInspections);
    product.addProperties = this.convertBoolean(inconsistent.addProperties);
    product.delProperties = this.convertBoolean(inconsistent.delProperties);
    product.editQR = this.convertBoolean(inconsistent.editQR);
    product.changePG = this.convertBoolean(inconsistent.changePG);
    product.setProperties = this.convertBoolean(inconsistent.SetProperties);
    product.changePL = this.convertBoolean(inconsistent.changePL);
    product.loadComponents = this.convertBoolean(inconsistent.LoadComponents);
    product.changeAgpNumber = this.convertBoolean(inconsistent.editAgpNumber);
    product.changeChangeType = this.convertBoolean(inconsistent.changeChangeType);
    product.changeTagType = this.convertBoolean(inconsistent.changeTagType);
    product.productTagTypeId = this.convertBoolean(inconsistent.ProductTagTypeId);
    product.changeProductIdChanged = this.convertBoolean(inconsistent.changeProductIdChanged);
    product.productIdChanged = this.convertBoolean(inconsistent.ProductIdChanged);
    product.seeProductIdChanged = this.convertBoolean(inconsistent.SeeProductIdChanged);
    product.changeProductId = this.convertBoolean(inconsistent.ChangeProductId);
    product.changeLevelId = this.convertBoolean(inconsistent.changeLevelId);
    return product;
  }

  /**
   * Returns a proper and consistent ProductComponentDTO
   * @param inconsistent the inconsistent ProductComponentInconsistentDTO
   */
  convertInconsistentProductComponents(inconsistent: ProductComponentInconsistentDTO): ProductComponentDTO{
    // this function renames certain variables to be consistent, as well as being consistent with itself.
    // found consistency errors such as: 
    // - inconsistent use of lower and upper case
    // - using numbers for booleans

    const productComponents = new ProductComponentDTO;
    productComponents.error = this.convertBoolean(inconsistent.error);
    productComponents.growlMessage = inconsistent.GrowlMessage;
    productComponents.growlType = inconsistent.GrowlType;
    productComponents.mainItem = inconsistent.MainItem;
    productComponents.setItem = inconsistent.SetItem;
    productComponents.changeRFID = inconsistent.ChangeRFID;

    // initialize component list
    productComponents.components = [];
    // convert inconsistent component list to proper componentlist
    inconsistent.Components.forEach(inconsistentComponent => {
      const component = new ComponentDTO;
      component.error = this.convertBoolean(inconsistentComponent.error);
      component.productKey = inconsistentComponent.ProductKey;
      component.description = inconsistentComponent.Description;
      component.quantity = inconsistentComponent.Quantity;
      component.ondemand = this.convertBoolean(inconsistentComponent.Ondemand);
      component.serialitem = inconsistentComponent.Serialitem;
      productComponents.components.push(component);
    });
    return productComponents;
  }

  handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  private log(message: string) {
    console.log('productService: ' + message);
  }
  constructor(private http: HttpClient) { }
}
