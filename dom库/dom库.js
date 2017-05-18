window.$ = function(selectorOrNode){
  let array = []
  if(typeof selectorOrNode === 'string'){
      let items = document.querySelectorAll(selectorOrNode) //需求1：注意：items不是数组，它是包含0 1  2和length的对象// 
      for(var i=0;i<items.length;i++){
      array.push(items[i])//把items的对象传到数组里面，length不会传//
      }
    }else if(selectorOrNode instanceof Element){
     array.push(selectorOrNode)   
    }else if(selectorOrNode instanceof Array){
      for(var i=0;i<selectorOrNode.length;i++){
      array.push(selectorOrNode[i])
      }   
    }
  array.on = function(eventType,fn){
      for(var i=0;i<array.length;i++){
      array[i].addEventListener(eventType,fn)
      }//疑问：array.length和items.length有什么区别//
  }//需求2：1、array是数组所以属于对象，相当于给array加on属性2、on属性下面是一个函数下面是两个参数，事件和执行函数。3、函数内容，遍历数组，监听数组里的元素//
  array.addClass = function(className){
     for(var i=0;i<array.length;i++){
         array[i].classList.add(className)
     } 
     return array//为了让items === items.on// 
  }//需求3：遍历数组，给数组每一个classLis添加一个className//
  array.removeClass = function(className){
     for(var i=0;i<array.length;i++){
         array[i].classList.remove(className)
     }  
  }//需求3：遍历数组，删除className//
  array.text = function(value){
      if(value !== undefined){
     for(var i=0;i<array.length;i++){
         array[i].textContent = value
     }//需求4：如果有返回值，则设置文本//
     return array
     }else {
         let result = []
         for(var i=0;i<array.length;i++){
         result.push(array[i].textContent)
     }
     return result
     }//需求4：如果没有返回值，则取文本值//
  }
  array.get = function(index){
     return array[index] 
  }
  array.end = function(){
      return array.previousSection
  }
  array.siblings = function(){
  let children = array[0].parentNode.children
  let resultArray = []
  for(var i=0;i<children.length;i++){
      if(children[i] !== array[0]){ 
      resultArray.push(children[i])
     } 
  }
  let items = $(resultArray)//$接收一个字符串或元素或元素列表，返回一个新数组，这个数组有on  等方法//
  items.previousSection = array
  return items
   
  }

  return array
}