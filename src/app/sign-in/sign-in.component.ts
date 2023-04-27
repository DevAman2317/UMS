import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UmsService } from '../ums.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
constructor(private signInser:UmsService){

}
  login:FormGroup =new FormGroup({
  email: new FormControl(),
  pwd: new FormControl()
 })

 signIn(){
  console.log(this.login)
  this.signInser.loginser(this.login.value).subscribe((res)=> console.log(res))
 }

}
