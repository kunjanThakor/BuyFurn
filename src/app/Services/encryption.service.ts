import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class EncryptionService {

  private key: any; // Declare key variable

  constructor() {
    // Generate a 16-byte (128-bit) AES key
    this.key = CryptoJS.lib.WordArray.random(16); // 16 bytes key
  }

  public encryptData(data: any): string {
    const encrypted = CryptoJS.AES.encrypt(data, this.key, {
      iv: this.key, // Use the same key as the IV for ECB mode
      mode: CryptoJS.mode.ECB, // ECB mode does not use an IV
      padding: CryptoJS.pad.Pkcs7
    });
    return encrypted.toString();
  }

  decryptData(data: any): string {
    const decrypted = CryptoJS.AES.decrypt(data, this.key, {
      iv: this.key,
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7
    });
    return decrypted.toString(CryptoJS.enc.Utf8);
  }
}
