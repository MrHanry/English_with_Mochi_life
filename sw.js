// Service Worker xử lý sự kiện khi người dùng bấm vào thông báo trên điện thoại
self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  event.waitUntil(
    clients.openWindow('/')
  );
});
