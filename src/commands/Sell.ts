import { pack, unpack } from "msgpackr";
import { APIError, APIResponse } from "../Response";

export async function Sell(token: string, stockID: number, numShares: number): Promise<APIResponse> {
    const response = await fetch("https://api.purrtun.com/sell", {
        method: "POST",
        headers: {
            "Content-Type": "application/msgpack",
        },
        body: pack({
            "authToken": `${token}`,
            "stockID": stockID,
            "numShares": numShares
        })
    });
    const headers = response.headers;
    const status = response.status;

    if (!response.ok) {
        const error = await response.arrayBuffer();
        const unpacked = await unpack(new Uint8Array(error));

        throw new APIError("Sell POST error", status, headers, unpacked);
    } 

    const data = await response.arrayBuffer();
    const unpacked = await unpack(new Uint8Array(data));

    return {
        status,
        headers,
        data: unpacked
    } as APIResponse;
};