import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css']
})
export class ArtistsComponent implements OnInit {
//this is an array
  artists = [];

  test:any;
  artistId = "";

  images:string[] = ["assets/images/artistone.svg", "assets/images/artisttwo.svg", "assets/images/artistthree.svg", "assets/images/artistfour.svg"];

  constructor(private taskService: TaskService) {}


// For artists
  ngOnInit() {

    

// this. - to replace artist.components
    this.taskService.getTasks()
      .subscribe(
        res => {
          //to fill the array 
          this.artists = res;
        },
        err => console.log(err)
      )
  }

}
