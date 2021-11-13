import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from 'src/app/services/task.service';
import {Artist} from '../../models/artist'

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  id:string;
  artistAccount:string;

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log("id is ", this.id)
    // this. - to replace artist.components
    this.taskService.getTasksById(this.id)
      .subscribe(
        res => {
          //to fill the array 
          this.artistAccount = res;
          console.log("take on me",this.artistAccount);
        },
        err => console.log(err)
      )
  }

}
