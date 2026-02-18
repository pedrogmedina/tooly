'use strict'
import {getArrayLanguages} from '../js/languages.js'

/*Generar listado de idiomas en el select a aprtir de la constante LANGUAGES*/
export function generateLanguages() {
    const languages = getArrayLanguages();
    let lanOrigin = document.getElementById('lanOrigin');
    let lanTranslate = document.getElementById('lanTranslate');

    for (const language of languages) {
        const optionOrigin = document.createElement('option');
        optionOrigin.value = language.code;
        optionOrigin.textContent = language.language;
        lanOrigin.appendChild(optionOrigin);
        

        const optionTranslate = document.createElement('option');
        optionTranslate.value = language.code;
        optionTranslate.textContent = language.language;
        lanTranslate.appendChild(optionTranslate);
        
    }
}

export function swapLanguages() {
    
}


