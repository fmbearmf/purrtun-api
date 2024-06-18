export interface APIResponse {
    status: number;
    headers: Headers;
    data: any;
}

export class APIError extends Error {
    status: number;
    headers: Headers;
    errorData: any;

    constructor(message: string, statusCode: number, headers: Headers, errorData: any) {
        super(message);

        this.name = "APIError";
        this.status = statusCode;
        this.headers = headers;
        this.errorData = errorData;
    }
}