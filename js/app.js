'use strict'
import {TranslatorComponent} from '../js/translatorComponent.js'

class App {
    constructor() {
        this.init();
        this.translator = new TranslatorComponent;
    }

    init() {
        document.addEventListener('DOMContentLoaded', () => {
            console.log('App incicializada'); 
        })
    }
}

new App(); 