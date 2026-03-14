import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
    getData(key: string): any {
    const item = localStorage.getItem(key);
    return item !== null ? JSON.parse(item) : null;
  }
    setData(key: string, data: any) {
    localStorage.setItem(key, JSON.stringify(data));
  }
  constructor() { }
}
