import { initializeApp } from "testing-extension-ui";
import App from './App.vue'
import Testing from './Testing.vue'
import options from './options.json'
initializeApp({
    drawer: App,
    testing: Testing
}, options)
