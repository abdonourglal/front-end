import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  animations:[
    trigger('signstate',[
     state('noraml',style({
      'z-index':'100'
     }
     )),
     state('upnormal',style({
      'z-index':'10'
    }))
    ]),
    trigger('signstate2',[
      state('noraml',style({
       'z-index':'10000'
      }
      )),
      state('upnormal',style({
       'z-index':'100000'
     }))
     ])
    
  ]
})
export class RegisterComponent implements OnInit {
  state ='normal'
 state2 = 'trigge'
  oppisit: string;
  constructor() { }

  ngOnInit(): void {
  }
  onanimate(){
   this.state == 'upnormal'? this.state = 'normal':this.state = 'upnormal';
    
    
  }
  onanimate1(){
    
    this.state == 'upnormal'? this.state = 'normal':this.state = 'upnormal';
    
  }
 

}
