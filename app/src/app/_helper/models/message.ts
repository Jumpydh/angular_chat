export class Message {
  message: string;
  user: string;
  created_at: Date;

  constructor(message: string, user: string, created_at: Date) {
    this.message = message;
    this.user = user;
    this.created_at = created_at;
  }
}
