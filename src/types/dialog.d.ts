type DialogOptions = {
  title:string,
  text:string,
  okButton:{
    name:string, color?:string, callback?:()=>void
  },
  cancelButton:{
    name:string, color?:string, callback?:()=>void
  }
}
type PostDisplay = {
  postId:number,
  postTitle:string,
  likesCount:number,
  commentsCount:number
}
