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
