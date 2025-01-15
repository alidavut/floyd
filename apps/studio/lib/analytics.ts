export function triggerEvent(event) {
  window['dataLayer'] = window['dataLayer'] || [];
  window['dataLayer'].push({ event });
}
