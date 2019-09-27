import { Component, OnInit } from '@angular/core';
import { RequestDataService } from '../request-data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(private requestDataService : RequestDataService) { 
  }

  ngOnInit() {
    this.subscribeData();
  }

  header: string = "Reddit Bootlegged"

  postDataObj : any;
  
  subscribeData() {
      this.requestDataService.getData().subscribe(e => {
        this.postDataObj = e.data.children;
        console.log(e);
      })
  }
}
