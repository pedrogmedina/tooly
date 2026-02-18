'use strict'

export class TranslatorComponent {
    constructor(service) {
        this.service = service;

        this.elements = {
            lanOrigin: document.getElementById('lanOrigin'), 
            txtOrigin: document.getElementById('txtOrigin'),
            lanTranslate: document.getElementById('lanTranslate'),
            txtTranslate: document.getElementById('txtTranslate'),
            btnTranslate: document.getElementById('btnTranslate')
        }; 

        this.init();
    }

    init() {
        /*Añadir compobación para que el botón no se habilite hasta tener todo relleno*/
        this.elements.btnTranslate.addEventListener('click', async () => {
            await this.translateText();
        })
    }
    
    async translateText() {
        const lanOrigin = elements.lanOrigin.value;
        const txtOrigin = elements.txtOrigin.value;
        const lanTranslate = elements.lanTranslate.value;
        const txtTranslate = elements.txtTranslate;

        const translateResult = await this.service.translate(lanOrigin, txtOrigin, lanTranslate);
        txtTranslate.value = translateResult;
    }
}
