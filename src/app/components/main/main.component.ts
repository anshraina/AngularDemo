import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {


  title = 'practice2';
  name: string = "Ansh";
  classABC: string = "Raina"; // String name = "Ans Raina"; 
  pageTitle: string = "Angular Basics";
  count: number = 0;
  imageFile = '../assets/images/Angular Architecture.png';
  isVisible: boolean = true;

  students: any = [
    {
      name: "Ansh Raina",
      prn: "1234567890",
      middleName: "Something"
    },
    {
      name: "Rahul Mujumdar",
      prn: "1231456",
      middleName: "Something2"
    }
  ]

  sayHi() : void{
      console.log("Something");
  }

  clickMe() {
    this.count +=1;
  }

  reset() {
    this.count = 0;
  }

  onOff() {
    this.isVisible = !this.isVisible;
  }
  constructor() { }

  ngOnInit(): void {
  }

 

}
