'use strict'
import {TranslatorComponent} from '../js/translatorComponent.js'
import { TranslationService } from './translationService.js';

class App {
    constructor() {
        this.init();
        this.translator = new TranslatorComponent(new TranslationService);
    }

    init() {
        document.addEventListener('DOMContentLoaded', () => {
            console.log('App incicializada'); 
        })
    }
}

new App(); 