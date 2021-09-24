import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { TimelineElement } from './timeline-element';
import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';
import { HostListener } from "@angular/core";
import { DomSanitizer } from '@angular/platform-browser';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'aerodyne-horizontal-timeline',
  templateUrl: 'horizontal-timeline.component.html',
  styleUrls: ['horizontal-timeline.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [`
  .modal-content{
    width:fit-content;
    // float:left;
    // margin-left:50%;
  }
.modal-dialog{
  float: left;
    margin-left: 50%;
    position: relative;
    top: 20%;
}

.no-color{
  background-color:transparent;
}
  
    .dark-modal .modal-content {
      background-color: #292b2c;
      color: white;
      
    }
    .dark-modal .close {
      color: white;
      margin: 50 auto;
    }
    .light-blue-backdrop {
      background-color: transparent;
    }
  `]
  ,
  animations: [
    trigger('contentState', [
      state('active', style({
        position: 'relative', 'z-index': 2, opacity: 1,
      })),
      transition('right => active', [
        style({
          transform: 'translateX(100%)'
        }),
        animate('400ms ease-in-out', keyframes([
          style({ opacity: 0, transform: 'translateX(100%)', offset: 0 }),
          style({ opacity: 1, transform: 'translateX(0%)', offset: 1.0 })
        ]))
      ]),
      transition('active => right', [
        style({
          transform: 'translateX(-100%)'
        }),
        animate('400ms ease-in-out', keyframes([
          style({ opacity: 1, transform: 'translateX(0%)', offset: 0 }),
          style({ opacity: 0, transform: 'translateX(100%)', offset: 1.0 })
        ]))
      ]),
      transition('active => left', [
        style({
          transform: 'translateX(-100%)'
        }),
        animate('400ms ease-in-out', keyframes([
          style({ opacity: 1, transform: 'translateX(0%)', offset: 0 }),
          style({ opacity: 0, transform: 'translateX(-100%)', offset: 1.0 })
        ]))
      ]),
      transition('left => active', [
        style({
          transform: 'translateX(100%)'
        }),
        animate('400ms ease-in-out', keyframes([
          style({ opacity: 0, transform: 'translateX(-100%)', offset: 0 }),
          style({ opacity: 1, transform: 'translateX(0%)', offset: 1.0 })
        ]))
      ]),
    ])
  ]
})
export class HorizontalTimelineComponent implements AfterViewInit {
  prevLinkInactive: boolean = true;
  nextLinkInactive: boolean = false;
  loaded: boolean = false;
  selectedIndex: number = 0;
  @ViewChild('eventsWrapper') eventsWrapper: ElementRef;
  @ViewChild('fillingLine') fillingLine: ElementRef;
  @ViewChildren('timelineEvents') timelineEvents: QueryList<ElementRef>;
  eventsWrapperWidth: number = 0;

  scrHeight:any;
  scrWidth:any;
  // @ViewChild('closebutton') closebutton;

  @HostListener('window:resize', ['$event'])

  _viewInitialized = false;
  _timelineWrapperWidth: number = 800;

  constructor(private _cdr: ChangeDetectorRef, public sanitizer: DomSanitizer,private modalService : NgbModal) {
    if(window.innerWidth <= 800){
      this._timelineWrapperWidth = window.innerWidth - 70;
    }
  }

  
download(){
  
  const link = document.createElement('a');
  link.setAttribute('target', '_blank');
  link.setAttribute('href', 'https://aerodyne-evoteq.s3.me-south-1.amazonaws.com/live/evoteq/processed/Beeah+UAV+POC+Report+Final.pdf');
  link.setAttribute('download', `Report.pdf`);
  document.body.appendChild(link);
  link.click();
  link.remove();
}

 onSave() {
   console.log("c;ose")
  // this.closebutton.nativeElement.click();
}
ngOnInit(){}
openSm(videocontent) {
  this.modalService.open(videocontent, { size: 'sm' , scrollable:true});
}
openSm2(videocontent2) {
  this.modalService.open(videocontent2, { size: 'sm' , scrollable:true});
}
openBackDropCustomClass(content) {
  this.modalService.open(content, {backdropClass: 'light-blue-backdrop'});
}
openLg0(playercontent0) {
  this.modalService.open(playercontent0, { size: 'lg',backdropClass:'no-color' });
}
openLg(playercontent) {
  this.modalService.open(playercontent, { size: 'lg',backdropClass:'no-color' });
}
openLg2(playercontent2) {
  this.modalService.open(playercontent2, { size: 'lg',backdropClass:'no-color' });
}
openLg3(playercontent3) {
  this.modalService.open(playercontent3, { size: 'lg',backdropClass:'no-color' });
}
openLg4(playercontent4) {
  this.modalService.open(playercontent4, { size: 'lg',backdropClass:'no-color' });
}
openLg5(playercontent5) {
  this.modalService.open(playercontent5, { size: 'lg',backdropClass:'no-color' });
}
openLg6(playercontent6) {
  this.modalService.open(playercontent6, { size: 'lg',backdropClass:'no-color' });
}
openLg7(playercontent7) {
  this.modalService.open(playercontent7, { size: 'lg',backdropClass:'no-color' });
}
openLg8(playercontent8) {
  this.modalService.open(playercontent8, { size: 'lg',backdropClass:'no-color' });
}
openLg9(playercontent9) {
  this.modalService.open(playercontent9, { size: 'lg',backdropClass:'no-color' });
}
openLg10(playercontent10) {
  this.modalService.open(playercontent10, { size: 'lg',backdropClass:'no-color' });
}
openLg11(playercontent11) {
  this.modalService.open(playercontent11, { size: 'lg',backdropClass:'no-color' });
}
openLg12(playercontent12) {
  this.modalService.open(playercontent12, { size: 'lg',backdropClass:'no-color' });
}
openLg13(playercontent13) {
  this.modalService.open(playercontent13, { size: 'lg',backdropClass:'no-color' });
}
openLg14(playercontent14) {
  this.modalService.open(playercontent14, { size: 'lg',backdropClass:'no-color' });
}
openLg15(playercontent15) {
  this.modalService.open(playercontent15, { size: 'lg',backdropClass:'no-color' });
}
openLg16(playercontent16) {
  this.modalService.open(playercontent16, { size: 'lg',backdropClass:'no-color' });
}
openLg17(playercontent17) {
  this.modalService.open(playercontent17, { size: 'lg',backdropClass:'no-color' });
}
openLg18(playercontent18) {
  this.modalService.open(playercontent18, { size: 'lg',backdropClass:'no-color' });
}
openLg19(playercontent19) {
  this.modalService.open(playercontent19, { size: 'lg',backdropClass:'no-color' });
}
openLg20(playercontent20) {
  this.modalService.open(playercontent20, { size: 'lg',backdropClass:'no-color' });
}
openLg21(playercontent21) {
  this.modalService.open(playercontent21, { size: 'lg',backdropClass:'no-color' });
}
openLg22(playercontent22) {
  this.modalService.open(playercontent22, { size: 'lg',backdropClass:'no-color' });
}
openLg23(playercontent23) {
  this.modalService.open(playercontent23, { size: 'lg',backdropClass:'no-color' });
}
openLg24(playercontent24) {
  this.modalService.open(playercontent24, { size: 'lg',backdropClass:'no-color' });
}
openLg25(playercontent25) {
  this.modalService.open(playercontent25, { size: 'lg',backdropClass:'no-color' });
}
openLg26(playercontent26) {
  this.modalService.open(playercontent26, { size: 'lg',backdropClass:'no-color' });
}
openLg27(playercontent27) {
  this.modalService.open(playercontent27, { size: 'lg',backdropClass:'no-color' });
}
openLg28(playercontent28) {
  this.modalService.open(playercontent28, { size: 'lg',backdropClass:'no-color' });
}
openLg29(playercontent29) {
  this.modalService.open(playercontent29, { size: 'lg',backdropClass:'no-color' });
}
openLg30(playercontent30) {
  this.modalService.open(playercontent30, { size: 'lg',backdropClass:'no-color' });
}
openLg31(playercontent31) {
  this.modalService.open(playercontent31, { size: 'lg',backdropClass:'no-color' });
}
openLg32(playercontent32) {
  this.modalService.open(playercontent32, { size: 'lg',backdropClass:'no-color' });
}
openLg33(playercontent33) {
  this.modalService.open(playercontent33, { size: 'lg',backdropClass:'no-color' });
}
openLg34(playercontent34) {
  this.modalService.open(playercontent34, { size: 'lg',backdropClass:'no-color' });
}
openLg35(playercontent35) {
  this.modalService.open(playercontent35, { size: 'lg',backdropClass:'no-color' });
}
openLg36(playercontent36) {
  this.modalService.open(playercontent36, { size: 'lg',backdropClass:'no-color' });
}
openLg37(playercontent37) {
  this.modalService.open(playercontent37, { size: 'lg',backdropClass:'no-color' });
}
openLg38(playercontent38) {
  this.modalService.open(playercontent38, { size: 'lg',backdropClass:'no-color' });
}
openLg39(playercontent39) {
  this.modalService.open(playercontent39, { size: 'lg',backdropClass:'no-color' });
}
openLg40(playercontent40) {
  this.modalService.open(playercontent40, { size: 'lg',backdropClass:'no-color' });
}
// close(){
//  this.timelineElements.close();
// }
  @Input()
  set timelineWrapperWidth(value: number) {
    this._timelineWrapperWidth = value;
    this._cdr.detectChanges();
  }

  private _eventsMinDistance: number = 68;

  @Input()
  set eventsMinDistance(value: number) {
    this._eventsMinDistance = value;
    this.initView();
  }

  private _timelineElements: TimelineElement[];

  get timelineElements(): TimelineElement[] {
    return this._timelineElements;
  }

  @Input()
  set timelineElements(value: TimelineElement[]) {
    this._timelineElements = value;
    this.initView();
  }

  private _dateFormat: string = 'dd.MM.yyyy';

  get dateFormat(): string {
    return this._dateFormat;
  }

  @Input()
  set dateFormat(value: string) {
    this._dateFormat = value;
    this.initView();
  }

  private _disabled: boolean = false;

  @Input()
  set disabled(value: boolean) {
    this._disabled = value;
  }

  private _showContent: boolean = false;

  get showContent(): boolean {
    return this._showContent;
  }

  @Input()
  set showContent(value: boolean) {
    this._showContent = value;
    this._cdr.detectChanges();
  }

  private static pxToNumber(val: string): number {
    return Number(val.replace('px', ''));
  }

  private static getElementWidth(element: Element): number {
    const computedStyle = window.getComputedStyle(element);
    if (!computedStyle.width) {
      return 0;
    }
    return HorizontalTimelineComponent.pxToNumber(computedStyle.width);
  }

  private static parentElement(element: any, tagName: string) {
    if (!element || !element.parentNode) {
      return null;
    }

    let parent = element.parentNode;
    while (true) {
      if (parent.tagName.toLowerCase() == tagName) {
        return parent;
      }
      parent = parent.parentNode;
      if (!parent) {
        return null;
      }
    }
  }

  private static getTranslateValue(timeline: Element) {
    let timelineStyle = window.getComputedStyle(timeline);
    let timelineTranslate = timelineStyle.getPropertyValue('-webkit-transform') ||
      timelineStyle.getPropertyValue('-moz-transform') ||
      timelineStyle.getPropertyValue('-ms-transform') ||
      timelineStyle.getPropertyValue('-o-transform') ||
      timelineStyle.getPropertyValue('transform');

    let translateValue = 0;
    if (timelineTranslate.indexOf('(') >= 0) {
      let timelineTranslateStr = timelineTranslate
        .split('(')[1]
        .split(')')[0]
        .split(',')[4];
      translateValue = Number(timelineTranslateStr);
    }

    return translateValue;
  }

  private static setTransformValue(element: any, property: any, value: any) {
    element.style['-webkit-transform'] = property + '(' + value + ')';
    element.style['-moz-transform'] = property + '(' + value + ')';
    element.style['-ms-transform'] = property + '(' + value + ')';
    element.style['-o-transform'] = property + '(' + value + ')';
    element.style['transform'] = property + '(' + value + ')';
  }

  private static dayDiff(first: Date, second: Date): number {
    return Math.round(second.getTime() - first.getTime());
  }

  private static minLapse(elements: TimelineElement[]): number {
    if (elements && elements.length && elements.length === 1) {
      return 0;
    }

    let result: number = 0;
    for (let i = 1; i < elements.length; i++) {
      let distance = HorizontalTimelineComponent.dayDiff(elements[i - 1].date, elements[i].date);
      result = result ? Math.min(result, distance) : distance;
    }
    return result;
  }

  ngAfterViewInit(): void {
    this._cdr.detach();
    this._viewInitialized = true;
    this.initView();
  }

  onScrollClick(event: Event, forward: boolean) {
    event.preventDefault();
    this.updateSlide(this.eventsWrapperWidth, forward);
    this._cdr.detectChanges();
  }

  onEventClick(event: Event, selectedItem: TimelineElement) {
    event.preventDefault();
    if (this._disabled) {
      return;
    }
    let element = event.target;
    // detect click on the a single event - show new event content
    let visibleItem = this._timelineElements[0];
    this._timelineElements.forEach(function (item: TimelineElement) {
      if (item.selected && item != selectedItem) {
        visibleItem = item;
        item.selected = false;
      }
    });
    this.selectedIndex = this._timelineElements.indexOf(selectedItem);
    selectedItem.selected = true;
    this.updateFilling(element);
    this._cdr.detectChanges();
  }

  initTimeline(timeLines: TimelineElement[]) {
    let eventsMinLapse = HorizontalTimelineComponent.minLapse(timeLines);
    // assign a left position to the single events along the timeline
    this.setDatePosition(timeLines, this._eventsMinDistance, eventsMinLapse);
    // assign a width to the timeline
    this.setTimelineWidth(timeLines, this._eventsMinDistance, eventsMinLapse);
    // the timeline has been initialize - show it
    this.loaded = true;
  }

  updateSlide(timelineTotWidth: number, forward: boolean) {
    let translateValue = HorizontalTimelineComponent.getTranslateValue(this.eventsWrapper.nativeElement);

    if (forward) {
      this.translateTimeline(translateValue - this._timelineWrapperWidth + this._eventsMinDistance, this._timelineWrapperWidth - timelineTotWidth)
    } else {
      this.translateTimeline(translateValue + this._timelineWrapperWidth - this._eventsMinDistance, null);
    }
  }

  updateTimelinePosition(element: Element) {
    let eventStyle = window.getComputedStyle(element);
    let eventLeft = HorizontalTimelineComponent.pxToNumber(eventStyle.getPropertyValue('left'));
    let translateValue = HorizontalTimelineComponent.getTranslateValue(this.eventsWrapper.nativeElement);

    if (eventLeft > this._timelineWrapperWidth - translateValue) {
      this.translateTimeline(-eventLeft + this._timelineWrapperWidth / 2, this._timelineWrapperWidth - this.eventsWrapperWidth);
    }
  }

  translateTimeline(value: number, totWidth: number | null) {
    // only negative translate value
    value = (value > 0) ? 0 : value;
    // do not translate more than timeline width
    value = ( !(totWidth === null) && value < totWidth ) ? totWidth : value;
    HorizontalTimelineComponent.setTransformValue(this.eventsWrapper.nativeElement, 'translateX', value + 'px');
    // update navigation arrows visibility
    this.prevLinkInactive = value === 0;
    this.nextLinkInactive = value === totWidth;
  }

  setTimelineWidth(elements: TimelineElement[], width: number, eventsMinLapse: number) {
    let timeSpan = 100;
    if (elements.length > 1) {
      timeSpan = HorizontalTimelineComponent.dayDiff(elements[0].date, elements[elements.length - 1].date);
    }
    let timeSpanNorm = timeSpan / eventsMinLapse;
    timeSpanNorm = Math.round(timeSpanNorm) + 4;
    this.eventsWrapperWidth = timeSpanNorm * width;
    let aHref = this.eventsWrapper.nativeElement.querySelectorAll('a.selected')[0];
    this.updateFilling(aHref);
    this.updateTimelinePosition(aHref);
    return this.eventsWrapperWidth;
  }

  private updateFilling(element: any) {
    // change .filling-line length according to the selected event
    let eventStyle = window.getComputedStyle(element);
    let eventLeft = eventStyle.getPropertyValue('left');
    let eventWidth = eventStyle.getPropertyValue('width');
    let eventLeftNum = HorizontalTimelineComponent.pxToNumber(eventLeft) + HorizontalTimelineComponent.pxToNumber(eventWidth) / 2;
    let scaleValue = eventLeftNum / this.eventsWrapperWidth;
    HorizontalTimelineComponent.setTransformValue(this.fillingLine.nativeElement, 'scaleX', scaleValue);
  }

  private initView(): void {
    if (!this._viewInitialized) {
      return;
    }

    if (this._timelineElements && this._timelineElements.length) {
      for (let i = 0; i < this._timelineElements.length; i++) {
        if (this._timelineElements[i].selected) {
          this.selectedIndex = i;
          break;
        }
      }
      this.initTimeline(this._timelineElements);
    }
    this._cdr.detectChanges();
  }

  private setDatePosition(elements: TimelineElement[], min: number, eventsMinLapse: number) {
    let timelineEventsArray = this.timelineEvents.toArray();
    let i: number = 0;
    for (let component of elements) {
      let distance = HorizontalTimelineComponent.dayDiff(elements[0].date, component.date);
      let distanceNorm = Math.round(distance / eventsMinLapse);
      timelineEventsArray[i].nativeElement.style.left = distanceNorm * min + 'px';
      // span
      // let span: HTMLSpanElement = <HTMLSpanElement>timelineEventsArray[i].nativeElement.parentElement.children[1];
      // let spanWidth = HorizontalTimelineComponent.getElementWidth(span);
      // span.style.left = distanceNorm * min + spanWidth / 2 + 'px';
      i++;
    }
  }
}
