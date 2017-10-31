console.log('service worker')

const filesToCache = [
  '/index.html'
]

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request).then((fetched) => {
        return caches.open('dynamic-cache').then((cache) => {
          cache.put(event.request, fetched.clone())
          return fetched
        })
      })
    }).catch(() => {
      return caches.match('/index.html')
    })
  )
})

self.addEventListener('install', (event) => {
  self.skipWaiting()
  event.waitUntil(
    caches.open('offline-cache')
      .then((cache) => {
        cache.addAll(filesToCache)
      })
  )
})
