var a,x=1;
setInterval(
    function(){
        a=Math.floor(Math.random()*8);
        if(a==x){++a} 
        x=a;
        for(var i=1; i<=9; i++){
            document.querySelector(`.box${i}`).style.backgroundColor = "#000";
        }
        document.querySelector(`.box${a+1}`).style.backgroundColor = "red";
    },
    1000
)