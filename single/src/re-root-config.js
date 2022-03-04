import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  activeWhen: (location) => location.pathname === '/',
});

registerApplication({
  name: "@re/react-single",
  app: () =>
    System.import(
      "@re/react-single"
    ),
  activeWhen: (location) => location.pathname === '/react-single',
});

registerApplication({
  name: "@re/react-multiples",
  app: () =>
    System.import(
      "@re/react-multiples"
    ),
  activeWhen: ['/react-multiples'],
});

registerApplication({
  name: "@re/react-parcel",
  app: () =>
    System.import(
      "@re/react-parcel"
    ),
  activeWhen: (location) => location.pathname === '/react-parcel',
});

registerApplication({
  name: "@re/react-route",
  app: () =>
    System.import(
      "@re/react-route"
    ),
  activeWhen: (location) => location.pathname === '/react-route',
});

start({
  urlRerouteOnly: true,
});
