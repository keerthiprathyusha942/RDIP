function insert(num) {
    document.form.textview.value = document.form.textview.value + num
}

function equal() {
    var exp = document.form.textview.value;
    if (exp) {
        document.form.textview.value = eval(exp)
    }
    return eval(exp);
}

function clean() {
    document.form.textview.value = "";
}

function root() {
    var ans;
    ans = Math.pow(form.textview.value, 1 / 2);
    form.textview.value = ans.toFixed(3);
    return ans.toFixed(3);
}

function absol() {
    var x = Math.abs(form.textview.value);
    form.textview.value = x;
    return x;
}

function validateform(){  
var name=document.myform.name.value;  
var phone=document.myform.phone.value;  
var email=document.myform.email.value;
var regex = /^[A-Za-z]+$/
var isValid = regex.test(document.getElementById("txtName").value);
var atposition=email.indexOf("@");  
var dotposition=email.lastIndexOf("."); 
if (name==null || name==""){  
  alert("Name can't be blank");  
  return false;  
}
 else if (!isValid) {
            alert("Only Alphabets allowed.");
}else if (phone==null || phone==""){  
  alert("Phone Number can't be blank");  
  return false;
  } 
  else if(phone.length<6){  
  alert("Phone number must be 10 digits.");  
  return false;  
  }else if (email==null || email==""){  
  alert("Email can't be blank");  
  return false;
  }else if (isNaN(phone)){
  document.getElementById("numloc").innerHTML="Enter Numeric value only";
  return false;
}else if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
  alert("Please enter a valid e-mail address \n atpostion:"+atposition+"\n dotposition:"+dotposition);  
  return false;  
  } 
  else{
   document.writeln("<b>Thank you! You have just entered the following:</b>");
            document.writeln("<pre>");
            document.writeln("<b>Name             : </b>" + name);
            document.writeln("<b>Email            : </b>" + email);
            document.writeln("<b>phone number     : </b>" + phone);
} 
}


    function anagram(txt1,txt2)
{
var length1 = txt1.split(' ').length-1;
length1=parseInt(length1)
i=length1
var length2 = txt2.split(' ').length-1;
length2=parseInt(length2)
j=length2

if(txt1==txt2)
{
return true;
}

else
{

var newstr1 = txt1.toLowerCase().split("").sort().join();

var newstr2 = txt2.toLowerCase().split("").sort().join();

if(length1 >1 && length1==i)
{
n1=newstr1.slice(i+2);

}
else if(length1==1 && length1==i)
{
n1=newstr1.slice(i+1);
}
else
{
n1=newstr1
}

if(length2>1 && length2==j)
{
n2=newstr2.slice(j+2);

}
else if(length2==1 && length2==j)
{
n2=newstr2.slice(j+1);
}
else
{
n2=newstr2;
}

if(n1 == n2){
return (true);
}
else{
return (false);
}
}
}


function checkPalindrome() {
var revStr = "";
var str = document.getElementById("str").value;
var i = str.length;
for(var j=i; j>=0; j--) {
revStr = revStr+str.charAt(j);
}
if(str == revStr) {
alert(str+" is Palindrome");
} else {
alert(str+" is not a Palindrome");
}
}


function first()
{
  var g1=Math.floor(Math.random()*(1000))
  document.getElementById("num1").value=g1;
  return g1;
}
function second()
{
  var g2=Math.floor(Math.random()*(1000))
  document.getElementById("num2").value=g2;
  return g2;
}
function survival(a,b)
{
  a=a%10;
  b=b%10;
  var map1 = new Map([[0,1],[1,1],[2,2],[3,3],[4,1],[5,1],[6,2],[7,2],[8,3],[9,3]]);
  n1=map1.get(a);
  n2=map1.get(b);

  var map = new Map([[1,"Human"],[2,"Cockroach"],[3,"Nuclear Bomb"],[4,"Tie"]]);

  if(n1==3 && n2==3 ||
   n1==1 && n2==1 ||
    n1==2 && n2==2)
  {
    if(n1==1 && n2==1)
    {
      document.getElementById("return").innerHTML=map.get(1)+" Vs "+map.get(1);
    return "So its a,"+(map.get(4));
  }
  if(n1==2 && n2==2)
    {
      document.getElementById("return").innerHTML=map.get(2)+" Vs "+map.get(2);
    return "So its a,"+(map.get(4));
  }
  if(n1==3 && n2==3)
    {
      document.getElementById("return").innerHTML=map.get(3)+" Vs "+map.get(3);
    return ""+(map.get(4));
  }
  }
  else if(n1==1 && n2==2 ||
     n1==2 && n2==1)
  {
    document.getElementById("return").innerHTML=map.get(1)+" Vs "+map.get(2);
    return "Winner is : "+(map.get(1));
  }
   else if(n1==2 && n2==3 ||
    n1==3 && n2==2)
  {
    document.getElementById("return").innerHTML=map.get(2)+" Vs "+map.get(3);
    return "Winner is : "+(map.get(2));
  }
   else if(n1==1 && n2==3 ||
    n1==3 && n2==1)
  {
      document.getElementById("return").innerHTML=map.get(1)+" Vs "+map.get(3);
    return "Winner is : "+(map.get(3));
  }

}



