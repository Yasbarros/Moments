import { Component, EventEmitter } from '@angular/core';
import { Output , Input, OnInit} from '@angular/core';
import { Moment } from 'src/app/moments';
import { MomentService } from 'src/app/services/moment.service';

@Component({
  selector: 'app-new-moments',
  templateUrl: './new-moments.component.html',
  styleUrls: ['./new-moments.component.css']
})
export class NewMomentsComponent {
  
  btnText: string = 'Compartilhar!';

  constructor(private momentService: MomentService){}

  ngOnInit(): void{}

  async createHandler(moment : Moment){
    const formData = new FormData();

    formData.append('title',  moment.title);
    formData.append('description', moment.description);

    if(moment.image){
      formData.append('image',moment.image);
    }

    await this.momentService.creatMoment(formData).subscribe();
    }

}
