
import { Component, OnInit } from '@angular/core';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component  {
  title = 'Aakash';
  post = '';
  postList = [];
  comment = '';

  
  postHere() {

    const postObject = {};
    postObject['like'] = 0;
    postObject['dislike'] = 0;
    postObject['post'] = this.post;
    postObject['commentList'] = [];
    this.postList.splice(0, 0, postObject);

    this.post = '';
  }

  commenthere(item){
  const index=this.postList.indexOf(item);
    item.commentList.splice(index,0,this.comment);
    this.comment = '';
  }

  likeCount(item) {
    item.like += 1;
  }

  dislikeCount(item) {
    item.dislike += 1;
  }

  deletePost(item){
    let index=this.postList.indexOf(item);
    this.postList.splice(index,1);
  } 

  deleteComment(item,j){
    let index=item.commentList.indexOf(j);

    item.commentList.splice(index,1);
  }
}


