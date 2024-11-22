// ==UserScript==
// @name         Yandex Dark
// @namespace    Yandex Dark
// @version      0.0.4
// @description  Yandex Dark Theme
// @author       Nicoskin
// @grant        none
// @run-at       document-start
// @match        https://yandex.ru/search/*
// @match        https://ya.ru/search/*
// ==/UserScript==

(function() {
    let css = `
    html {
        background: var(--color-fon);
    }
    body {
        color: var(--color-text);
        background: var(--color-fon);
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


(function() {
    'use strict';

    // Функция для добавления тени к блокам
    function addShadowToBlocks() {
        // Находим все элементы с нужными атрибутами
        const selectors = [
            'li[data-cid]', // Блоки с data-cid от 0 до 20
            'div[data-cid]' // Блок с ролью complementary
        ];

        // Находим все элементы по указанным селекторам
        const blocks = document.querySelectorAll(selectors.join(','));


        blocks.forEach(block => {
            // Проверяем, чтобы тень не добавлялась повторно
            if (!block.dataset.shadowAdded) {
                block.style.boxShadow = '0px 0px 9px 0 rgb(255 255 255 / 16%)';
                block.dataset.shadowAdded = "true"; // Помечаем, что тень уже добавлена
            }
        });
    }

    // Запускаем функцию после загрузки страницы
    window.addEventListener('load', addShadowToBlocks);

    // Следим за изменениями в DOM, чтобы обработать динамически добавленные элементы
    const observer = new MutationObserver(addShadowToBlocks);
    observer.observe(document.body, { childList: true, subtree: true });
})();