import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

const post = {
  "itemStateId": 1,
  "likesCount": 0,
  "commentsCount": 0,
  "comments": [
    {
      "author": {
        "userTableId": 1,
        "userName": "User 1",
        "fullName": null
      },
      "likes": [
        "User Two, User 2"
      ],
      "commentId": 1,
      "commentText": "Test Comment",
      "timeStamp": "2021-01-22T14:07:27.3889634"
    }
  ],
  "likes": [
    "User One, User 1"
  ],
  "rows": [
    {
      "data": [
        {
          "dataId": 6,
          "rowId": 4,
          "text": [
            {
              "style": [],
              "textId": 1,
              "textBody": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
              "styleId": 0,
              "timeStamp": "0001-01-01T00:00:00"
            }
          ],
          "image": [
            {
              "imageByteArray": null,
              "style": [],
              "imageId": 3,
              "imageUrl": "https://images.pexels.com/photos/844297/pexels-photo-844297.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
              "imageByteId": 0,
              "styleId": 0,
              "timeStamp": "0001-01-01T00:00:00"
            }
          ],
          "style": {
            "styleId": 1,
            "styleBody": "Default",
            "timeStamp": "0001-01-01T00:00:00"
          }
        }
      ],
      "style": {
        "styleId": 1,
        "styleBody": "Default",
        "timeStamp": "0001-01-01T00:00:00"
      },
      "rowId": 4,
      "postId": 1,
      "styleId": 0,
      "timeStamp": "2021-01-22T14:01:49.2640234"
    }
  ],
  "author": {
    "userTableId": 1,
    "userName": "User 1",
    "fullName": null
  },
  "postId": 1,
  "postTitle": "Post 1",
  "timeStamp": "2021-01-22T14:01:49.2640234"
};
const posts = [
  {
    "itemStateId": 1,
    "likesCount": 1,
    "commentsCount": 1,
    "comments": null,
    "likes": null,
    "rows": null,
    "author": {
      "userTableId": 1,
      "userName": "User 1",
      "fullName": null
    },
    "postId": 1,
    "postTitle": "Post 1",
    "timeStamp": "2021-01-22T14:01:49.2640234"
  },
  {
    "itemStateId": 2,
    "likesCount": 1,
    "commentsCount": 0,
    "comments": null,
    "likes": null,
    "rows": null,
    "author": {
      "userTableId": 2,
      "userName": "User 2",
      "fullName": null
    },
    "postId": 2,
    "postTitle": "Post 2",
    "timeStamp": "2021-01-22T14:02:56.5703215"
  },
  {
    "itemStateId": 2,
    "likesCount": 0,
    "commentsCount": 0,
    "comments": null,
    "likes": null,
    "rows": null,
    "author": {
      "userTableId": 1,
      "userName": "User 1",
      "fullName": null
    },
    "postId": 3,
    "postTitle": "Post 3",
    "timeStamp": "2021-01-22T14:03:01.7909411"
  }
]


@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor() { }
  getPostList() : Observable<PostDisplay[]>{
    return of(posts)
  }
  getPost(id:number) : Observable<PostDisplay>{
    return of(post)
  }
}
