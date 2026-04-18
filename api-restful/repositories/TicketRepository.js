const BaseRepository = require("./baserepository");

class TicketRepository extends BaseRepository {
  constructor() {
    super("tickets");
  }
}

module.exports = TicketRepository;