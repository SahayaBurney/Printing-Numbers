function tens(a){
    switch (a) {
    case '2':
        return("twenty ");
    case '3':
        return("thirty ");
    case '4':
        return("fourty ");
    case '5':
        return("fifty ");
    case '6':
        return("sixty ");
    case '7':
        return("seventy ");
    case '8':
        return("eighty ");    
    case '9':
        return("ninty ");
    default:
        break
    }
}


function ones(a){
switch (a) {
    case '1':
        return("one ");
    case '2':
        return("two");
    case '3':
        return("three");
    case '4':
        return("four");
    case '5':
        return("five");
    case '6':
        return("six");
    case '7':
        return("seven");
    case '8':
        return("eight");    
    case '9':
        return("nine");
    case '0':
        return("zero");
    default:
        break;
}
}
function printing() {
    a=document.getElementById("val").value
    if(a.length==1){
        s=ones(a)
    }
    else if(a.length==2){
        if(a=="11"){
            s="eleven"
        }
        else if(a=="12")
        {
            s="tweleve"
        }
        else if(a=="13"){
            s="thirteen"
        }
        else if(a=="15"){
            s="fifteen"
        }
        else if(a[0]=="1"){
            s=ones(a[1])
            s=s+"teen"
        }
        else{
            s=tens(a[0])
           if(a[1]=='0'){
            s=s+""
           }
           else{
            s=s+"-"
            s=s+ones(a[1])
           }
        }
    }
    else if(a.length==3){
        if(a=='100'){
            s=("hundred")
        }
        else{
            s=ones(a[0])
            s=s.concat(" hunderd ")
            s=s.concat(tens(a[1]))
            s=s.concat("-")
            s=s+ones(a[2])
        }
    }
    else if(a.length==4){
        if(a[0]=='1000'){
            s=("thousand")
            
        }
        else{
            s=ones(a[0])
            s=s+" thousand"
            s=s+ones(a[0])
            s=s+" hunderd "
            s=s+tens(a[1])
            s=s+"-"
            s=s+ones(a[2])
        }
    }
    document.getElementById("c").innerHTML=s;
}
