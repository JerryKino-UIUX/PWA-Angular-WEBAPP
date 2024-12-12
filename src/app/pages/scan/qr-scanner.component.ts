import { AfterViewInit, Component, ElementRef, EventEmitter, OnDestroy, Output, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Html5Qrcode } from 'html5-qrcode';

@Component({
  selector: 'app-qr-scanner',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="qr-scanner-container">
      <div #reader></div>
      <div class="scanner-overlay" *ngIf="!isScanning">
        <button class="btn btn-primary" (click)="startScanner()">
          {{ 'SCANNER.START' | translate }}
        </button>
      </div>
    </div>
  `,
  styles: [`
    .qr-scanner-container {
      position: relative;
      width: 100%;
      max-width: 600px;
      margin: 0 auto;
    }
    .scanner-overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(0,0,0,0.5);
    }
  `]
})
export class QrScannerComponent implements AfterViewInit, OnDestroy {
  @ViewChild('reader') readerElement!: ElementRef;
  @Output() scanResult = new EventEmitter<string>();

  private html5QrCode: Html5Qrcode | null = null;
  isScanning = false;

  ngAfterViewInit() {
    this.html5QrCode = new Html5Qrcode('reader');
  }

  startScanner() {
    if (this.html5QrCode) {
      this.isScanning = true;
      this.html5QrCode.start(
        { facingMode: 'environment' },
        {
          fps: 10,
          qrbox: { width: 250, height: 250 }
        },
        (decodedText) => {
          this.scanResult.emit(decodedText);
          this.stopScanner();
        },
        (error) => {
          console.error('QR Code scanning failed:', error);
        }
      );
    }
  }

  stopScanner() {
    if (this.html5QrCode && this.isScanning) {
      this.html5QrCode.stop()
        .then(() => {
          this.isScanning = false;
        })
        .catch((err) => console.error('Error stopping scanner:', err));
    }
  }

  ngOnDestroy() {
    this.stopScanner();
  }
}