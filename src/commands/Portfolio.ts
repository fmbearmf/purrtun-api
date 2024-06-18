import { pack, unpack } from "msgpackr";
import { APIError, APIResponse } from "../Response";

export async function Portfolio(token: string): Promise<APIResponse> {
    const response = await fetch("https://api.purrtun.com/portfolio", {
        method: "POST",
        headers: {
            "Content-Type": "application/msgpack",
        },
        body: pack({
            "authToken": `${token}`
        })
    });

    const headers = response.headers;
    const status = response.status;

    if (!response.ok) {
        const error = await response.arrayBuffer();
        const unpacked = await unpack(new Uint8Array(error));

        throw new APIError("Portfolio POST error", status, headers, unpacked);
    } 

    const data = await response.arrayBuffer();
    const unpacked = await unpack(new Uint8Array(data));

    return {
        status,
        headers,
        data: unpacked
    } as APIResponse;
};