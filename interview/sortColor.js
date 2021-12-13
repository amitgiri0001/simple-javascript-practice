const colors = 'WWRRWRWRW';


function sort(str) {
 str = str.split('');
 let i = 0;
 let curR = null;
 let curW = null;
 while(i < str.length) {
     if(str[i] == 'R' && curR == null) {
        curR = i;
     }

     if(str[str.length - 1 - i] == 'W' && curW == null) {
        curW = str.length - 1 - i;
     }

     if(curR != null && curW  != null) {
        str[curW] = 'R';
        str[curR] = 'W';
        curR = null;
        curW = null;
     }
     i++;
 }

 console.log(str);
}

sort(colors);