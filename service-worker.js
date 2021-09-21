importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.1.1/workbox-sw.js');

workbox.routing.registerRoute(
	/*create a register route and save all the css and html files along with js
	in the cache*/
	new RegExp('style.css'),
	workbox.strategies.cacheFirst({
		cacheName: 'css-cache',
		plugins: [
			new workbox.expiration.Plugin({
				maxEntries: 20,
				maxAgeSeconds: 30 * 24 * 60 * 60,
			}),
		],
	})
	,new RegExp('index.html'),
	workbox.strategies.cacheFirst({
		cacheName: 'css-cache',
		plugins: [
			new workbox.expiration.Plugin({
				maxEntries: 20,
				maxAgeSeconds: 30 * 24 * 60 * 60,
			}),
		],
	})
	, new RegExp("main.js"),
	workbox.strategies.cacheFirst({
		cacheName: 'js-cache',
		plugins: [
			new workbox.expiration.Plugin({
				maxEntries: 20,
				maxAgeSeconds: 30 * 24 * 60 * 60,
				}),
			],
		})
);
