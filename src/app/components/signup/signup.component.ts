import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
 
  signupForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.signupForm = this.fb.group({
          name:['',Validators.required],
          email:['',Validators.compose([
            Validators.email,
            Validators.required
          ])],
          password:['',Validators.compose([
            Validators.required,
            Validators.minLength(5)
          ])]
        })
    
   }

  ngOnInit(): void {
  }
// creatForm(){
//   this.signupForm = this.fb.group({
//     name:['',Validators.required],
//     email:['',Validators.compose([
//       Validators.email,
//       Validators.required
//     ])],
//     password:['',Validators.compose([
//       Validators.required,
//       Validators.minLength(5)
//     ])]
//   })

// }
}
