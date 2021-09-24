import { AgmMap } from '@agm/core';
import { Component, OnInit, ViewChild, AfterViewInit, TemplateRef } from '@angular/core';
import data from './shared/map-data.json';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { TimelineElement } from '../horizontal-timeline/timeline-element';
 declare var initPlayer;

@Component({
  selector: 'aerodyne-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit, AfterViewInit {
  @ViewChild('map') public map: AgmMap;
player:any;
  title: string = 'AGM project';
  // url:[];
  content = `Lorem`;
  url:[string];
  timeline: TimelineElement[] = [
    { date: new Date(2020, 8, 1),livedata:[
      {id:'2020-09-01-10-38-49',report:'', url: 'https://aerodyne-evoteq.s3.me-south-1.amazonaws.com/live/evoteq/media/2020-09-01-10-38-49.mp4?autoplay=' },{id:'2020-09-01-11-12-37',report:'', url: 'https://aerodyne-evoteq.s3.me-south-1.amazonaws.com/live/evoteq/media/2020-09-01-11-12-37.mp4' },{id:'2020-09-01-11-42-08',report:'', url: 'https://aerodyne-evoteq.s3.me-south-1.amazonaws.com/live/evoteq/media/2020-09-01-11-42-08.mp4' },{id:'2020-09-01-11-54-38',report:'', url: 'https://aerodyne-evoteq.s3.me-south-1.amazonaws.com/live/evoteq/media/2020-09-01-11-54-38.mp4' },{id:'2020-09-01-12-13-47',report:'', url: 'https://aerodyne-evoteq.s3.me-south-1.amazonaws.com/live/evoteq/media/2020-09-01-12-13-47.mp4' },{id:'2020-09-01-12-14-33',report:'', url: 'https://aerodyne-evoteq.s3.me-south-1.amazonaws.com/live/evoteq/media/2020-09-01-12-14-33.mp4' },{id:'2020-09-01-12-32-52',report:'', url: 'https://aerodyne-evoteq.s3.me-south-1.amazonaws.com/live/evoteq/media/2020-09-01-12-32-52.mp4' },{id:'2020-09-01-12-52-51',report:'', url: 'https://aerodyne-evoteq.s3.me-south-1.amazonaws.com/live/evoteq/media/2020-09-01-12-52-51.mp4' },{id:'2020-09-01-12-58-31',report:'', url: 'https://aerodyne-evoteq.s3.me-south-1.amazonaws.com/live/evoteq/media/2020-09-01-12-58-31.mp4' }
    ],
    },
    { date: new Date(2020, 8, 2), selected:true,livedata: [{ id:'2020-09-02-15-00-23',report:'', url: 'https://aerodyne-evoteq.s3.me-south-1.amazonaws.com/live/evoteq/media/2020-09-02-15-00-23.mp4' },{ id:'2020-09-02-15-19-22',report:'', url: 'https://aerodyne-evoteq.s3.me-south-1.amazonaws.com/live/evoteq/media/2020-09-02-15-19-22.mp4' },{ id:'2020-09-02-15-54-24',report:'', url: 'https://aerodyne-evoteq.s3.me-south-1.amazonaws.com/live/evoteq/media/2020-09-02-15-54-24.mp4' }] },
    // { date: new Date(2020, 8, 3), livedata: [ {id:'name', report:'',url: 'https://aerodyne-rta.s3.me-south-1.amazonaws.com/live/evoteq/2020-08-09-06-38-37.mp4?autoplay=0' },
    // {id:'name',report:'', url: 'https://aerodyne-rta.s3.me-south-1.amazonaws.com/live/evoteq/2020-08-09-06-38-37.mp4' }] },
    // { date: new Date(2020, 8, 4), livedata: [{ location: '', url: '' }] },
    // { date: new Date(2020, 1, 6), livedata: [{ location: '', url: '' }] },
    // { date: new Date(2020, 1, 7), livedata: [{ location: '', url: '' }] },
    // { date: new Date(2020, 1, 8), livedata: [{ location: '', url: '' }] },
    // { date: new Date(2020, 1, 9), livedata: [{ location: '', url: '' }] },
    // { date: new Date(2020, 1, 10), livedata: [{ location: '', url: '' }] },
    // { date: new Date(2020, 1, 11), livedata: [{ location: '', url: '' }] },
    // { date: new Date(2020, 1, 12), livedata: [{ location: '', url: '' }] },
    // { date: new Date(2020, 1, 13), livedata: [{ location: '', url: '' }] },
    // { date: new Date(2020, 1, 14), livedata: [{ location: '', url: '' }] },
    // { date: new Date(2020, 1, 15), livedata: [{ location: '', url: '' }] },
    // { date: new Date(2020, 1, 16), livedata: [{ location: '', url: '' }] },
    // { date: new Date(2020, 1, 17), livedata: [{ location: '', url: '' }] },
    // { date: new Date(2020, 1, 18), livedata: [{ location: '', url: '' }] },
    // { date: new Date(2020, 1, 19), livedata: [{ location: '', url: '' }] },
    // { date: new Date(2020, 1, 20), livedata: [{ location: '', url: '' }] },
  ];

  mapTypeControl:[];
  zoom: number = 12;
  lightRustMapStyle: any = data.style;
  liveMarker: any = data.marker;
  mapTypeId:'satellite';
  modalRef: BsModalRef;
  disableDefaultUI:false;

  constructor(private modalService: BsModalService) {}

  onMouseOver(infoWindow, map) {
    if (map.lastOpen != null) {
      map.lastOpen.close();
    }
    map.lastOpen = infoWindow;
    infoWindow.open();
  }
  openModal(template: TemplateRef<any>, map) {
    
    map.lastOpen.close();
    this.modalService.onShown.subscribe(e => {
      
        initPlayer();
     
    });
    this.modalRef = this.modalService.show(template);
    // setTimeout(()=>{
    //   initPlayer();
    // },2000)
  }
  onClickMarker(infoWindow){
    infoWindow.close();
  }
  ngAfterViewInit() {
    
  }
  ngOnInit() {
   
    
  }

}
