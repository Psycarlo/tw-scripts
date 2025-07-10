"use strict";
// ==UserScript==
// @name         PsyScripts - Conclude Building
// @namespace    http://tampermonkey.net/
// @version      2025-07-10
// @description  Conclude the buildings with 3 minutes left
// @author       Psycarlo
// @match        https://*.tribalwars.com.pt/game.php?village=*&screen=main
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const REFRESH_RATE = 3500;
const delay = (ms) => new Promise((res) => setTimeout(res, ms));
(() => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const buttons = document.querySelectorAll('.btn-instant-free');
    const style = window.getComputedStyle(buttons[0]);
    if (buttons[0] instanceof HTMLButtonElement) {
        if ((style === null || style === void 0 ? void 0 : style.display) !== 'none') {
            (_a = buttons[0]) === null || _a === void 0 ? void 0 : _a.click();
        }
    }
    yield delay(REFRESH_RATE);
    window.location.reload();
}))();
