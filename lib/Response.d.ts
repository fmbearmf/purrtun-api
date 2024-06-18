export interface APIResponse {
    status: number;
    headers: Headers;
    data: any;
}
export declare class APIError extends Error {
    status: number;
    headers: Headers;
    errorData: any;
    constructor(message: string, statusCode: number, headers: Headers, errorData: any);
}
