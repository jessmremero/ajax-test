function makeHands(){
  var sh = document.createElement('div')
    var mh = document.createElement('div')
      var hh = document.createElement('div')
        
	  sh.className = "second-hand"
	    mh.className = "minute-hand"
	      hh.className = "hour-hand"
	        var clock = document.querySelector('.total')
		  clock.appendChild(sh)
		    clock.appendChild(mh)
		      clock.appendChild(hh)
		        
			  var now = new Date()

			  var hours = now.getHours()
			  var minutes = now.getMinutes()
			  var seconds = now.getSeconds()
			    
			    if(hours>12){
			      hours -= 12
			      }
			      var secondDeg = seconds/60 * 360
			      var minuteDeg = (minutes * 60 + seconds)/3600 * 360
			      var hourDeg = (hours*3600 + minutes*60 + seconds)/(12*3600)*360  
			       
			       sh.style.transform= `rotate(${-90+secondDeg}deg)`
			       mh.style.transform= `rotate(${-90+minuteDeg}deg)`
			       hh.style.transform= `rotate(${-90+hourDeg}deg)`
			       }

			       function step(){
			         
				   var now = new Date()

				   var hours = now.getHours()
				   var minutes = now.getMinutes()
				   var seconds = now.getSeconds()
				   console.log(`${hours}:${minutes}:${seconds}`)

				   if(hours>12){
				     hours -= 12
				     }
				     var secondDeg = seconds/60 * 360
				     var minuteDeg = (minutes * 60 + seconds)/3600 * 360
				     var hourDeg = (hours*3600 + minutes*60 + seconds)/(12*3600)*360
				     var s1 = document.querySelector('.second-hand').style.transform
				     var index = s1.indexOf('(')
				     var index2 = s1.lastIndexOf('deg)')
				     var numberString = s1.substring(index+1,index2)

				     var s2 = document.querySelector('.minute-hand').style.transform
				     var index3 = s2.indexOf('(')
				     var index4 = s2.lastIndexOf('deg)')
				     var numberString1 = s2.substring(index3+1,index4)

				     var s3 = document.querySelector('.hour-hand').style.transform
				     var index5 = s3.indexOf('(')
				     var index6 = s3.lastIndexOf('deg)')
				     var numberString2 = s3.substring(index5+1,index6)

				     document.querySelector('.second-hand').style.transform = `rotate(${+numberString+6}deg)`
				     document.querySelector('.minute-hand').style.transform = `rotate(${+numberString1+1/60}deg)`
				     document.querySelector('.hour-hand').style.transform = `rotate(${+numberString2+1/3600}deg)`
				     }
				     makeHands()
				     step()
				     setInterval(function(){
				       step()
				       },1000)
