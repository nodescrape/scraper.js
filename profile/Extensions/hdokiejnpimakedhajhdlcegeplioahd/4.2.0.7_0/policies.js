var Policies=function(){function e(e){var o,n=g_prefoverrides;switch(e){case"showcredmon":o=bg.get("g_showcredmon");break;default:o=n&&n[e]}return"boolean"==typeof o&&(o=o?"1":"0"),o}function o(){return g_loglogins&&4==(4&g_loglogins)}function n(){return g_loglogins&&8==(8&g_loglogins)}function r(){return g_loglogins&&2==(2&g_loglogins)}function g(){return e("savesitestopersonal")}function s(){return void 0===g_prefoverrides.show_notes||!!Number(g_prefoverrides.show_notes)}return{logNameEnabled:o,logUserNameEnabled:n,logUrlEnabled:r,getSaveSiteToPersonal:g,showSecureNotes:s}}();