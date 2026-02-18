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
        this.elements.btnTranslate.addEventListener('click', async () => {
            await this.translateText();
        })
    }
    
    async translateText() {
        const lanOrigin = this.elements.lanOrigin.value;
        const txtOrigin = this.elements.txtOrigin.value;
        const lanTranslate = this.elements.lanTranslate.value;
        const txtTranslate = this.elements.txtTranslate;

        const translateResult = await this.service.translate(lanOrigin, txtOrigin, lanTranslate);
        txtTranslate.value = translateResult[0][0][0];
    }
}
