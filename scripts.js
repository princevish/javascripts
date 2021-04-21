window.onload=function(){
    let input=document.getElementById('input')
    let button=document.getElementById('button')
    let list=document.getElementById('list')

    button.onclick=function(){
      let ad=document.createElement('li')
      ad.innerText=input.value
      let bt=document.createElement('button')
      bt.innerText='Remove' 
      bt.onclick=function (event) {
          event.target.parentElement.remove()
          
      }
      ad.appendChild(bt)
      list.appendChild(ad)
     
     
    }

   
}