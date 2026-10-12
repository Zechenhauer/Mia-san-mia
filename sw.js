// Service Worker für die Push-Benachrichtigungen der Bayern-App
self.addEventListener('push', function(event) {
    let data = { title: '🔴⚫ FC Bayern München', body: 'Es gibt ein neues Update!' };
    if (event.data) {
        try {
            data = event.data.json();
        } catch (e) {
            data.body = event.data.text();
        }
    }

    const options = {
        body: data.body,
        icon: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/FC_Bayern_München_Logo_%282002–2024%29.svg',
        badge: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/FC_Bayern_München_Logo_%282002–2024%29.svg',
        vibrate: [200, 100, 200]
    };

    event.waitUntil(
        self.registration.showNotification(data.title, options)
    );
});

self.addEventListener('notificationclick', function(event) {
    event.notification.close();
    event.waitUntil(
        clients.openWindow('./')
    );
});
