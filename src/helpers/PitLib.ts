declare var $:any
declare var cuteToast:any
declare var cuteAlert:any

var audio_neg = new Audio('https://cdn.jsdelivr.net/gh/anupam-dixit/files@master/quill-bor/aud/neg.mp3');
var audio_pos = new Audio('https://cdn.jsdelivr.net/gh/anupam-dixit/files@master/quill-bor/aud/pos.mp3');
export const PitLib={
  User:{
    save:function(u:any){
      if (!u.token){
        console.log(u)
        return false
      }
      try {
        localStorage.setItem('ls_u_data',JSON.stringify(u))
        return true
      } catch (e) {return false}
    },
    isLoggedIn:function () {
      return !!(localStorage.getItem('ls_u_data'))
    },
    data:function ():any {
      return JSON.parse(localStorage.getItem('ls_u_data')||'');
    },
    logout:function (){
      localStorage.removeItem('ls_u_data');
      if (!location.toString().includes('login')){
        location.href='/login'
      }
    },
    hasRole:function (role:Array<string>|string):boolean {
      if (typeof role === 'string'){
        role=[role]
      }
      return PitLib.User.data().roles.some((element: any) => role.includes(element))
    }
  },

  Sound:{
    play:function (AudioCode:Number):void{
      switch (AudioCode) {
        case 1:
          audio_pos.play();
          break
        case 0:
          audio_neg.play();
          break
      }
    }
  },

  Toast:function (type:String='warning',title:String|null='Message',message:String='Unable to perform this action',timer:number=3000):void{
    if (!title){
      title="Message"
    }
    PitLib.Sound.play((type==='success')?1:0)
    return cuteToast({
      title:title,
      type: type,
      message: message,
      timer: timer
    })
  },
  Popup:function (type:String='warning',title:String|null='Message',message:String='Unable to perform this action',timer:number=3000):void{
    if (!title){
      title="Message"
    }
    PitLib.Sound.play((type==='success')?1:0)
    return cuteAlert({
      title:title,
      type: type,
      message: message,
    })
  },
}
