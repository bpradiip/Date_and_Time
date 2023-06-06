const localeList = [
{ key: "en-US", value: "English (US)" },
{ key: "af-ZA", value: "Afrikaans" },
{ key: "sq-AL", value: "Albanian" },
{ key: "ar-AR", value: "Arabic" },
{ key: "hy-AM", value: "Armenian" },
{ key: "ay-BO", value: "Aymara" },
{ key: "az-AZ", value: "Azeri" },
{ key: "eu-ES", value: "Basque" },
{ key: "be-BY", value: "Belarusian" },
{ key: "bn-IN", value: "Bengali" },
{ key: "bs-BA", value: "Bosnian" },
{ key: "bg-BG", value: "Bulgarian" },
{ key: "ca-ES", value: "Catalan" },
{ key: "ck-US", value: "Cherokee" },
{ key: "hr-HR", value: "Croatian" },
{ key: "cs-CZ", value: "Czech" },
{ key: "da-DK", value: "Danish" },
{ key: "nl-NL", value: "Dutch" },
{ key: "nl-BE", value: "Dutch (Belgi?)" },
{ key: "en-GB", value: "English (UK)" },
{ key: "en-UD", value: "English (Upside Down)" },
{ key: "en-US", value: "English (US)" },
{ key: "eo-EO", value: "Esperanto" },
{ key: "et-EE", value: "Estonian" },
{ key: "fo-FO", value: "Faroese" },
{ key: "tl-PH", value: "Filipino" },
{ key: "fi-FI", value: "Finnish" },
{ key: "fb-FI", value: "Finnish (test)" },
{ key: "fr-CA", value: "French (Canada)" },
{ key: "fr-FR", value: "French (France)" },
{ key: "gl-ES", value: "Galician" },
{ key: "ka-GE", value: "Georgian" },
{ key: "de-DE", value: "German" },
{ key: "el-GR", value: "Greek" },
{ key: "gn-PY", value: "Guaran?" },
{ key: "gu-IN", value: "Gujarati" },
{ key: "he-IL", value: "Hebrew" },
{ key: "hi-IN", value: "Hindi" },
{ key: "hu-HU", value: "Hungarian" },
{ key: "is-IS", value: "Icelandic" },
{ key: "id-ID", value: "Indonesian" },
{ key: "ga-IE", value: "Irish" },
{ key: "it-IT", value: "Italian" },
{ key: "ja-JP", value: "Japanese" },
{ key: "jv-ID", value: "Javanese" },
{ key: "kn-IN", value: "Kannada" },
{ key: "kk-KZ", value: "Kazakh" },
{ key: "km-KH", value: "Khmer" },
{ key: "tl-ST", value: "Klingon" },
{ key: "ko-KR", value: "Korean" },
{ key: "ku-TR", value: "Kurdish" },
{ key: "la-VA", value: "Latin" },
{ key: "lv-LV", value: "Latvian" },
{ key: "fb-LT", value: "Leet Speak" },
{ key: "li-NL", value: "Limburgish" },
{ key: "lt-LT", value: "Lithuanian" },
{ key: "mk-MK", value: "Macedonian" },
{ key: "mg-MG", value: "Malagasy" },
{ key: "ms-MY", value: "Malay" },
{ key: "ml-IN", value: "Malayalam" },
{ key: "mt-MT", value: "Maltese" },
{ key: "mr-IN", value: "Marathi" },
{ key: "mn-MN", value: "Mongolian" },
{ key: "ne-NP", value: "Nepali" },
{ key: "se-NO", value: "Northern S?mi" },
{ key: "nb-NO", value: "Norwegian (bokmal)" },
{ key: "nn-NO", value: "Norwegian (nynorsk)" },
{ key: "ps-AF", value: "Pashto" },
{ key: "fa-IR", value: "Persian" },
{ key: "pl-PL", value: "Polish" },
{ key: "pt-BR", value: "Portuguese (Brazil)" },
{ key: "pt-PT", value: "Portuguese (Portugal)" },
{ key: "pa-IN", value: "Punjabi" },
{ key: "qu-PE", value: "Quechua" },
{ key: "ro-RO", value: "Romanian" },
{ key: "rm-CH", value: "Romansh" },
{ key: "ru-RU", value: "Russian" },
{ key: "sa-IN", value: "Sanskrit" },
{ key: "sr-RS", value: "Serbian" },
{ key: "zh-CN", value: "Simplified Chinese (China)" },
{ key: "sk-SK", value: "Slovak" },
{ key: "sl-SI", value: "Slovenian" },
{ key: "so-SO", value: "Somali" },
{ key: "es-LA", value: "Spanish" },
{ key: "es-CL", value: "Spanish (Chile)" },
{ key: "es-CO", value: "Spanish (Colombia)" },
{ key: "es-MX", value: "Spanish (Mexico)" },
{ key: "es-ES", value: "Spanish (Spain)" },
{ key: "es-VE", value: "Spanish (Venezuela)" },
{ key: "sw-KE", value: "Swahili" },
{ key: "sv-SE", value: "Swedish" },
{ key: "sy-SY", value: "Syriac" },
{ key: "tg-TJ", value: "Tajik" },
{ key: "ta-IN", value: "Tamil" },
{ key: "tt-RU", value: "Tatar" },
{ key: "te-IN", value: "Telugu" },
{ key: "th-TH", value: "Thai" },
{ key: "zh-HK", value: "Traditional Chinese (Hong Kong)" },
{ key: "zh-TW", value: "Traditional Chinese (Taiwan)" },
{ key: "tr-TR", value: "Turkish" },
{ key: "uk-UA", value: "Ukrainian" },
{ key: "ur-PK", value: "Urdu" },
{ key: "uz-UZ", value: "Uzbek" },
{ key: "vi-VN", value: "Vietnamese" },
{ key: "cy-GB", value: "Welsh" },
{ key: "xh-ZA", value: "Xhosa" },
{ key: "yi-DE", value: "Yiddish" },
{ key: "zu-ZA", value: "Zulu" }];


const select = document.querySelector("#locales");
const hud = document.querySelector("#hud");

const populateSelectBox = () =>
select.innerHTML = localeList.
map(({ key, value }) => `
      <option value="${key}">
        ${value}
      </option>
    `).
join("");


const updateHud = () => {
  const locale = select.value || "en-US";
  const now = new Date();
  hud.innerHTML = new Intl.DateTimeFormat(locale, {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric' }).
  format(now);
};


const init = () => {
  populateSelectBox();
  window.setInterval(updateHud, 1000);
};


init();