import { Component } from '@angular/core';
import { UmsService } from '../ums.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  forgotPassform= new FormGroup({
    emailId: new FormControl()
  })


constructor(private forpswser:UmsService){

}
forgotpwd(){
  this.forpswser.forgotpass(this.forgotPassform.value.emailId).subscribe((res)=> console.log(res))
}
}
