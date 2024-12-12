import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type Language = 'en' | 'zh-Hant' | 'zh-Hans';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private currentLang = new BehaviorSubject<Language>('en');

  setLanguage(lang: Language) {
    this.currentLang.next(lang);
    localStorage.setItem('preferred_language', lang);
  }

  getCurrentLanguage() {
    return this.currentLang.asObservable();
  }

  constructor() {
    const savedLang = localStorage.getItem('preferred_language') as Language;
    if (savedLang) {
      this.currentLang.next(savedLang);
    }
  }
}