'use strict'

const LANGUAGES = {
    AUTO: { code: 'auto', name: 'Detectar automáticamente' },
    EN: { code: 'en', name: 'English' },
    ES: { code: 'es', name: 'Spanish' },
    FR: { code: 'fr', name: 'French' },
    DE: { code: 'de', name: 'German' },
    IT: { code: 'it', name: 'Italian' },
    PT: { code: 'pt', name: 'Portuguese' },
    RU: { code: 'ru', name: 'Russian' },
    ZH: { code: 'zh', name: 'Chinese' },
    JA: { code: 'ja', name: 'Japanese' },
  };

  class Language {
    constructor(code, language) {
        this.code = code;
        this.language = language;
    }
  }

  export function getArrayLanguages() {
    let languages = [];

    for(const lan of Object.values(LANGUAGES)) {
        const language = new Language (
            lan.code,
            lan.name
        )

        languages.push(language);
    }

    return languages
  }