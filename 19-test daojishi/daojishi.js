var button = document.querySelector('#start')
  var total =2.3*3600 //ms
  button.addEventListener('click',function(){
    var id =setInterval(function(){
      if(total<= 0){
        clearInterval(id)
      }
      total -= 1
      var hour =parseInt(total/3600,10)
      var minute =parseInt((total-hour*3600)/60)
      var second = total-hour*3600-minute*60
    timemac1.innerText=twoto(`${hour}`)
    timemac3.innerText=twoto(`${minute}`)
    timemac5.innerText=twoto(`${second}`)
 },1000)
 })    
function twoto(n){
   if(!n||n==="00"){
                return '00';
            }
			return n<10?'0'+n:''+n;
		}

    
