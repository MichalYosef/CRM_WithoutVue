"use strict";

/* Model View Controller Pattern with Form Example */

var crmMVC = {

    /* Model Handles the Data */

        Model = {
            data: {
                userName : "Dummy Guy",
                userNumber : "000000000"
            }, 
            setData : function( d ){
                this.data.userName = d.userName;
                this.data.userNumber = d.userNumber;
            },
            getData : function(){
                return data;
            }
        },

    /* View Handles the Display */

        View = {
            userName : document.querySelector( "#inputUserName" ),
            userNumber : document.querySelector( "#inputUserNumber" ),
            update: function( M ){
                this.userName.value = M.data.userName;
                this.userNumber.value = M.data.userNumber;
            }
        },

    /* Controller Handles the Events */

        Controller = {
            model: M,
            view: V,
            handler: function(){
                this.view.update( this.model );
            }
    }
}

document.querySelector( ".submitBtn" ).addEventListener("click", function(){
    C.handler.call( C );
}); 



