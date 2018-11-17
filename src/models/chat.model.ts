export class Chat{

  public $key: string;

  constructor(
    public lastMessage: string,
    public timetamp: any,
    public title: string,
    public photo: string
  ){}
}
