import { Component , Input, OnInit, Output, EventEmitter} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Moment } from 'src/app/moments';
@Component({
  selector: 'app-moment-form',
  templateUrl: './moment-form.component.html',
  styleUrls: ['./moment-form.component.css']
})
export class MomentFormComponent implements OnInit {
  @Output() onSubmit = new EventEmitter<Moment>();
  @Input() momentData: Moment | null = null;
  @Input() btnText!: string

  image?: File;

  momentForm!: FormGroup;

  constructor(){}

  ngOnInit(): void{
    this.momentForm = new FormGroup({
      id: new FormControl(''),
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      image: new FormControl(''),

    })
  }


  get title(){
    return this.momentForm.get('title')!;
  }

  get description(){
    return this.momentForm.get('description')!;
  }

  
  OnFileSelected(event: any){
    const file: File = event.target.files[0];
    this.momentForm.patchValue({image: file});
  }
  
  submit(){
    if(this.momentForm.invalid){
      return;
    }
    console.log(this.momentForm.value);
    this.onSubmit.emit(this.momentForm.value);
  }

}
