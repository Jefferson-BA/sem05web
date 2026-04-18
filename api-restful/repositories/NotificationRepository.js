class NotificationRepository extends BaseRepository {
  constructor() {
    super("notifications");
  }

  findByTicketId(ticketId) {
    const notifications = this.findAll(); // método heredado
    return notifications.filter(n => n.ticketId === ticketId);
  }
}

module.exports = NotificationRepository;