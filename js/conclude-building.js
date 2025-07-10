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
const REFRESH_RATE = 3500;
const delay = (ms) => new Promise((res) => setTimeout(res, ms));
async function awaitAndReload() {
    await delay(REFRESH_RATE);
    window.location.reload();
}
;
(async () => {
    var _a;
    const buttons = document.querySelectorAll('.btn-instant-free');
    if (buttons.length === 0) {
        await awaitAndReload();
        return;
    }
    const style = window.getComputedStyle(buttons[0]);
    if (buttons[0] instanceof HTMLButtonElement) {
        if ((style === null || style === void 0 ? void 0 : style.display) !== 'none') {
            (_a = buttons[0]) === null || _a === void 0 ? void 0 : _a.click();
        }
    }
    await awaitAndReload();
})();
