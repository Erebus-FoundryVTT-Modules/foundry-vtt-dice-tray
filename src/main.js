import App from "./App.svelte";

Hooks.on("renderChatLog", (app, html, data) => {
  html.find("#chat-form").after(`<div id="dnd5e-simple-dice-tray"></div>`);
  const target = html.find("#dnd5e-simple-dice-tray")[0];
  new App({ target });
});
