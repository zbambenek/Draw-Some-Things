/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var changedColor;
var size;
var color;
var stroke;

/*To change the color of the marker.
 * cc1=black
 * cc2=blue
 * cc3=brown
 * 
 */
function changeColor (){

   if(document.getElementById("cc2").checked){
       color = "#0000FF";
   }else if(document.getElementById("cc1").checked){
       color = "#000000";
    }else if (document.getElementById("cc3").checked){
        color ="#866635";
    }
    return color;
}

//To change the size of the marker
function changeSize(){
    
    var c=document.getElementById("myCanvas");
    var stroke=c.getContext("2d");
    
    if(document.getElementById("cs1").checked){
       stroke.lineWidth = 3;
   }else if(document.getElementById("cs2").checked){
       stroke.lineWidth = 20;
    }else if (document.getElementById("cs3").checked){
        stroke.lineWidth = 40;
    }
    return stroke;
}

