import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UmsService } from '../ums.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
constructor(private signup:UmsService){
  this.getcountry();
}



  regForm = new FormGroup({
    
    cityId: new FormControl(),
    countryId: new FormControl(),
    dob: new FormControl(),
    email: new FormControl(),
    fname: new FormControl(),
    gender: new FormControl(),
    lname: new FormControl(),
    phno: new FormControl(),
    stateId: new FormControl(),
  });
  
  country:any
  getcountry(){
    this.signup.counrties().subscribe((res)=> 
    {console.log(res)
      this.country=(res)
    })
    
  }
  states:any
  statesbyid(id:any){
    this.signup.states(id).subscribe((res)=>
    {console.log(res);
      this.states=res;
    }    )
  }

  city:any
  getcitybyid(id:any){
    this.signup.cities(id).subscribe((res)=>
    {
      console.log(res);
      this.city=res;
    }
    )
  }

  submit(){
     console.log(this.regForm.value)
     this.signup.saveuser(this.regForm.value).subscribe((res)=>console.log(res))
  }



}

