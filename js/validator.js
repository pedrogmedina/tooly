'use strict'

export class Validator {
    static validateText(text, node) {
        if (text.value.length === 0) {
            const message = document.createElement ('div');
            message.classList.add('message', 'message--warning');
            message.textContent = 'Por favor, introduce el texto a traducir'
            node.appendChild(message);
        }

    }

    static validateLanguage() {

    }

    static validateLength(text, node) {
        if (text.value.length > 5000) {
            const message = document.createElement ('div');
            message.classList.add('message', 'message--error');
            message.textContent = 'El texto no puede suprerar 5000 caracteres'
            node.appendChild(message);
        }
    }
}