import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { tap, map } from 'rxjs/operators';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  public posts!: any[];
  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    this.http.get(this.url).subscribe(res => {
      this.posts = res as any;
    });

  }

  createPost(input: any) {
    let post: any = { title: input.value};
    input.value = '';
    this.http.post(this.url, JSON.stringify(post))
    .subscribe(response => {
      post.id = response;
      this.posts.splice(0, 0, post);
    }
    )
    
  }

  updatePost(post: any)
  {
    this.http.patch(this.url + '/' + post.id, JSON.stringify({ isRead:true}))
    .subscribe((res: any) => {
      console.log(res);
    })
  }

  deletePost(post: any){
    this.http.delete(this.url + '/' + post.id)
    .subscribe(res => {
      let index = this.posts.indexOf(post);
      this.posts.splice(index, 1);
    });

  }

}
