import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MenusService {
    private messageSource = new BehaviorSubject('');
    currentMessage = this.messageSource.asObservable();

    constructor () {
    }

    sendMenu(menu: string) {
        console.log('called with ' + menu);
        this.messageSource.next(menu);
    }
}

