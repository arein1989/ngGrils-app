import { Injectable, Inject } from '@angular/core';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  private isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }

  getData(key: string): any {
    if (!this.isBrowser()) return null;

    const item = localStorage.getItem(key);
    return item !== null ? JSON.parse(item) : null;
  }

  setData(key: string, data: any): void {
    if (!this.isBrowser()) return;

    localStorage.setItem(key, JSON.stringify(data));
  }
}
