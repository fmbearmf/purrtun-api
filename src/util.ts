import CryptoJS from "crypto-js";

export async function encrypt(data: string): Promise<string> {
    return CryptoJS.DES.encrypt(data.toString(), CryptoJS.enc.Utf8.parse("696c6f7665706f70636174696e76657374696e706f70796f7573686f756c64696e76657374696e706f70"), { mode: CryptoJS.mode.ECB }).toString();
}
  
export async function decrypt(data: string): Promise<string> {
    return CryptoJS.DES.decrypt(data, CryptoJS.enc.Utf8.parse("696c6f7665706f70636174696e76657374696e706f70796f7573686f756c64696e76657374696e706f70"), { mode: CryptoJS.mode.ECB }).toString(CryptoJS.enc.Utf8);
}