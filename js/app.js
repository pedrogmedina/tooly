'use strict'
import {TranslatorComponent} from '../js/translatorComponent.js'
import { TranslationService } from './translationService.js';

class App {
    constructor() {
        this.init();
    }

    init() {
        document.addEventListener('DOMContentLoaded', () => {
            this.translator = new TranslatorComponent(new TranslationService);
        })
    }
}

new App(); 