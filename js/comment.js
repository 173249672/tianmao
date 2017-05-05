
//   获取简写
function $(selector,ranger = document){
    let type= typeof selector;
    if (type == 'string') {
    	//获取
    	let selecto = selector.trim();
    	let first=selecto.charAt(0);
        if(first == '.'){
            return ranger.getElementsByClassName(selecto.substring(1));
        }else if(first == '#'){
            return ranger.getElementById(selecto.substring(1));
         }else if(/^[a-zA-z][a-zA-z1-6]{0,8}$/.test(selecto)){    //表示标签正则表达式  直接用/ /包起来
         	return ranger.getElementsByTagName(selecto);

          }
    }

    if (type == 'function'){
        //添加事件
        window.onload=function(){
        	selector();
        }
    }
}
    


//测试兼容性
function getStyle(obj,attr){
    if (window.getComputedStyle) {
        return getComputedStyle(obj,null)[attr];
    }else{
        return obj.currentStyle[attr];
    }
}



/*
html(obj[,content])
设置或者是获取某一个元素的内容
obj  指定的对象

[content] 设置的内容
  没有    获取obj内容
  有       设置
 */
function html(obj,content){
    if (content) {
        return obj.innerHTML=content;
    }else{
        return obj.innerHTML;
    }
}