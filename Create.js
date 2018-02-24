var app = angular.module("myApp", []); 
var x;
    function foo1()
    {
         x.text=document.getElementById("text1").value;
        
    }
function yoyo()
{
     $('#screen, #modal').show();
     responsiveVoice.speak("You have 15 minutes to complete 5 word generation tasks. As you can see, there are 10 buttons on the left side of the screen. Once you click a button, a word will appear on the right side. Please generate as many things associated with the given word as you can and type your answers into the blank space provided. Click the Done button when you’d like to stop the current task. Then click another button of your choice until you’ve completed a total of 5 tasks. During the 15-minute period, feel free to go back to any previous task. You can edit your answers or add new ones at any time by clicking the corresponding buttons. It’s up to you how you go about completing the 5 tasks. A timer is located at the bottom right corner. The answers will be saved automatically when time is up. Okay, click the ‘START’ button.");
}

function yoyo1()
{
     $('#screen, #modal').hide();
    responsiveVoice.cancel();
}
app.controller('myCtrl', function($scope) {
    
    
    yoyo();

    
    
    $scope.myButton0 = 'w3-black';
    $scope.myButton1 = 'w3-black';
    $scope.myButton2 = 'w3-black';
    $scope.myButton3 = 'w3-black';
    $scope.myButton4 = 'w3-black';
    $scope.myButton5 = 'w3-black';
    $scope.myButton6 = 'w3-black';
    $scope.myButton7 = 'w3-black';
    $scope.myButton9 = 'w3-black';
    $scope.myButton8 = 'w3-black';
    var counter=[0,0,0,0,0,0,0,0,0,0];
    var keyy={
        number:1,
        text:"hi"
    };
	var pietm=1;
    var numbers=[{number:0,text:""},{number:1,text:""},{number:2,text:""},{number:3,text:""},{number:4,text:""},{number:5,text:""},{number:6,text:""},{number:7,text:""},{number:8,text:""},{number:9,text:""}];
    $scope.message="hi";
    $scope.keyy=keyy;
    $scope.numbers=numbers;
    var now,now1,countDownDate, distance, minutes, seconds;
    var countt=0;
    var prev=0;
    var arr=[0,0,0,0,0,0,0,0,0,0];
    var buttonInst;
    $scope.tpp="fff";
    
    //jq
    var ans="";
   // var ans1="";
    $("button").click(function(){
      //  ans1="Candidate: "+sessionStorage.getItem("txt")+"\r\n";
        for(var i=0;i<10;i++)
            {
                if(arr[i]!=0)
                    {
                        ans+="Number: ";
                        ans+=numbers[i].number+":";
                        ans+="\r\n"+numbers[i].text;
                        ans+="\r\n|";
                    }
            }
       // alert("dd");
     //   var t="d";
     
       if(ans!="" && ans.length!=0 && ans){
            
sessionStorage.setItem("answer", ans);
           var tr='counter: '+counter;
           sessionStorage.setItem("counter", tr);
       // alert(sessionStorage.getItem('answer'));
        }
        
       // alert(sessionStorage.getItem("answer"));
       // saveTextAsFile();
       //  window.location.href = "action.php?w1=" + ans;

    /*    $.ajax({
      url: "http://localhost/test.php?w1="+ans
    }).done(function(data) {
      console.log(data);
    });*/
         $.ajax({
      url: "http://localhost/test.php?w1="+sessionStorage.getItem("answer")+"&w2="+sessionStorage.getItem("counter")
    }).done(function(data) {
      console.log(data);
    });
        
        
      window.location.href='https://usc.qualtrics.com/jfe/form/SV_24yFA42CtcXmizz';
    });

    //jq
/*    function saveTextAsFile()
{
    var textToSave = ans;
    var textToSaveAsBlob = new Blob([textToSave], {type:"text/plain"});
    var textToSaveAsURL = window.URL.createObjectURL(textToSaveAsBlob);
    var fileNameToSaveAs = "User";
 
    var downloadLink = document.createElement("a");
    downloadLink.download = fileNameToSaveAs;
    downloadLink.innerHTML = "Download File";
    downloadLink.href = textToSaveAsURL;
    downloadLink.onclick = destroyClickedElement;
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);
 
    downloadLink.click();
}
    function destroyClickedElement(event)
{
    document.body.removeChild(event.target);
}*/
	var x1;
    $scope.foo=function(element){
        counter[numbers[parseInt(element.currentTarget.value)].number] += 1;
 if(numbers[parseInt(element.currentTarget.value)].number==0)
     $scope.myButton0 = "w3-yellow";
     if(numbers[parseInt(element.currentTarget.value)].number==1)
         $scope.myButton1 = "w3-yellow";
if(numbers[parseInt(element.currentTarget.value)].number==2)
    $scope.myButton2 = "w3-yellow";
    if(numbers[parseInt(element.currentTarget.value)].number==3)
        $scope.myButton3 = "w3-yellow";
        if(numbers[parseInt(element.currentTarget.value)].number==4)
            $scope.myButton4 = "w3-yellow";
            if(numbers[parseInt(element.currentTarget.value)].number==5)
                $scope.myButton5 = "w3-yellow";
                if(numbers[parseInt(element.currentTarget.value)].number==6)
                    $scope.myButton6 = "w3-yellow";
                    if(numbers[parseInt(element.currentTarget.value)].number==7)
                        $scope.myButton7 = "w3-yellow";
                        if(numbers[parseInt(element.currentTarget.value)].number==8)
                            $scope.myButton8 = "w3-yellow";
                            if(numbers[parseInt(element.currentTarget.value)].number==9)
                                $scope.myButton9 = "w3-yellow";
                               
     
      // alert(sessionStorage.getItem('txt'));
	
    if(arr[numbers[parseInt(element.currentTarget.value)].number]==0){
           arr[numbers[parseInt(element.currentTarget.value)].number]=1;
		var tt = numbers[parseInt(element.currentTarget.value)].number;
            countt++;
        } 
//element.currentTarget.value.style.color = "red";
if(sessionStorage.getItem('radio')=="f")
{

if(pietm==1){
document.getElementById("mySubmit").disabled = true;
var loader = document.getElementById('loader')
  , border = document.getElementById('border')
  , α = 0
  , π = Math.PI
  , t = 60*2.7;

(function draw() {
  α++;
  α %= 360;
  var r = ( α * π / 180 )
    , x = Math.sin( r ) * 125
    , y = Math.cos( r ) * - 125
    , mid = ( α > 180 ) ? 1 : 0
    , anim = 'M 0 0 v -125 A 125 125 1 ' 
           + mid + ' 1 ' 
           +  x  + ' ' 
           +  y  + ' z';
  //[x,y].forEach(function( d ){
  //  d = Math.round( d * 1e3 ) / 1e3;
  //});
 
  loader.setAttribute( 'd', anim );
  border.setAttribute( 'd', anim );
  if(α==359)
  {
    document.getElementById("mySubmit").disabled = false; 
      document.getElementById("text1").disabled=true;
       document.getElementById("1").disabled=true;
       document.getElementById("2").disabled=true;
       document.getElementById("3").disabled=true;
       document.getElementById("4").disabled=true;
       document.getElementById("5").disabled=true;
       document.getElementById("6").disabled=true;
       document.getElementById("7").disabled=true;
       document.getElementById("8").disabled=true;
       document.getElementById("9").disabled=true;
       document.getElementById("0").disabled=true;
  }
else{
  setTimeout(draw, t); // Redraw
}
})();
    pietm=0;
}
	var tt = numbers[parseInt(element.currentTarget.value)].number;
	document.getElementById(tt).style.color = "red";
        document.getElementById("text1").disabled=false;
        if(countt==1){
          var now1 = new Date();
    now1.setMinutes(now1.getMinutes() + 15);
    var countDownDate = now1.getTime();
        
        var x1 = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("demo").innerHTML = minutes + "m " + seconds + "s ";
    if (distance < 0) {
        clearInterval(x1);
        document.getElementById("demo").innerHTML = "EXPIRED";
	document.getElementById("text1").disabled=true;
    }
}, 1000);
    
}
if(countt != prev){
	prev = countt;
	if(countt == 1){
		//alert(numbers[parseInt(element.currentTarget.value)]);
		numbers[parseInt(element.currentTarget.value)].text = "Red\n";}	
	if(countt == 2)
		numbers[parseInt(element.currentTarget.value)].text = "White\n";
	if(countt == 3)
		numbers[parseInt(element.currentTarget.value)].text = "Blue\n";
	if(countt == 4)
		numbers[parseInt(element.currentTarget.value)].text = "Yellow\n";
	if(countt == 5)
		numbers[parseInt(element.currentTarget.value)].text = "Black\n";	

//alert($scope.tpp);
}
    var lines = numbers[parseInt(element.currentTarget.value)].text.split('\n');
        //document.getElementById("tpp").innerHTML=numbers[parseInt(element.currentTarget.value)].text;
    document.getElementById("tpp").innerHTML=lines[0];
   $scope.tpp= numbers[parseInt(element.currentTarget.value)].text;
}
else
{
	
	clearTimeout(x1);
    	document.getElementById("text1").disabled=false;
        document.getElementById("demo").innerHTML=" ";
          now1 = new Date();
    now1.setMinutes(now1.getMinutes() + 3);
    countDownDate = now1.getTime();
        
        x1 = setInterval(function() {
    now = new Date().getTime();
    distance = countDownDate - now;
    minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("demo").innerHTML = minutes + "m " + seconds + "s ";
    if (distance < 0) {
        clearInterval(x1);
        document.getElementById("demo").innerHTML = "EXPIRED";
	document.getElementById("text1").disabled=true;
    }
}, 1000);
    //clearInterval(x1);

	if(countt == 1){
		numbers[parseInt(element.currentTarget.value)].text = "Red\n";
		document.getElementById(4).disabled=false;
		}	
	if(countt == 2){
		numbers[parseInt(element.currentTarget.value)].text = "White\n";
		document.getElementById(7).disabled=false;
		}
	if(countt == 3){
		numbers[parseInt(element.currentTarget.value)].text = "Blue\n";
		document.getElementById(3).disabled=false;
		}
	if(countt == 4){
		numbers[parseInt(element.currentTarget.value)].text = "Yellow\n";
		document.getElementById(0).disabled=false;
		}
	if(countt == 5){
		numbers[parseInt(element.currentTarget.value)].text = "Black\n"
	}

   /* if(countt>1){
        if( buttonInst!=numbers[parseInt(element.currentTarget.value)].number)
            document.getElementById(buttonInst).setAttribute('disabled', 'disabled');
	    //alert(document.getElementById(buttonInst));
    }*/
             buttonInst=numbers[parseInt(element.currentTarget.value)].number;
	     document.getElementById(buttonInst).disabled=true;
	
   
}


        var i=0;
        if(countt==5)
            {
                for(var i=0;i<10;i++)
                    {
                        if(arr[i]==0)
                            document.getElementById(i).setAttribute('disabled', 'disabled');
                            
                    }
            }
        
        document.getElementById("text1").value=numbers[parseInt(element.currentTarget.value)].text;        
        x=numbers[parseInt(element.currentTarget.value)];
       
    }

});