export class CreateEventDto {
  constructor(body: { [key: string]: any }) {
    this.action = body['action'];
    this.issue = body['issue'];
    this.repository = body['repository'];
    this.sender = body['sender'];
  }
  readonly action: string;
  readonly issue: { [key: string]: any };
  readonly repository: { [key: string]: any };
  readonly sender: { [key: string]: any };

  toModel(): Record<string, any> {
    return {
      action: this.action,
      number: this.issue['number'],
      title: this.issue['title'],
      html_url: this.issue['html_url'],
      created_at: this.issue['created_at'],
      updated_at: this.issue['updated_at'],
    };
  }
}
