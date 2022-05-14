import {MessagesRepository} from "./messages.repository";

export class MessagesService {
  messageRepo: MessagesRepository;

  constructor() {
    this.messageRepo = new MessagesRepository();
  }

  findOne(id: string) {
    return this.messageRepo.findAll(id);
  }
}