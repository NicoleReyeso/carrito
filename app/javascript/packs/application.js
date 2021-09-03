// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

Rails.start()
Turbolinks.start()
ActiveStorage.start()

// window.addEventListener("load", () => {
//     const links = document.querySelectorAll("a[data-remote]");
//     links.forEach((element) => {
//         element.addEventListener("ajax:success", () => {
//             alert("The article was deleted.");
//         });
//     });
// });