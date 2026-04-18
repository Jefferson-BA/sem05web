const BaseRepository = require("./baserepository");

class NotificationRepository extends BaseRepository {
  constructor() {
    super("notifications");
  }
}

module.exports = NotificationRepository;