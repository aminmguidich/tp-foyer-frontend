import { Component, OnInit } from '@angular/core';
import { BlocService } from './bloc.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Bloc } from './bloc';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'tpfoyerFront';

  form: boolean = false;
  closeResult!: string;
  listblocs: any;
  bloc!:any;

  constructor(private etudiantService: BlocService, private modalService: NgbModal ) { }

  ngOnInit(): void {
    this.getAllbloc();
    this.bloc={
      
      idBloc: null,  
      nomBloc: null,
      capaciteBloc: null,  
     
    }
  }

  getAllbloc(){
    return this.etudiantService.getAllbloc().subscribe(res=>{
      this.listblocs = res;
    });
  }
  addbloc(c: any) {
    this.etudiantService.addbloc(c).subscribe(() => {
      this.getAllbloc();
      this.form = false;
    });
  }

  open(content: any, action: any) {
    if (action != null)
      this.bloc = action
    else
      this.bloc = new Bloc();
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  cancel() {
    this.form = false;
  }
}