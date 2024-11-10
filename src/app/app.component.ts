import { Component, OnInit } from '@angular/core';
import { BlocService } from './bloc.service';


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

  constructor(private etudiantService: BlocService ) { }

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


}