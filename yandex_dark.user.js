// ==UserScript==
// @name         Yandex Dark
// @namespace    Yandex Dark
// @version      0.0.4
// @description  Yandex Dark Theme
// @author       Nicoskin
// @grant        none
// @run-at       document-start
// @match        https://yandex.ru/search/*
// ==/UserScript==

(function() {
    let css = `
    :root {
      --color-fon:         #18181C;
      --color-text:        #ddd;
      --color-white:       #fff;
      --color-graytext:    #878787;
      --color-hyperlink:   #04b;
      --color-hyperlin2:   #5e5ed9;
      --color-selected:    #9849ff;
      --color-greenlink:   #048604;
      --color-greenlink2:  #070;
      --color-greyfill:    #5e6263;
      --color-extrasearch: #282e31;
      --color-darkgrey:    #2d2f2f;
      --color-translater:  #3f3f3f;
      --color-translater2: #c5c5c5;
      --color-buttonvideo: #696969;
      --color-relatedbut:  #424242;
      --color-relatedbut2: #c9c9c9;
      --color-navigation:  #999;
      --color-grey:        #b2b2b2;
      --color-grey2:       #7c7c7c;
      --color-grey3:       #404040;
      --color-reclama:     #ff5c5c;
      --color-film:        #242a2e;
      --color-filmbottom:  #363e44;
      --color-mg-surface-primary: #1a1f21 !important;
      --color-mg-typo-primary: #ddd !important;
      --color-mg-tint-superlight: #717171 !important;
      --id-color-text-primary: #c5c5c5 !important;
      --id-color-text-secondary: #b3b8dd !important;
    }

    html {
        background: var(--color-fon);
    }
    body {
        color: var(--color-text);
        background: var(--color-fon);
    }
    .ot2Lic6IvpN3S_card {
        box-shadow: 0px 0px 9px 0 rgb(255 255 255 / 16%) !important;
    }
    .content__left .Favicon_outer {
        box-shadow: 0px 0px 12px 0 rgb(255 255 255 / 36%);
    }
    .Path-Item {
        color: #40ab40 !important;
    }
    .main, .HeaderDesktop {
        background-color: #1a1a1e !important;
    }
    `;

    // Вставка стилей в head
    let styleNode = document.createElement("style");
    styleNode.textContent = css;
    (document.head || document.documentElement).appendChild(styleNode);
})();
