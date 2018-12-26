// ==UserScript==
// @name         Naver Music Player
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://playerui.music.naver.com
// @grant        none
// @require http://code.jquery.com/jquery-1.12.4.min.js
// ==/UserScript==

(function() {
    'use strict';
    var idol = ['exo', '뉴이스트', 'wanna', 'got7'];

    function isIdol(name) {
        var i = 0;
        for (i = 0; i < idol.length; i++) {
            if (name.indexOf(idol[i]) >= 0) {
                return true;
            }
        }
        return false;
    }

    function removeIdol(e) {
        var artists = $(".songs_item .artist");
        var i = 0;
        for (i = 0; i < artists.length; i++) {
            var each = artists[i];
            var name = each.innerText.toLowerCase();
            if (isIdol(name)) {
                $($(each).parent().parent()).find(".checkbox_input").click();
            }
        }
        $(".footer_delete").click();
    }

    // Your code here...
    $(".header_login").after("<div class='header_login remove_idol'><a href='#' style='border:1px solid; padding: 5px 5px 5px 5px'>remove idol</a></div>")
    $(".remove_idol").on("click", removeIdol);
})();
