chrome.runtime.onMessage.addListener(gotmessage);
function gotmessage(message,sender,sendResponse)
{

    var text=message.txt;
    if(text.toLowerCase()=='continue')
    {
        document.getElementsByClassName('plnext-widget-btn btn btn-primary tripsummary-btn-primary tripSummary-btn-continue tripsummary-btn-validate validate-btn')[0].click();
    }
    var words=text.split(" ");

    //to fill from and to details.
    
    if(words[1].toLowerCase()=='from')
    {
        if(words[words.length-2]=='to')
        {
            words[words.length-2]=='2';
        }
        document.getElementById('flightSearchForm.tripType.oneWay').click();

        var fromcode=words[0].substr(0,3);
        var tocode=words[0].substr(3,3);

       
            //document.getElementById('FromTag').value=words[1];
           
            var input = document.getElementById('reservationFlightSearchForm.originAirport');
            input.select(); // you can also use input.focus()
             input.value="";
    
             var text = fromcode;
            var l=text.length;
            var current = 0;
            var time = 500;
    
    
            var write_text = function() {
            input.value+=text[current];
            if(current < l-1) {
                current++;
                setTimeout(function(){write_text()},time);
              } else {
                input.setAttribute('value',input.value);
               }
         }
    setTimeout(function(){write_text()},time);
    
    
    
            setTimeout(function(){ var input = document.getElementById('reservationFlightSearchForm.destinationAirport');
            input.select(); // you can also use input.focus()
            input.value="";
            
            var text = tocode;
            var l=text.length;
            var current = 0;
            var time = 500;
            
            
            var write_text = function() {
              input.value+=text[current];
              if(current < l-1) {
                current++;
                setTimeout(function(){write_text()},time);
              } else {
                input.setAttribute('value',input.value);
              }
            }
            setTimeout(function(){write_text()},time); }, 1000);
        

        for(var i=0;i<words.length;i++)
        {
            if((words[i]).toLowerCase()=='departing')
            {
                var date=words[i+1];
                var month=words[i+2];
                var count=words[i+3];
            }
        }
        

        if(((month).toLowerCase()=='january'))
        {
            date=date+'/'+'1'+'/'+'2019';
        }
        if(((month).toLowerCase()=='february'))
        {
            date=date+'/'+'2'+'/'+'2019';
        }
        if(((month).toLowerCase()=='march'))
        {
            date=date+'/'+'3'+'/'+'2019';
        }
        if(((month).toLowerCase()=='april'))
        {
            date=date+'/'+'4'+'/'+'2019';
        }
        if(((month).toLowerCase()=='may'))
        {
            date=date+'/'+'5'+'/'+'2019';
        }
        if(((month).toLowerCase()=='june'))
        {
            date=date+'/'+'6'+'/'+'2019';
        }
        if(((month).toLowerCase()=='july'))
        {
            date=date+'/'+'7'+'/'+'2019';
        }
        if(((month).toLowerCase()=='august'))
        {
            date=date+'/'+'8'+'/'+'2019';
        }
        if(((month).toLowerCase()=='september'))
        {
            date=date+'/'+'9'+'/'+'2019';
        }
        if(((month).toLowerCase()=='october'))
        {
            date=date+'/'+'10'+'/'+'2019';
        }
        if(((month).toLowerCase()=='november'))
        {
            date=date+'/'+'11'+'/'+'2019';
        }
        if(((month).toLowerCase()=='december'))
        {
            date=date+'/'+'12'+'/'+'2019';
        }
        setTimeout(function(){ document.getElementById('aa-leavingOn').value=date.toString(); }, 1500);
    
        setTimeout(function(){ document.getElementById('flightSearchForm.adultPassengerCount').value=count; }, 2000);
    
        setTimeout(function(){ document.getElementById('bookingModule-submit').click(); }, 3500);
    
        }


    

  // if I add filter
  /*
       if((words[0]).toLowerCase()=='filter')
       {
           var flights=document.getElementsByClassName('listItem  nonBundled  ');
           for(var i=0;i<flights.length;i++)
           {
               var prices=flights[i].getElementsByClassName('INR')[0].getAttribute('data-pr');
               console.log(prices);
               if(Number(prices) > Number(words[1]))
               {
                flights[i].parentNode.removeChild(flights[i]);
               }
           }
    
           var flights=document.getElementsByClassName('listItem nonBundled ');
           for(var i=0;i<flights.length;i++)
           {
               var prices=flights[i].getElementsByClassName('INR')[0].getAttribute('data-pr');
               console.log(prices);
               if(Number(prices) > Number(20000))
               {
                flights[i].parentNode.removeChild(flights[i]);
               }
           }
    
           var flights=document.getElementsByClassName('listItem nonBundled');
           for(var i=0;i<flights.length;i++)
           {
               var prices=flights[i].getElementsByClassName('INR')[0].getAttribute('data-pr');
               console.log(prices);
               if(Number(prices) > Number(20000))
               {
                flights[i].parentNode.removeChild(flights[i]);
               }
           }
    
           var flights=document.getElementsByClassName('listItem  nonBundled ');
           for(var i=0;i<flights.length;i++)
           {
               var prices=flights[i].getElementsByClassName('INR')[0].getAttribute('data-pr');
               console.log(prices);
               if(Number(prices) > Number(20000))
               {
                flights[i].parentNode.removeChild(flights[i]);
               }
           }
    
           
    
       }
*/


       // to book the flight.
    
        if((words[0]).toLowerCase()=='book')
        {var depttime;
           
                depttime=words[4][0]+words[4][1]+':'+words[4][2]+words[4][3];

        var arrivaltime;
               
                arrivaltime=words[6][0]+words[6][1]+':'+words[6][2]+words[6][3];
            if(words[1].toLowerCase()=='business'||words[1].toLowerCase()=='first')
            {
                var seat=words[1];
            }
        else
        var seat=words[1]+" "+words[2];

        var list=document.getElementsByClassName('bound-table-flightline  col-xs-24  ');
     var length=list.length;
    booking();
    
function booking(){
    for(var i=0;i<length;i++)
    {
    
        if((list[i].getElementsByClassName('time-from')[0].innerHTML==depttime.toString()) && list[i].getElementsByClassName('time-to')[0].innerHTML==arrivaltime.toString())
        {
            var cabinsavailable=list[i].getElementsByClassName('bound-table-cell-reco bound-table-cell-reco-available   ');
            var length2=cabinsavailable.length;
            for(var j=0;j<length2;j++)
            {
                if(cabinsavailable[j].getElementsByClassName('cell-reco-fareFamilyName')[0].innerHTML.toLowerCase()==seat.toLowerCase())
                {
                    cabinsavailable[j].click();
                    return;
                }
            }
        }
    }
}

//setTimeout(function(){ document.getElementsByClassName('plnext-widget-btn btn btn-primary tripsummary-btn-primary tripSummary-btn-continue tripsummary-btn-validate validate-btn')[0].click(); }, 5000);


        }

        //booking flight com[leted]

        //to fill details.
if(words[0].toLowerCase()=='details')
{
        let details=[
            {
                gender:"M",
                firstname:"sachin",
                lastname:"tendulkar",
                dob:"24/4/1973",
                email:"srtendulkar@gmail.com",
                phone:'9876543210'
            },
            {
                gender:"M",
                firstname:"virender",
                lastname:"sehwag",
                dob:"20/10/1978",
                email:"abcd@gmail.com",
                phone:'6543210987'
            },
            {
                gender:"M",
                firstname:"virat",
                lastname:"kohli",
                dob:"5/11/1988",
                email:"qwerrt@gmail.com",
                phone:'7654321098'
            },
            {
                gender:"F",
                firstname:"smriti",
                lastname:"mandhana",
                dob:"18/7/1996",
                email:"bvcxz@gmail.com",
                phone:'8765432109'
            },
        ]
    var firstindex=-1;
    var detailslength=details.length;
    var length3=words.length;
    length3=length3-1;
    
    for(var i=1;i<=length3;i++)
    {
         for(var j=0;j<detailslength;j++)
         {
             if(details[j].firstname.toLowerCase()==words[i].toLowerCase())
             {
                 if(firstindex=='-1')
                 {
                     firstindex=j;
                 }
                 
                break;
             }
         }
         console.log(details[j]);
         var a=i-1;


          function simulate(element, eventName)
{
    var options = extend(defaultOptions, arguments[2] || {});
    var oEvent, eventType = null;

    for (var name in eventMatchers)
    {
        if (eventMatchers[name].test(eventName)) { eventType = name; break; }
    }

    if (!eventType)
        throw new SyntaxError('Only HTMLEvents and MouseEvents interfaces are supported');

    if (document.createEvent)
    {
        oEvent = document.createEvent(eventType);
        if (eventType == 'HTMLEvents')
        {
            oEvent.initEvent(eventName, options.bubbles, options.cancelable);
        }
        else
        {
            oEvent.initMouseEvent(eventName, options.bubbles, options.cancelable, document.defaultView,
            options.button, options.pointerX, options.pointerY, options.pointerX, options.pointerY,
            options.ctrlKey, options.altKey, options.shiftKey, options.metaKey, options.button, element);
        }
        element.dispatchEvent(oEvent);
    }
    else
    {
        options.clientX = options.pointerX;
        options.clientY = options.pointerY;
        var evt = document.createEventObject();
        oEvent = extend(evt, options);
        element.fireEvent('on' + eventName, oEvent);
    }
    return element;
}

function extend(destination, source) {
    for (var property in source)
      destination[property] = source[property];
    return destination;
}

var eventMatchers = {
    'HTMLEvents': /^(?:load|unload|abort|error|select|change|submit|reset|focus|blur|resize|scroll)$/,
    'MouseEvents': /^(?:click|dblclick|mouse(?:down|up|over|move|out))$/
}
var defaultOptions = {
    pointerX: 0,
    pointerY: 0,
    button: 0,
    ctrlKey: false,
    altKey: false,
    shiftKey: false,
    metaKey: false,
    bubbles: true,
    cancelable: true
}


/*
setTimeout(function(){ document.getElementById('tpl8_widget-input-apimTravellers-traveller_'+a+'_ADT-PSPT_0-IDEN_Gender').value=details[j].gender;
simulate(document.getElementById("tpl8_widget-input-apimTravellers-traveller_"+a+"_ADT-PSPT_0-IDEN_Gender"), "click");  }, 250*i);


setTimeout(function(){ document.getElementById('tpl8_widget-input-apimTravellers-traveller_'+a+'_ADT-IDEN_FirstName').value=details[j].firstname; }, 500*i);


setTimeout(function(){ document.getElementById('tpl8_widget-input-apimTravellers-traveller_'+a+'_ADT-IDEN_LastName').value=details[j].lastname; }, 750*i);
*/




document.getElementById('tpl8_widget-input-apimTravellers-traveller_'+a+'_ADT-PSPT_0-IDEN_Gender').value=details[j].gender;
 simulate(document.getElementById("tpl8_widget-input-apimTravellers-traveller_"+a+"_ADT-PSPT_0-IDEN_Gender"), "click"); 


 document.getElementById('tpl8_widget-input-apimTravellers-traveller_'+a+'_ADT-IDEN_FirstName').value=details[j].firstname;
 //simulate(document.getElementById("tpl8_widget-input-apimTravellers-traveller_"+a+"_ADT-IDEN_FirstName"), "click"); 

 document.getElementById('tpl8_widget-input-apimTravellers-traveller_'+a+'_ADT-IDEN_LastName').value=details[j].lastname;
 //simulate(document.getElementById("tpl8_widget-input-apimTravellers-traveller_"+a+"_ADT-IDEN_LastName"), "click"); 

 var dobs=details[j].dob.split("/");


/*
 setTimeout(function(){  document.getElementById('tpl8_widget-input-apimTravellers-traveller_'+a+'_ADT-PSPT_0-IDEN_DateOfBirth-DateDay').value=dobs[0];
 simulate(document.getElementById("tpl8_widget-input-apimTravellers-traveller_"+a+"_ADT-PSPT_0-IDEN_DateOfBirth-DateDay"), "click"); }, 1000*i);


 setTimeout(function(){ document.getElementById('tpl8_widget-input-apimTravellers-traveller_'+a+'_ADT-PSPT_0-IDEN_DateOfBirth-DateMonth').value=dobs[1];
 simulate(document.getElementById("tpl8_widget-input-apimTravellers-traveller_"+a+"_ADT-PSPT_0-IDEN_DateOfBirth-DateMonth"), "click"); }, 1500*i);



 setTimeout(function(){ document.getElementById('tpl8_widget-input-apimTravellers-traveller_'+a+'_ADT-PSPT_0-IDEN_DateOfBirth-DateYear').value=dobs[2];
 simulate(document.getElementById("tpl8_widget-input-apimTravellers-traveller_"+a+"_ADT-PSPT_0-IDEN_DateOfBirth-DateYear"), "click"); }, 2000*i);


 setTimeout(function(){ document.getElementById('tpl8_widget-input-apimTravellers-contactInformation-PhoneMobileCode').value='+91';
 simulate(document.getElementById("tpl8_widget-input-apimTravellers-contactInformation-PhoneMobileCode"), "click"); }, 2500*i);
*/





 document.getElementById('tpl8_widget-input-apimTravellers-traveller_'+a+'_ADT-PSPT_0-IDEN_DateOfBirth-DateDay').value=dobs[0];
 simulate(document.getElementById("tpl8_widget-input-apimTravellers-traveller_"+a+"_ADT-PSPT_0-IDEN_DateOfBirth-DateDay"), "click"); 

 document.getElementById('tpl8_widget-input-apimTravellers-traveller_'+a+'_ADT-PSPT_0-IDEN_DateOfBirth-DateMonth').value=dobs[1];
 simulate(document.getElementById("tpl8_widget-input-apimTravellers-traveller_"+a+"_ADT-PSPT_0-IDEN_DateOfBirth-DateMonth"), "click"); 

 document.getElementById('tpl8_widget-input-apimTravellers-traveller_'+a+'_ADT-PSPT_0-IDEN_DateOfBirth-DateYear').value=dobs[2];
 simulate(document.getElementById("tpl8_widget-input-apimTravellers-traveller_"+a+"_ADT-PSPT_0-IDEN_DateOfBirth-DateYear"), "click"); 

 document.getElementById('tpl8_widget-input-apimTravellers-contactInformation-PhoneMobileCode').value='+91';
 simulate(document.getElementById("tpl8_widget-input-apimTravellers-contactInformation-PhoneMobileCode"), "click"); 

 }

/*
 setTimeout(function(){  document.getElementById('tpl8_widget-input-apimTravellers-contactInformation-Email').value=details[0].email;
 }, 3000*length3);


 setTimeout(function(){  document.getElementById('tpl8_widget-input-apimTravellers-contactInformation-EmailConfirm').value=details[0].email;
}, 3500);


 setTimeout(function(){ document.getElementById('tpl8_widget-input-apimTravellers-contactInformation-PhoneMobile').value=details[0].phone; }, 4000);
*/


 document.getElementById('tpl8_widget-input-apimTravellers-contactInformation-Email').value=details[firstindex].email;
 document.getElementById('tpl8_widget-input-apimTravellers-contactInformation-EmailConfirm').value=details[firstindex].email;
 document.getElementById('tpl8_widget-input-apimTravellers-contactInformation-PhoneMobile').value=details[firstindex].phone;


//setTimeout(function(){ document.getElementsByClassName('plnext-widget-btn btn btn-primary tripsummary-btn-primary tripSummary-btn-continue tripsummary-btn-validate validate-btn')[0].click(); }, 7500);


 //document.getElementsByClassName('plnext-widget-btn btn btn-primary tripsummary-btn-primary tripSummary-btn-continue tripsummary-btn-validate validate-btn')[0].click();


    }
  
    
    


 }

 
