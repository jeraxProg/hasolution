import create from 'zustand';
import i18n from "i18next";
import { initReactI18next } from 'react-i18next'; 
import {
    translationsEn,
    translationsJa
} from './translations';


i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init( {
    resources: {
      en: { translation: translationsEn },
      ja: { translation: translationsJa },
    },
    lng: "en",
    fallBackLng: "en",
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  })


export const usei18nStore = create((set, get) => ({
    /* State */
    language: '',

    /* Computed */

    /* Functions */
    onChangeTranslate: (event) => {
        i18n.changeLanguage(event.target.value);
        set(state => ({
            ...state,
            language: event.target.value
        }))
    }

}))