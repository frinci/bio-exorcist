// 86acbd31cd7c09cf30acb66d2fbedc91daa48b86:1609910355.4438696
importScripts('https://web-sdk.urbanairship.com/notify/v1/ua-sdk.min.js')
uaSetup.worker(self, {
  defaultIcon: 'https://bio\u002Dexorcist.netlify.app/static/media/beetlejuiceLogo.cbbdf772.png',
  defaultTitle: 'Beetlejuice',
  defaultActionURL: 'https://bio\u002Dexorcist.netlify.app/',
  appKey: 'omzMcysgTXe5ihgOxHWwbw',
  token: 'MTpvbXpNY3lzZ1RYZTVpaGdPeEhXd2J3Om5WUkQxcEJNcW5ac3piT1VvMnhYV0ZEdU5qNlF2Nmx5SVNmQzlvWS1HREk',
  vapidPublicKey: 'BMbeJ1ehcdb-GsYBIB32YtAFKPxa9CNZIQDdLmZhH0kchB5PN_6kr61yGI9E3VnhLYG_Xpy_bpJ3p-57BnCu1qk=',
  workerUrl: '/push-worker.js'
})

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/push-worker.js').then(function(registration) {
        // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
        // registration failed :(
        console.log('ServiceWorker registration failed: ', err);
      });
  });
}