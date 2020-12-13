
export class PagedDTO<T> {
  content: T[];
  pageable: Pageable;
  sort: Sort;
    totalElements: number;
    last: boolean;
    totalPages: number;
    size: number;
    number: number;
    numberOfElements: number;
    first: boolean;
    empty: boolean;
}

export class Pageable{
    sort: Sort;
    offset: number;
    pageSize: number;
    pageNumber: number;
    unpaged: boolean;
    paged: boolean;
}
export class Sort{
    sorted: boolean;
    unsorted: boolean;
    empty: boolean;
}
