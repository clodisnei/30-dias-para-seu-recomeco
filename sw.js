const CACHE='oqrm-30-dias-v4';
const CORE_ASSETS=[
  './','./index.html','./styles.css','./config.js','./media.js','./app.js',
  './manifest.webmanifest','./icons/icon.svg','./icons/icon-192.png',
  './icons/icon-512.png','./icons/apple-touch-icon.png'
];

self.addEventListener('install',event=>{
  event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(CORE_ASSETS)).then(()=>self.skipWaiting()));
});

self.addEventListener('activate',event=>{
  event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key!==CACHE).map(key=>caches.delete(key)))).then(()=>self.clients.claim()));
});

self.addEventListener('fetch',event=>{
  if(event.request.method!=='GET') return;
  const request=event.request;
  event.respondWith(
    caches.match(request).then(cached=>{
      if(cached) return cached;
      return fetch(request).then(response=>{
        if(response && response.ok){
          const copy=response.clone();
          caches.open(CACHE).then(cache=>cache.put(request,copy));
        }
        return response;
      }).catch(()=>{
        if(request.mode==='navigate') return caches.match('./index.html');
        return new Response('',{status:404,statusText:'Not Found'});
      });
    })
  );
});

self.addEventListener('notificationclick',event=>{
  event.notification.close();
  const target=event.notification.data?.url || './#home';
  event.waitUntil(clients.matchAll({type:'window',includeUncontrolled:true}).then(list=>{
    for(const client of list){
      if('focus' in client){client.navigate(target);return client.focus();}
    }
    return clients.openWindow?clients.openWindow(target):undefined;
  }));
});
