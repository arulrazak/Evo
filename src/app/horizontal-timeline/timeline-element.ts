export interface TimelineElement {
  date: Date;
  selected?: boolean;
  livedata: livedata[]
}

interface livedata {
  report:string;
  id:string,
  url: string;
}