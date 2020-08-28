
function counter() {
    var afteryear = new Date("Aug 23,2021,12:00:00").getTime();
    setInterval(function(){
        var now = new Date();
        var distance = afteryear - now;
        var d = Math.floor(distance / (1000 * 60 * 60 * 24));
        var h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var s = Math.floor((distance % (1000 * 60)) / 1000);
        if(h < 10){
            h = '0' + h;
        }
        if(m < 10){
            m = '0'+ m;
        }
        if(s < 10){
            s = '0' + s;
        }
        $('#mp').html(d+':'+h+':'+m+':'+s)
    },1000);
}
counter();

function cal() {
    var beginclass = new Date("Aug 31,2020,12:00:00").getTime();
    var nationalholiday = new Date("Sep 30,2020,12:00:00").getTime();
    var firstexam = new Date("Oct 19,2020,12:00:00").getTime();
    var exhibition = new Date("Oct 29,2020,12:00:00").getTime();
    var secondexam = new Date("Dec 15,2020,12:00:00").getTime();
    var wintervacation = new Date("Dec 22,2020,12:00:00").getTime();

    setInterval(function(){
        var now = new Date();
        var distance1 = beginclass - now;
        var distance2 = nationalholiday - now;
        var distance3 = firstexam - now;
        var distance4 = exhibition - now;
        var distance5 = secondexam - now;
        var distance6 = wintervacation - now;
        
        var total = [Math.floor(distance1 / (1000 * 60 * 60 * 24)),
                     Math.floor(distance2 / (1000 * 60 * 60 * 24)),
                     Math.floor(distance3 / (1000 * 60 * 60 * 24)),
                     Math.floor(distance4 / (1000 * 60 * 60 * 24)),
                     Math.floor(distance5 / (1000 * 60 * 60 * 24)),
                     Math.floor(distance6 / (1000 * 60 * 60 * 24))];
            
        for(var i; i<total.length; i++){
            if(total[i] < 0)
            total[i]=0;
        }             

        $('#beginclass').html('D-'+total[0])
        $('#nationalholiday').html('D-'+total[1])
        $('#firstexam').html('D-'+total[2])
        $('#exhibition').html('D-'+total[3])
        $('#secondexam').html('D-'+total[4])
        $('#wintervacation').html('D-'+total[5])

    },1000);
}
cal();

function openNav() {
    document.getElementById("mySidenav").style.width = "192px";
}
  
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}


var schset = ["sch1","sch2","sch3","sch4","sch5"];
var perset = ["per1","per2","per3"];
var abiset = ["abi1","abi2","abi3","abi4"];
var visset = ["vis1","vis2","vis3"];
var dayset = ["day1","day2","day3"];
var pic = null;

function visible(hi){
   if(pic === hi){
    //pic = null
   } else {
    this.pic = hi;
   }
   hide();
}

function hide(){
    var i, each, id;
    if((pic.charAt(0))==("s")){
        var selobj = schset; 
    }

    if((pic.charAt(0))==("p")){
        var selobj = perset; 
    }

    if((pic.charAt(0))==("a")){
        var selobj = abiset;
    }

    if((pic.charAt(0))==("v")){
        var selobj = visset;
    }
    if((pic.charAt(0))==("d")){
        var selobj = dayset;
    }

    for(i=0; i<selobj.length; i++){
        each = selobj[i];
        id = document.getElementById(each);
        if(pic === each){
            id.style.display = "block";
        } else{
            id.style.display = "none";
        }
    }
 
    


}


//school
// var schset = ["sch1","sch2","sch3","sch4","sch5"];
// var schpic = null;

// function schvisible(hi){
//    if(schpic === hi){
//     //schpic = null
//    } else {
//     this.schpic = hi;
//    }
//    schhide();
// }

// function schhide(){
//     var i, scheach, schid;
//     for(i=0; i<schset.length; i++){
//         scheach = schset[i];
//         schid = document.getElementById(scheach);
//         if(schpic === scheach){
//             schid.style.display = "block";
//         } else{
//             schid.style.display = "none";
//         }
//     }
// }