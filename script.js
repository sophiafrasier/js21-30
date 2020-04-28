//Sophie Frasier, Javascript problems 21-30, 4/28/20

//problem 21
function countEvens(arr) {
    var count= 0;
    for(var i=0; i< arr.length; i++){
        if(arr[i]%2 ===0){
            count++;
        }
    }
    return count;
}

//problem 22
function countHi(str){
    var count=0;
    for(var i = 0; i < str.length; i++) {
        if(str[i]=="h" && str[i+1]=="i")
            count++;
    }

    return count;
}

//problem 23
function no14(arr){
    var has1 = false;
    var has4 = false;
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] == 1)
            has1 = true;

        if(arr[i] == 4)
            has4 = true;
    }

    return !has1 || !has4;
}

//problem 24
function either24(arr){
    var has22 = false;
    var has44 = false;

    for(var i = 0; i < arr.length; i++) {
        if(arr[i] == 2 && arr[i+1] == 2)
            has22 = true;

        if(arr[i] == 4 && arr[i+1] == 4)
            has44 = true;
    }

    return has22 != has44;
}

//problem 25 NOT DONE
function makeChocolate(small, big, goal){
    if(goal %5 > small){
        return -1;
    }
    if(goal> big*5 +small){
        return -1;
    }
    if(goal-big *5 <= 0){
        return goal %5;
    }
    return goal-big *5;
}

//problem 26
function luckySum(a, b, c) {
    if(a == 13)
        return 0;

    if(b == 13)
        return a;

    if(c == 13)
        return a + b;

    return a + b + c;
}

//problem 27 NOT DONE
function maxBlock(str){
    var count=1;
    var max=0;

    if(str.length==0){
        return 0;
    }

    for(var i=0; i<str.length; i++){
        if(i + 2 <= str.length && str.substring(i, i + 1)==(str.substring(i + 1, i + 2))){
            count++;
        }else{
            if(count>= max){
                max=count;
            }
            count=1;
        }
    }
    return max;
}

//problem 28
function linearIn(arr1, arr2) {
    var i = 0;
    var j = 0;

    while(i < arr2.length && j < arr1.length) {
        if(arr2[i] > arr1[j]) {
            j++;
        } else if(arr2[i] < arr1[j]) {
            return false;
        } else {
            i++;
        }
    }

    if(i != arr2.length){
        return false;
    }

    return true;
}


//problem 29
function countTriple(str) {
    var count = 0;

    for(var i = 0; i < str.length; i++) {
        if(str[i] == str[i+1] && str[i+2]==str[i]){
            count++;
        }

    }

    return count;
}


//problem 30 NOT DONE
function sameEnds(str){
    var one= str.length;
    var end= "";
    var temp= "";

    for(var i=0; i< str.length; i++){
        temp+= str[i];
        var two= temp.length;
        if(i<one /2 && temp==(str.substring(one-two, one))){
            end=temp;
        }
    }
    return end;
}



function tester(){
    document.getElementById("output").innerHTML += countEvens(true, false);
    document.getElementById("output").innerHTML += countHi(true, false);
    document.getElementById("output").innerHTML += no14(true, false);
    document.getElementById("output").innerHTML += either24(true, false);
    document.getElementById("output").innerHTML += makeChocolate(true, false);
    document.getElementById("output").innerHTML += luckySum(true, false);
    document.getElementById("output").innerHTML += maxBlock(true, false);
    document.getElementById("output").innerHTML += linearIn(true, false);
    document.getElementById("output").innerHTML += countTriple(true, false);
    document.getElementById("output").innerHTML += sameEnds(true, false);
}