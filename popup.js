var phraseDiv;
  var startRecognizeOnceAsyncButton;

  // subscription key and region for speech services.
  var subscriptionKey, serviceRegion;
  var authorizationToken;
  var SpeechSDK;
  var recognizer;

  document.addEventListener("DOMContentLoaded", function () {
    startRecognizeOnceAsyncButton = document.getElementById("startRecognizeOnceAsyncButton");
    subscriptionKey = "0eb35f57315248bfbd00d7316646bee7";
    serviceRegion = "westus";
    phraseDiv = document.getElementById("phraseDiv");

    startRecognizeOnceAsyncButton.addEventListener("click", function () {
      startRecognizeOnceAsyncButton.disabled = true;
      phraseDiv.innerHTML = "";

      // if we got an authorization token, use the token. Otherwise use the provided subscription key
      var speechConfig;
      if (authorizationToken) {
        speechConfig = SpeechSDK.SpeechConfig.fromAuthorizationToken(authorizationToken, serviceRegion.value);
      } else {
        if (subscriptionKey.value === "" || subscriptionKey.value === "subscription") {
          alert("Please enter your Microsoft Cognitive Services Speech subscription key!");
          return;
        }
        speechConfig = SpeechSDK.SpeechConfig.fromSubscription(subscriptionKey.value, serviceRegion.value);
      }

      speechConfig.speechRecognitionLanguage = "en-US";
      var audioConfig  = SpeechSDK.AudioConfig.fromDefaultMicrophoneInput();
      recognizer = new SpeechSDK.SpeechRecognizer(speechConfig, audioConfig);

      recognizer.recognizeOnceAsync(
        function (result) {
          startRecognizeOnceAsyncButton.disabled = false;
          phraseDiv.innerHTML += result.text;
          window.console.log(result);

          recognizer.close();
          recognizer = undefined;
        },
        function (err) {
          startRecognizeOnceAsyncButton.disabled = false;
          phraseDiv.innerHTML += err;
          window.console.log(err);

          recognizer.close();
          recognizer = undefined;
        });
    });

    if (!!window.SpeechSDK) {
      SpeechSDK = window.SpeechSDK;
      startRecognizeOnceAsyncButton.disabled = false;

     document.getElementById('content').style.display = 'block';
      document.getElementById('warning').style.display = 'none';

      // in case we have a function for getting an authorization token, call it.
      if (typeof RequestAuthorizationToken === "function") {
          RequestAuthorizationToken();
      }
    }
  });

/*
var recogniser=new webkitSpeechRecognition();
window.onload=function(){
window.startbtn=document.getElementById('start');
window.stopbtn=document.getElementById('stop');
var form=document.getElementById('q');
var input=document.getElementById('result');
recogniser.continuous=true;
recogniser.lang='en-IN';
startbtn.onclick=function startlistening(){
    recogniser.start();
    
}
recogniser.onspeechstart=function(event){
    console.log('speech');
}
recogniser.onresult=function(event){
    var text=event.results[event.resultIndex][0].transcript;
    text=text.trim();
var departingindex;
     var n=text.startsWith("open");
     if(n)
     { 
         var website=text.substr(5);
            website=website.replace(/ /g,'');
          window.open("https://www."+website+".com/");
     }
   input.innerHTML=input.innerHTML + text;

   var a=text.toLowerCase().startsWith("from")

   //to fill the details of the plane
   
   if(a)
   {

 var fromcode='';
 var tocode='';

   var words=text.split(' ');

   var length=words.length;
 
   var city1=-1,city2=-1,country1=-1,country2=-1,fromcity="",fromcountry="",tocity="",tocountry="";



   for(var i=0;i<length;i++)
   {
       if(words[i].toLowerCase()=='city' && city1== -1 )
       {
           city1=i;
           //continue;
       }
       else if(words[i].toLowerCase()=='city' && city1!= -1 )
       {
           city2=i;
           
       }
       else if(words[i].toLowerCase()=='country' && country1== -1 )
       {
           country1=i;
       }
       else if(words[i].toLowerCase()=='country' && country1!= -1 )
       {
           country2=i;
       }
   }

  for(var i=city1+1;i<country1;i++)
  {
      words[i]=words[i].charAt(0).toUpperCase()+words[i].slice(1);
      fromcity+=words[i]+" ";
  }

 fromcity= fromcity.trim();

  for(var i=country1+1;i<city2-1;i++)
  {       words[i]=words[i].charAt(0).toUpperCase()+words[i].slice(1);

      fromcountry+=words[i]+" ";
  }
  fromcountry=fromcountry.trim();
  for(var i=city2+1;i<country2;i++)
  {       words[i]=words[i].charAt(0).toUpperCase()+words[i].slice(1);

      tocity+=words[i]+" ";
  }
  tocity=tocity.trim();
  for(var i=country2+1;i<length&&words[i].toLowerCase()!='departing';i++)
  {       words[i]=words[i].charAt(0).toUpperCase()+words[i].slice(1);

      tocountry+=words[i]+" ";
  }
  departingindex=i;
  tocountry=tocountry.trim();

  update();
  
async function update()
{
let response=await request();
console.log(response);

response.text().then(function(totaltext){

   totaltext=totaltext.split(/\r\n|\n/);
   var totallength=totaltext.length;
 
   for(i=1;i<totallength;i++)
   {
   var arr=totaltext[i].split(",");
  
   if(arr[2]==fromcity && arr[3]==fromcountry)
   {
        fromcode=arr[4];
        console.log(fromcode);
        break;
   }
   
   }

   for(i=1;i<totallength;i++)
   {
   var arr=totaltext[i].split(",");
  
   if(arr[2]==tocity && arr[3]==tocountry)
   {
       tocode=arr[4];
       console.log(tocode);
       break;
   }
   
   }
   var tex=fromcode+tocode+" "+text;
   console.log(tex);
   
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
          
       chrome.tabs.sendMessage(tabs[0].id,{txt:tex});
   });
});
}

function request()
{
const url=chrome.runtime.getURL('airport.csv');
console.log(url);
return fetch(url);
}

}


//to book the flight

   var b=text.toLowerCase().startsWith("book");
   if(b)
   {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
          
        chrome.tabs.sendMessage(tabs[0].id,{txt:text});
    });              
   }

   var c=text.toLowerCase().startsWith('details');
   if(c)
   {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
          
        chrome.tabs.sendMessage(tabs[0].id,{txt:text});
    });  
   }

   var d=text.toLowerCase().startsWith('continue');
   if(d)
   {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
          
        chrome.tabs.sendMessage(tabs[0].id,{txt:text});
    });  
   }


}


stopbtn.onclick=function stoplistening(){
   recogniser.stop();
}
}

*/

