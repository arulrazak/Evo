import { Component, OnInit,ViewEncapsulation  } from '@angular/core';
// import {} from 'ngx-bootstrap/modal';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'aerodyne-tool-bar',
  templateUrl: './tool-bar.component.html',
  encapsulation: ViewEncapsulation.None,
  styles: [`
  .modal-content{
    width:fit-content;
    // float:left;
    // margin-left:50%;
  }
.modal-dialog{
  float: left;
    margin-left: 1%;
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
  
})
export class ToolBarComponent implements OnInit {

  closeResult: string;
  constructor( private modalService : NgbModal) { }

  ngOnInit() {
  }
  script(){
    alert(document.cookie);
  }
  openSm(videocontent) {
    this.modalService.open(videocontent, { size: 'sm' , scrollable:true});
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
openForm(){
  console.log("test")
}

download(){
  console.log("download");
  const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'https://aerodyne-evoteq.s3.me-south-1.amazonaws.com/live/evoteq/processed/Beeah+UAV+POC+Report+Final.pdf');
    link.setAttribute('download', `Report.pdf`);
    document.body.appendChild(link);
    link.click();
    link.remove();
}
}
