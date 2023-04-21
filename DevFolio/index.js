

let submitButton=document.querySelector('[type="submit"]')

let personName=document.querySelector('[name="name"]');

let nonChar=document.querySelector(".err-para");

let inp=document.querySelector('input[name="name"]');




/* EventListener for send message button */
submitButton.addEventListener('click',()=>{

    var emailVerified=true;
var nameVerified=true;


    /*check weather it name includes any non characters or not */
    let name=personName.value;
    let checkNonChar=/[^A-Za-z\ ]/.test(name);
    if(checkNonChar){
        nameVerified=false;

        nonChar.style.display="block";
        
        inp.style.border='1px solid red';
    }else{
        
        var thirdChar=personName.value.charAt(2);

        if(!thirdChar){
            nameVerified=false;
            
            nonChar.style.display="block";

            nonChar.innerText="At least three characters needed";
        
            inp.style.border='1px solid red';

        }else{
            
            nonChar.style.display="none"
            inp.style.border="1px solid #ced4da";
        }
       
       
    }



    /*  Email validation    */
    let EmailInput=document.querySelector('input[name="email"]').value;
    let errPara2=document.querySelector('.err-para-2');

    console.log("emailinput"+EmailInput+" errpara2"+errPara2);

    if(!EmailInput){
        emailVerified=false;
console.log('hlelo')
        errPara2.style.display="block";
    }else{
        console.log("2nd else")
        let regExp=/^([A-Za-z0-9/.-_]+)@([A-Za-z]+).([A-Za-z]+)$/;
        var EmailValid=regExp.test(EmailInput);  
        console.log(EmailValid)

        if(!EmailValid){
            emailVerified=false;
            errPara2.innerText="E-mail id is not valid";
            errPara2.style.display="block";
        }
        if(EmailValid){
            console.log(EmailValid)
            errPara2.style.display="none"
        }
    }
   


    let subjectInput=document.querySelector('input[name="subject"]').value;
    let errPara3=document.querySelector('.err-para-3');

    var subjectVerified=true;

   if(!subjectInput){
    subjectVerified=false;

    errPara3.style.display="block";
   }else{

    if(!subjectInput.charAt(9)){
        subjectVerified=false;

        errPara3.style.display="block";
        errPara3.innerText="Enter at least 10 characters.";
    }else{
        errPara3.style.display="none"
    }
}


/*   message    */

let messageInput=document.querySelector('textarea[name="message"]').value;
let errPara4=document.querySelector('.err-para-4');


var messageVerified=true; 

if(!messageInput){
    messageVerified=false;

    errPara4.style.display="block";
   }else{

    if(!messageInput.charAt(29)){
        messageVerified=false;

        errPara4.style.display="block";
        errPara4.innerText="Enter at least 30 characters.";
    }else{
        errPara4.style.display="none";
    }
}



console.log("subject");
console.log(subjectVerified+" "+nameVerified+" "+emailVerified+" "+messageVerified);

if(subjectVerified,nameVerified,emailVerified,messageVerified){


    


}


})







