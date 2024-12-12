import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScannerService {
  private scanningStatus = new BehaviorSubject<boolean>(false);
  private lastScanResult = new BehaviorSubject<string | null>(null);

  get isScanning$(): Observable<boolean> {
    return this.scanningStatus.asObservable();
  }

  get lastScan$(): Observable<string | null> {
    return this.lastScanResult.asObservable();
  }

  setScanning(status: boolean): void {
    this.scanningStatus.next(status);
  }

  setScanResult(result: string): void {
    this.lastScanResult.next(result);
  }

  clearScanResult(): void {
    this.lastScanResult.next(null);
  }
}