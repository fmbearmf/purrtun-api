import { pack, unpack } from "msgpackr";
import { APIError, APIResponse } from "../Response";

export async function Rally(token: string, boon: string, bane: string): Promise<APIResponse> {
    const response = await fetch("https://api.purrtun.com/rally", {
        method: "POST",
        headers: {
            "Content-Type": "application/msgpack",
        },
        body: pack({
            "authToken": `${token}`,
            "boon": boon,
            "bane": bane
        })
    });

    const headers = response.headers;
    const status = response.status;

    if (!response.ok) {
        const error = await response.arrayBuffer();
        const unpacked = await unpack(new Uint8Array(error));

        throw new APIError("Rally POST error", status, headers, unpacked);
    } 

    const data = await response.arrayBuffer();
    const unpacked = await unpack(new Uint8Array(data));

    return {
        status,
        headers,
        data: unpacked
    } as APIResponse;
};