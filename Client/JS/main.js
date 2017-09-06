"use strict";

var App = 
{
    debugMode: 0,//0=no, 1=yes, 2=special deep debug :-(~)
    serverApi: '../../Server/CrmAPI.php',
    navTemplateView: null,
    currentObject: null // each time containes a different object that currently active by user selection   
}



$(document).ready(function()
{
    try 
    {
        $( ".navbar li" ).click( function( event ) 
        {
            var objType;

            if( document.title == "CRM Project")
            {
                objType = this.id;
                navigateMainNav( objType );
                
            }else{

                let requiredAction = this.className;
                
                if( App.debugMode == 2)
                    RunUserSelection( "customer", "select" );//debug
                else
                    RunUserSelection( objType, requiredAction );
            }
        });
    }
    catch( err ) 
    {
        alert( "Error: " + err.message);
    }
})

function RunUserSelection( objType, requiredAction )
{
    
   App.currentObject = new factory( objType );

    if( ! App.currentObject )
    {
        notify();
        return false;
    }

    $.ajax( {
                type: 'POST',

                url: App.serverApi,

                data: {
                    userInput: requiredAction, 
                        data: JSON.stringify(  App.currentObject.getDataObj())
                    },

                success: function( responseData ) 
                {
                    if( app.debugMode )                     
                        console.log("CrmApi response: " + data);
                    
                    let succeed = processServerResponse(  JSON.parse(responseData),
                                                          requiredAction,
                                                          objType );                
                }
            });
}

function processServerResponse(  responseData, requiredAction, objType )
{


}


function navigateMainNav( selectedObj )
{
    window.location.href = '../html/templates/navTemplate.html' ; // load html
    document.title = "CRM " + selectedObj ;
    document.querySelector("p").innerHTML = selectedObj;
    //$(".objectName p").html( selectedObj );
    $("nav").attr('id', 'objectName');

    
}


function factory( objType)
{
    let type = objType;

    /* each object that is created in the factory should implement 
       its own runValidation() func !
       */

    this.createObj = function( type )
    {

        var obj;

        switch( objType )
        {
            case "lead":
            {
               obj = new Lead();
               break;
            }
            case "prospect":
            {
               obj = new Prospect();
               break;
            }
            case "customer":
            {
                obj = new Customer();
                break;
            }
            case "product":
            {
                obj = new Product();
                break;
            }
            case "profession":
            {
                obj = new Profession();
                break;
            }
            default:
            {
                notify("Factory didnt recognize object type. object was not created.")
                break;
            }
        }

        if( App.debugMode )
            console.log( JSON.stringify( obj ) );

        // if( obj.runValidation() )
        // {
            return obj;
        // }
        // else
        // {
        //     throw( objType + "runValidation failed.");
        // }
    }();
}

function Customer(  customer_name, 
                    customer_phone, 
                    customer_profession, 
                    prospect_id, 
                    id=0)
{

    this.data = {
        id: id,
        customer_name: customer_name, 
        customer_phone: customer_phone,
        customer_profession: customer_profession,
        prospect_id: prospect_id
        
    };


    const runValidation = function()
    {

        //TODO...

        alert("runValidation"); 
    }

    const getDataObj = function()
    {
        return this.data;
    }
        return {
            runValidation: runValidation,
            getDataObj: getDataObj
        }
}




    //Customer.show = function() {
    /* 
    $.ajax(app.screensApi).done(function(data) {
    if (app.debugMode) {
    console.log("screensApi response");
    console.log(data);
    }
    data = JSON.parse(data);
    // step 1
    for(let i=0; i < data.length; i++) {
    screensArray.push(new Screen(
    data[i].manufacturer,
    data[i].price,  
    data[i].model,
    data[i].size
    ));
    }

    $.ajax('templates/screen-template.html')
    .done(function(data) {
    for(let i=0; i < screensArray.length; i++) {
    let template = data;
    template = template.replace("{{manufacturer}}", screensArray[i].manufacturer);
    template = template.replace("{{price}}", screensArray[i].price);
    template = template.replace("{{model}}", screensArray[i].model);
    template = template.replace("{{size}}", screensArray[i].size);

    $('.screens').append(template);
    }
    });*/



