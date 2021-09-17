
import Vue from 'vue'

import '../imports/ui/plugins'

import App from './view/App.vue'

//quasar
import "quasar/dist/quasar.min.css";
import Quasar from "quasar/dist/quasar.esm.js";
Vue.use(Quasar, {});

//vue router
import VueRouter from "vue-router";
Vue.use(VueRouter);
import router from "./router";

// i18n
import VueI18n from "vue-i18n";
Vue.use(VueI18n);
import { languages } from "../lib/languages";
const messages = Object.assign(languages);
const langs = ["en", "fr"];
let defaultLocale = null;
//get the navigator language
let navLang = "en";
navigator.language
if(navigator.language.includes("-"))
{
  let tab = navigator.language.split("-");
  navLang = tab[0];
}
else 
{
  navLang = navigator.language
}

if (langs.includes(navLang)) {// check if nav lang is available
  defaultLocale = navLang;
} else {
  defaultLocale = "en";
}

const i18n = new VueI18n({
  locale: defaultLocale,
  fallbackLocale: "en",
  messages,
});

//Meteor startup
Meteor.startup(() => {
  new Vue({
    router,
    i18n,
    el: '#app',
    ...App,
  })
})
