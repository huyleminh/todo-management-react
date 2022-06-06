export interface IAPIResponse<T> {
    code: number;
    data?: T;
    message?: string;
}

export interface IAppPagination {
    page: number;
    total: number;
    limit: number;
}
