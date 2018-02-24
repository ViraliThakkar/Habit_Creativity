
var app = angular.module("myApp", []); 
var x;
    function foo1()
    {
         x.text=document.getElementById("text1").value;
        
    }
app.controller('myCtrl', function($scope) {
    var keyy={
        number:1,
        text:"hi"
    };
    var numbers=[{number:1,text:""},{number:2,text:""},{number:3,text:""},{number:4,text:""},{number:5,text:""},{number:6,text:""},{number:7,text:""},{number:8,text:""},{number:9,text:""},{number:0,text:""}];
    $scope.message="hi";
    $scope.keyy=keyy;
    $scope.numbers=numbers;
    
    var countt=0;
    var prev=0;
    var arr=[0,0,0,0,0,0,0,0,0,0];
    var buttonInst;
    
    
    //jq
    var ans="";
    $("button").click(function(){
        ans+="Candidate: "+sessionStorage.getItem("txt")+'\r\n';
        for(var i=0;i<10;i++)
            {
                if(arr[i]!=0)
                    {
                        ans+="Number: ";
                        ans+=numbers[i-1].number;
                        ans+="\r\n"+numbers[i-1].text;
                        ans+="\r\n";
                    }
            }
        saveTextAsFile();
        
    });

    //jq
    function saveTextAsFile()
{
    var textToSave = ans;
    var textToSaveAsBlob = new Blob([textToSave], {type:"text/plain"});
    var textToSaveAsURL = window.URL.createObjectURL(textToSaveAsBlob);
    var fileNameToSaveAs = "aaaa";
 
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
}
    $scope.foo=function(element){
      // alert(sessionStorage.getItem('txt'));

    if(arr[numbers[parseInt(element.currentTarget.value)].number-1]==0){
           arr[numbers[parseInt(element.currentTarget.value)].number-1]=1;
            countt++;
        } 
if(sessionStorage.getItem('radio')=="f")
{
        
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
    }
}, 1000);
    
}
if(countt != prev){
	prev = countt;
	if(countt == 1){
		//alert(numbers[parseInt(element.currentTarget.value)-1]);
		numbers[parseInt(element.currentTarget.value)-1].text = "Write about Red\n";}	
	if(countt == 2)
		numbers[parseInt(element.currentTarget.value)-1].text = "Write about White\n";
	if(countt == 3)
		numbers[parseInt(element.currentTarget.value)-1].text = "Write about Blue\n";
	if(countt == 4)
		numbers[parseInt(element.currentTarget.value)-1].text = "Write about Yellow\n";
	if(countt == 5)
		numbers[parseInt(element.currentTarget.value)-1].text = "Write about Black\n";	
}
}
else
{
	
    
        document.getElementById("demo").innerHTML=" ";
          var now1 = new Date();
    now1.setMinutes(now1.getMinutes() + 3);
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
    }
}, 1000);
    //clearInterval(x1);
    if(countt>1){
        if( buttonInst!=numbers[parseInt(element.currentTarget.value)-1].number)
            document.getElementById(buttonInst).setAttribute('disabled', 'disabled');
	    alert(document.getElementById(buttonInst));
    }
             buttonInst=numbers[parseInt(element.currentTarget.value)-1].number
   
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
        
        document.getElementById("text1").value=numbers[parseInt(element.currentTarget.value)-1].text;        
        x=numbers[parseInt(element.currentTarget.value)-1];
       
    }

});