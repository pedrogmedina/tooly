'use strict'

import {TRANSLATE_API_CONFIG}  from '../js/config.js';
import { generateLanguages } from './modules.js';

export class TranslationService {
    constructor() {
        generateLanguages();
    }
    
    buildURL(lanOrigin, txtOrigin, lanTranslate) {

        const BASE_URL = TRANSLATE_API_CONFIG.BASE_URL;
        const CLIENT = TRANSLATE_API_CONFIG.CLIENT;
        const DATA_TYPE = TRANSLATE_API_CONFIG.DATA_TYPE;

        return `${BASE_URL}?client=${CLIENT}&sl=${lanOrigin}&tl=${lanTranslate}&dt=${DATA_TYPE}&q=${txtOrigin}`; 

    }

    async translate(lanOrigin, txtOrigin, lanTranslate) { 
        
        const request = await fetch ( this.buildURL(lanOrigin, txtOrigin, lanTranslate));
        const data = await request.json(); 
        return data; 
    }
}
