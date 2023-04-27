import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UmsService } from '../ums.service';

@Component({
  selector: 'app-unlockacc',
  templateUrl: './unlockacc.component.html',
  styleUrls: ['./unlockacc.component.css']
})
export class UnlockaccComponent {
  constructor(private service:UmsService){

  }
unlock=new FormGroup({
  email: new FormControl(),
  confirmPwd:new FormControl(),
  newPwd:new FormControl(),
  tempPwd:new FormControl()

})

unlockAcc(){
this.service.unlockacc(this.unlock.value).subscribe((res)=>console.log(res))
alert("You have succesfully unlock your account")
}

}
