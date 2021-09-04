import App from "./App.svelte";

// $("#chat-form").after(`<div id="dnd5e-simple-dice-tray"></div>`);
// const target = $("#dnd5e-simple-dice-tray")[0];
// new App({ target });

Hooks.on("renderChatLog", (app, html, data) => {
  html.find("#chat-form").after(`<div id="dnd5e-simple-dice-tray"></div>`);
  const target = html.find("#dnd5e-simple-dice-tray")[0];
  new App({ target });
});

// class MyApp extends Application {
//   activateListeners(html) {
//     html.find("#chat-form").after(`<div id="dnd5e-simple-dice-tray"></div>`);
//     const target = html.find("#dnd5e-simple-dice-tray")[0];
//     this.component = new App({
//       target,
//       props: {
//         name: "Foundry",
//       },
//     });
//   }
// }

// Hooks.on("ready", () => {
//   const app = new MyApp();
//   app.render();
// });
