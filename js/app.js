'use strict'

import {TranslatorComponent} from '../js/translatorComponent.js';
import { TranslationService } from './translationService.js';
import {activateURL, showMenu} from './modules.js';
import { TOOLS } from './config.js';

class App {
    constructor() {
        this.btnMenu = document.getElementById('btn-menu');
        this.tools = TOOLS;
        this.init();
    }

    init() {
        document.addEventListener('DOMContentLoaded', () => {
            const isTranslatorPage = window.location.pathname.endsWith('translator.html');
            if(isTranslatorPage) {
                this.translator = new TranslatorComponent(new TranslationService());
            }
        });

        this.btnMenu.addEventListener('click', (e) => {
            const menu = showMenu(this.tools, this.btnMenu);
            menu.classList.toggle('menu--active');
            
        })

        document.addEventListener('DOMContentLoaded', () => {
            activateURL();
        });
    }
}

new App(); 