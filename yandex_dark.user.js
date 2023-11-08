// ==UserScript==
// @name Yandex Dark
// @namespace Yandex Dark
// @version 0.0.1
// @description Yandex Dark Theme
// @author Nicoskin
// @grant none
// @run-at document-start
// @include https://yandex.ru/search/*
// @run-at document-end
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
  --color-filmbottom: #363e44;
  --color-mg-surface-primary: #1a1f21 !important;
  --color-mg-typo-primary: #ddd !important;
  --color-mg-tint-superlight: #717171 !important;
  --id-color-text-primary: #c5c5c5 !important;
    --id-color-text-secondary: #b3b8dd !important;
}

/*#9849ff
#7325bb*/
  var(--color-hyperlin2)

html{
    background: var(--color-fon);
}
body{
    color: var(--color-text);
    background: var(--color-fon)
}
.b-page__body {
    background: var(--color-fon)
}
.Link_theme_normal {
    color: var(--color-hyperlin2) !important;
}
link link_theme_normal i-bem link_js_inited {
    color: var(--color-hyperlink) !important;
}
.navigation {
    background-color: var(--color-fon) !important;
}
.serp-item {
    color: var(--color-graytext) !important ;
}
.Link_theme_outer {
    color: var(--color-greenlink) !important;
}
.link_theme_outer {
    color: var(--color-greenlink2) !important;
}
.b-page__body {
    color: var(--color-text);
}
.fact-layout {
    background-color: var(--color-fon) !important;
}
.serp-header__main {
    background-color: var(--color-fon);
}
.user-account {
    color: var(--color-text) !important;
}
.home-logo__default {
    background: url(//yastatic.net/s3/home-static/skins/_/HgFKh84XkTuwAu_kCRsSzc3UaLw.svg);
}
.logo_name_yslogo-ru-86x35 {
    width: 86px;
    height: 35px;
    background-size: 100px 80px;
    background-image: url(//yastatic.net/s3/home-static/skins/_/HgFKh84XkTuwAu_kCRsSzc3UaLw.svg);
    background-position: -8px -22px;
}
.market-cart__icon {
    background: url(//yastatic.net/s3/home-static/skins/_/deoJnU49C43wIkxlR7FCDLZMBWM.svg) no-repeat center 8px;
    opacity: .3;
}
.input_theme_websearch2 {
    background: var(--color-fon) !important;
}
.input__control {
    color: var(--color-white);
}
.input__clear svg{
    fill: var(--color-text);;
}
.Article-Code {
    background-color: var(--color-darkgrey) !important;
}
.input_theme_websearch2 .input__clear {
    background: var(--color-white);
    -webkit-mask-image: url(//yastatic.net/s3/web4static/_/v2/f0vM6kFiHLugimNeqhQEGoZgpUE.svg);
}
.market-cart__icon svg {
    fill: var(--color-white);
}
.input__settings {
    background-color: var(--color-greyfill);
}
.input__voice-search, .input_show-mic_yes .serp-header__voice-search-container {
     background-color: var(--color-greyfill);
}
.link link_theme_normal i-bem link_js_inited{
    color: var(--color-hyperlink) !important;
}
.fact-layout link link_theme_normal i-bem link_js_inited{
    color: var(--color-hyperlin2);
}
.related__button {
    color: var(--color-relatedbut2) !important;
    background-color: var(--color-relatedbut) !important;
}
.fact-recommendations .related__button.link{
    color: var(--color-relatedbut2) !important;
}
.navigation .navigation__item .service__url {
    color: var(--color-navigation) !important;
}
.link_theme_normal {
    color: var(--color-hyperlin2) !important;
}
.serp-footer .serp-footer__search-settings .link {
    color: var(--color-white) !important;
}
.competitors__link:first-child::after {
     background: var(--color-white) !important;
    -webkit-mask-image: url(//yastatic.net/s3/web4static/_/v2/mAZ1NJ68edXBADk5YWKr0SBksds.svg);
}
.serp-footer__search-settings .serp-footer__region .link:before {
    background: var(--color-white) !important;
    -webkit-mask-image: url(//yastatic.net/s3/web4static/_/v2/YrdRYJtxrN0iCxb9--XKAPulElQ.svg);
}
.serp-footer__search-settings .serp-footer__settings:before {
    background: var(--color-white) !important;
    -webkit-mask-image: url(//yastatic.net/s3/web4static/_/v2/5md8rHq00bU_3X0rT1f8abDjuhw.svg);
}
.serp-footer__search-settings .serp-footer__help:before {
    background: var(--color-white) !important;
    -webkit-mask-image: url(//yastatic.net/s3/web4static/_/v2/DTXjfnqkRSBphr5B2fVCqhEGnYg.svg);
}
.serp-footer__search-settings .serp-footer__feedback:before {
    background: var(--color-white) !important;
    -webkit-mask-image: url(//yastatic.net/s3/web4static/_/v2/wuPQINzhtCTPanQsqlz0Uxts0o8.svg);
}
.serp-footer__search-settings .serp-footer__family-mode_filter_moderate::before {
    background: var(--color-white) !important;
    -webkit-mask-image: url(//yastatic.net/s3/web4static/_/v2/jbMOQgSRtY_LttuVlU5Tu0Ge2Ng.svg);
}
.serp-footer__search-settings .serp-footer__region .link::before, .serp-footer__search-settings .serp-footer__lang::before, .serp-footer__search-settings .serp-footer__link::before {
    width: 20px !important;
    height: 20px !important;
}
.related__link::before {
    background: var(--color-grey2) !important;
    -webkit-mask-image: url(//yastatic.net/s3/web4static/_/v2/c7NR2XAPjFA67VP9SWXIKDduHeM.svg),url(//yastatic.net/s3/web4static/_/v2/XCvHaYlgmiodXQUflEe60fF7YqA.svg);
    width: 16px !important;
    height: 16px !important;
    top: 8px !important;
}
.pager__item {
    color: var(--color-grey3) !important;
}
.related__above_appear_yes .related__button {
    color: var(--color-grey) !important;
}
.fact__answer:first-child, .fact__description:first-child, .fact__path:first-child, .fact__extra:first-child {
    color: var(--color-grey);
}
.mini-suggest__popup_theme_stretch .mini-suggest__popup-content {
    background-color: var(--color-extrasearch);
}
.mini-suggest__popup_theme_stretch {
    background-color: var(--color-extrasearch);
}
.mini-suggest__popup_theme_stretch::before, .mini-suggest__popup_theme_stretch::after {
    background-color: var(--color-extrasearch) !important;
}
.mini-suggest__item_personal_yes {
    color: var(--color-selected) !important;
}
.mini-suggest__delete {
    background: var(--color-grey2) !important;
    -webkit-mask-image: url(//yastatic.net/s3/web4static/_/v2/WP9R-NwTGJVVR5AiZEKm8smhNqM.svg);
}
.mini-suggest__arrow {
    background: var(--color-grey2) !important;
    -webkit-mask-image: url(//yastatic.net/s3/web4static/_/v2/1VPXEK1EuSvY_re_6QZM_DGwaNo.svg);
    width: 16px !important;
    height: 16px !important;
    top: 8px !important;
    right: 8px !important;
}
.Extralinks {
    background: var(--color-text) !important;
    -webkit-mask-image: url(//yastatic.net/s3/web4static/_/v2/static/media/MoreHorizontal_16_black.0967e1a8.svg);
}
.object-footer_in-card_yes {
    background: var(--color-fon) !important;
}
.showcase__item_middle-border[class]::before {
    background: var(--color-buttonvideo) !important;
}
.button2_theme_fly::before {
    background-color: var(--color-buttonvideo) !important;
}
.button2_theme_fly {
    color: var(--color-relatedbut2) !important;
}
.music-playlist__track-link {
    color: var(--color-grey) !important;
}
.Theme_color_yandex-default .Button2_view_clear {
    color: var(--color-grey) !important;
}
.OrganicMeta .Rating {
    color: var(--color-graytext) !important;
}
.Rating-Value {
    font-weight: 700;
    color: var(--color-graytext) !important;
}
.Textarea_theme_normal .Textarea-Control {
    color: var(--color-white);
}
.Translate {
    color: var(--color-white) !important;
    background-color: var(--color-fon) !important;
    box-shadow: 0 0 0 1px rgb(255 255 255 / 7%), 0 2px 15px -4px rgb(255 255 255 / 57%) !important;
}
.Translate-Select .Button2_size_m .Button2-Icon_side_right~.Button2-Text {
    color: var(--color-translater2) !important;
}
.showcase__item-text {
    color: var(--color-graytext) ;
}
.object-footer_in-card_yes {
    border-top: 1px solid rgb(255 255 255 / 10%) !important;
}

/*.fact-layout {
    box-shadow: 0 0 6px 0 rgb(255 255 255 / 15%), 0 4px 10px 0 rgb(255 255 255 / 8%) !important;
}*/
.showcase__item-text {
    color: var(--color-graytext) !important;
}
.Button2_view_link-text {
    color: var(--color-hyperlin2) !important;
}
.serp-title.serp-title_black_yes, .serp-title.serp-title_black_yes .link, .serp-title.serp-title_black_yes .link:visited {
    color: var(--color-grey2) !important;
}
.Textarea_theme_normal .Textarea-Control {
    color: var(--color-white) !important;
}
.Translate-Values {
    max-width: 60%;
    color: var(--color-hyperlin2);
}
.Review_view_preview-default {
    display: flex;
    background-color: var(--color-darkgrey) !important;
}
.EntitySites.Theme_entity-sites .EntitySites-Button, .EntitySites.Theme_entity-sites .EntitySites-RestButton {
    background: var(--color-darkgrey) !important;
    border-radius: 13px;
}
.rating__value {
    color: var(--color-white) !important;
}
.Translate-Icon, .Translate-Arrow {
    background: var(--color-grey2) !important;
    -webkit-mask-image: url(//yastatic.net/s3/web4static/_/v2/static/media/Translate@desktop.af26adc7.svg) !important;
}
.Translate-Select .Icon.Icon_hasGlyph {
    color: var(--color-text) !important;
}
.Article-CopyCodeBackground {
    background: linear-gradient(90deg,rgb(45 47 47 / 0%) 0,var(--color-relatedbut) 50%) !important;
}
.scroller_arrows-theme_shadow.scroller_arrows-theme-color_white .scroller__arrow-shadow_direction_right {
    background-image: linear-gradient(-270deg,rgba(255,255,255,0) 0,var(--color-darkgrey) 100%) !important;
}
.scroller__arrow::before {
    background-color: var(--color-graytext) !important;
}
.Translate-Clear {
    -webkit-mask-position-x: -84px !important;
    -webkit-mask-position-y: 2px !important;
}
.Translate-Speaker {
    -webkit-mask-position-x: -56px !important;
    -webkit-mask-position-y: 4px !important;
}
.Translate-Voice {
    -webkit-mask-position-x: -27px !important;
    -webkit-mask-position-y: 5px !important;
}
.Translate-SourceIcon_type_book {
    -webkit-mask-position-x: -180px !important;
}
.Translate-Arrow {
    -webkit-mask-position-x: -270px !important;
}
.Translate-Button {
    background-color: var(--color-translater2);
}
.organic__advLabel {
    color: var(--color-reclama) !important;
}
.user2__menu-footer {
    background-color: var(--color-fon) !important;
}
.user2__popup.light-popup.light-popup_visible_yes {
    background: var(--color-fon) !important;
}
.user2__menu .menu__group {
    border-bottom: 1px solid var(--color-extrasearch) !important;
}
.user2__menu .menu__item_type_link {
    color: var(--color-grey) !important;
}
.user2__menu-footer .user2__footer-link.button2 {
    color: var(--color-grey) !important;
}
.rating-dynamic__hoverable .rating-dynamic_dislike:not([data-value='-1'])::before {
    background: var(--color-darkgrey) !important;
}
.rating-dynamic__dislike::before {
    top: 1px !important;
    margin-right: 6px !important;
    background: var(--color-grey2) !important;
    -webkit-mask-image: url(//yastatic.net/s3/web4static/_/v2/wyq2gJzSa1E1d_5GvsHRGt3nvZI.svg) !important;
}
.user2__menu .user2__menu-item.user2__menu-item_plus-icon_yes {
    color: var(--color-grey) !important;
}
.rating-dynamic__dislike_theme_black::after {
    color: var(--color-grey) !important;
}
.OrganicReviews-Rating {
    color: var(--color-grey2) !important;
}
.mini-suggest__item_selected_yes {
    background-color: var(--color-buttonvideo) !important;
}
.menu__item_hovered_yes {
    background-color: var(--color-translater) !important;
}
.online-cinemas__price {
    color: var(--color-grey2) !important;
}
.desktop-card::before {
    border-radius: 12px !important;
    background: var(--color-fon) !important;
    background-color: var(--color-fon) !important;
    box-shadow: 0px 2px 10px 0px #b4b4b459 !important;
}
.b-page[class] {
    background-color: var(--color-fon) !important;
}
.mini-suggest__popup_theme_tile .mini-suggest__popup-content {
    background-color: var(--color-extrasearch) !important;
}

.body_search_yes .mini-suggest_overlay_tile .input_theme_websearch2 {
    border-color: #ffcc00 !important;
    border-radius: 10px 5px 5px 10px !important;
}
.body_search_yes .serp-header:not(.serp-header_kids) .mini-suggest_overlay_tile .search2__input::after {
    border-color: var(--color-relatedbut) !important;
}
.mini-suggest_overlay_tile .mini-suggest__button-fill {
    background-color: #ffcc00 !important;
}
.link_theme_black-text {
    color: var(--color-relatedbut2) !important;
}
.favicon_page_0 .favicon__icon, .Favicon-Page0.Favicon-Icon {
    box-shadow: 0 0 8px 1px #b4b4b454 !important;
}
.LinkMore_mode_arrow-line .LinkMore-ArrowLine {
    background: var(--color-hyperlin2) !important;
    -webkit-mask-image: url(//yastatic.net/s3/web4static/_/v2/static/media/ArrowLongForward_16_link@desktop.284fb789.svg),url(//yastatic.net/s3/web4static/_/v2/static/media/ArrowLongForward_16_link-active.9b2b0dfb.svg);
}
.Link_theme_blackText {
    color: var(--color-grey2) !important;
}
.ratings-list__col-title .icon_type_help {
    filter: invert(0.6);
}
.EntityCarousel_theme_dark {
    background-color: var(--color-film) !important;
}
.Scroller_hasArrows::after, .Scroller_hasArrows::before {
    background-color: rgb(24 42 46 / 28%) !important;
}
.Scroller_arrowsTheme_shadow .Scroller-ArrowShadow_direction_left {
    background-image: linear-gradient(-270deg, var(--color-film) 0,rgba(36,32,30,0) 100%) !important;
}
.Scroller_arrowsTheme_shadow .Scroller-ArrowShadow_direction_right {
    background-image: linear-gradient(-270deg,rgba(36,32,30,0) 0, var(--color-film) 100%) !important;
}
.Theme_color_yandex-inverse .Button2_view_default::before {
    background-color: var(--color-filmbottom) !important;
}
.EntityCarousel_theme_dark .EntityCarousel-MoreButton {
    background-color: var(--color-filmbottom) !important;
}
.Meta .Rating {
    color: var(--color-greyfill) !important;
}
.Rating-Rest {
    filter: invert(0.6);
}
.Rating-Half {
    filter: invert(0.8);
}
.label_color_white {
    border: 1px solid var(--color-translater) !important;
    background: var(--color-extrasearch) !important;
}
.content__right_cols_10 .entity-search__film-header_size_xs .entity-search__title, .content__right_cols_8 .entity-search__film-header_size_xs .entity-search__title, .content__right_cols_6 .entity-search__film-header_size_xs .entity-search__title {
    color: var(--color-grey) !important;
}
.mini-suggest__popup_theme_tile {
    margin-top: 0 !important;
    border-radius: 3px;
}
.mini-suggest__popup_theme_tile .mini-suggest__popup-content {
    border-radius: 7px !important;
}
.mini-suggest__overlay {
    background-color: rgb(26 31 33 / 40%) !important;
}
.content__right_cols_8 .entity-search__title {
    color: var(--color-translater2) !important;
}
.typo_line_m.typo_text_xl {
    color: var(--color-translater2) !important;
}
.RelatedAbove.RelatedAbove .Related-Button[class] {
    background-color: var(--color-graytext) !important;
}
.label_color_blue {
    color: #000 !important;
    background: #7979a2 !important;
}
.Scroller_arrowsTheme_easeShadow .Scroller-ArrowShadow_direction_right {
    background-image: linear-gradient(-270deg,rgba(255,255,255,0) 0,var(--color-graytext) 100%) !important;
}
.ArrowButton::before {
    background-color: #9c9c9c !important;
}
.Scroller_arrowsTheme_easeShadow .Scroller-ArrowShadow_direction_left {
    background-image: linear-gradient(-270deg,var(--color-graytext) 0,rgba(255,255,255,0) 100%) !important;
}
.Review_view_preview-default {
    display: flex;
    border-radius: 17px;
}
.EntityCarousel_theme_gray .Scroller-Wrap {
    background-color: var(--color-extrasearch);
}
.EntityCarousel_theme_gray .Showcase-Item .Showcase-Title {
    color: var(--color-text) !important;
}
.EntityCarousel_theme_gray {
    background-color: var(--color-extrasearch) !important;
    box-shadow: 0px 2px 5px 0px #b4b4b459 !important;
}
.ReviewAspect_view_tall .ReviewAspect-Name {
    color: #888 !important;
}
.ProductCard-Price .Link {
    color: #fff !important;
}
.Link_theme_black {
    color: #fff !important;
}
.ProductCard-Wrapper::after {
    box-shadow: 0 0 0 1px rgb(212 212 212 / 10%), 0 2px 7px -4px rgb(13 35 67 / 40%) !important;
}
.Stocks[class] {
    box-shadow: 0px 2px 10px 0px #b4b4b459 !important;
    background: #1a1f21 !important;
}
.StocksHeader-Title {
    color: var(--color-hyperlin2) !important;
}
.StocksInfo-Value {
    color: var(--color-text) !important;
}
.TabsMenu_theme_navigation .TabsMenu-Tab_active .Link {
    color: #cbd8f6 !important;
}
.StocksFooter[class] {
    background: #1a1f21 !important;
}

.StocksFooter {
    border-top: 1px solid rgb(255 255 255 / 10%) !important;

}
.StocksCard {
    background-color: #282e31 !important;
}
.StocksCard-Top {
    color: #ddd !important;
}
.StocksCard-Delta-neg {
    color: #ff3b3b !important;
}
.StocksCard-Delta-neg::before {
    border-color: #ff3b3b transparent transparent transparent !important;
}
.Typo_line_m.Typo_text_l {
    /*color: var(--color-translater2) !important;*/
    color: var(--color-hyperlin2) !important;
}
.map2, .map2__container, .map2__link {
    border-radius: 10px;
}
.Stocks-Chart {
    filter: invert(0.84) hue-rotate(187deg);
    border-radius: 10px;
}
.TabsMenu_theme_navigation .TabsMenu-Tab_active::before {
    height: 4px !important;
    border-radius: 10px !important;
    background-color: #cbd8f6 !important;
}
.weather-forecast__tiles {
    box-shadow: 0 0 5px 2px rgb(212 212 212 / 12%);
}
.weather-forecast__tile {
    border-right: solid 1px #393f41 !important;
    background-color: #1a1f21 !important;
}
.weather-forecast__tiles {
    background-color: #2b2f31 !important;
    border-radius: 5px !important;
    box-shadow: 0 0 5px 2px rgb(212 212 212 / 12%) !important;
}
.searchengines__link:first-child::after {
    filter: invert(1);
}

body .calculator__screen {
    border-bottom: 1px solid #838282 !important;
    background: #1a1f21 !important;
}
body .calculator__btn.button2.button2_type_advanced, body .calculator__btn.button2.button2_type_advanced::before {
    background: #1a1f21 !important;
}
body .calculator__btn.button2 .button2__text {
    color: #ddd !important;
}
body .calculator__btn.button2.button2_type_casual, body .calculator__btn.button2.button2_type_casual::before {
    background: #1a1f21 !important;
}
body .calculator__btn.button2.button2_type_primary, body .calculator__btn.button2.button2_type_primary::before {
    background: #765f05 !important;
}
body .calculator .input__control {
    background: #1a1f21;
}
.calculator__switcher .radio-button__radio_pressed_yes, .calculator__switcher .radio-button__radio_checked_yes {
    color: #fff !important;
    border-bottom: 2px solid #fff !important;
    border-radius: 0;
}
.calculator__wrapper[class] {
    width: unset;
    background: #666 !important;
}
.ConverterTextinput.Textinput .Textinput-Control[class] {
    color: #ddd !important;
}
.ConverterSelect .Select2-Button .Button2-Text {
    color: #ddd !important;
}
.Converter-Inputs {
    border-radius: 8px;
    /*box-shadow: 0 0 5px 2px rgb(212 212 212 / 8%) !important;*/
}
.ConverterInput {
    border: 2px solid rgb(91 91 91) !important;
    border-radius: 8px !important;
}
.Icon_glyph_carets-v svg {
    filter: invert(0.6);
}
.Converter-Chart {
    border-radius: 10px;
    /*width: 556px;*/
}
.Converter-Chart {
    filter: invert(0.84) hue-rotate(187deg);
}
.ConverterSelect .Select2-Button {
    border-left: 1px solid rgb(192 192 192 / 45%) !important;
}
.highcharts{
    border-radius: 10px;
}
.StocksChart {
    margin: 0 -8px !important;
}
.TranslatedSnippet-Footer .OrganicTitle-LinkText {
    color: #5e5ed9 !important;
}
.OrgContacts-Item>.Icon {
    filter: invert(0.6);
}
.OrgHeader-Title {
    color: #bbb;
}
.OrgSchedule-IconBlack {
    filter: invert(1);
}
.bcard_size_xs .bcard__title.serp-title {
    color: #5e5ed9;
}
.ObjectFooter.ObjectFooter_theme_card[class] {
    background: #18181e !important;
}
.post-indexes__digits {
    position: relative;
    float: left;
    cursor: pointer;
    filter: invert(0.9);
}
.input_theme_normal .input__box {
    border-radius: 5px;
}
.Popup {
    background: #18181e !important;
}
.Button_view_clear {
    color: #ababab !important;
}
.ListItem {
    color: #cecece !important;
}
.Text {
    color: #cecece !important;
}
.Header .Header-LogoButton {
    filter: invert(1);
}
.ListItem .Text_typography_primary, .ListItem_disabled .Text {
    color: #070707 !important;
}
.Counter {
    background: #cecece !important;
}
.serp-header__button svg {
    filter: invert(0) contrast(10) sepia(1);
}
.Popup {
    background: #171719;
}

.main__content .serp-item_card:not(:last-of-type) {
    box-shadow: 0 0 10px rgb(255 255 255 / 14%);
}
.HeaderDesktop {
    background: #171719;
}
.main {

    background: #111112;
}
.main__content .serp-item_card:not(:last-of-type) {
    background: hsl(240 3% 9% / 1);
}
.content__left .Favicon {

    box-shadow: 0 0 15px rgb(255 255 255 / 10%);
}
.Warning-Item:last-child {
    margin-right: 0;
    color: red;
}
.Warning_type_roskomnadzor::before {
    border-top: 1px solid rgb(255 0 0 / 30%);
}
.Path + .jyjNOVZuzg {
    color: #cd1f1f;
}
.serp-item_card {

    box-shadow: 0 0 20px rgb(255 255 255 / 18%) !important;
}
.main {
    background: var(--color-fon)  !important;
}
.main__content .serp-item_card:not(:last-of-type) {
    background-color: var(--color-fon) !important;
}
.HeaderDesktop {
    background: var(--color-fon) !important;
}
.serp-item_card {

    background-color: var(--color-fon) !important;
}
.i-ua_skin_dark .HeaderDesktopForm-InputWrapper {
    background: var(--color-fon) !important;
}

#131316
`;

if (typeof GM_addStyle !== "undefined") {
  GM_addStyle(css);
} else {
  let styleNode = document.createElement("style");
  styleNode.appendChild(document.createTextNode(css));
  (document.querySelector("head") || document.documentElement).appendChild(styleNode);
}
})();
// ломается при малой ширене(только лого яндекса)



