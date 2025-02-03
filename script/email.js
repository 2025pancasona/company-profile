var sm = 'it4FJSoxctP9vD908';

emailjs.init({
    publicKey: sm,
});

function sendMail() {
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;

    if(email.length !== 0 && subject.length !== 0 && subject.length !== 0){

        let params = {        
            email : email,
            subject : subject,
            message : message
        }
    
        emailjs.send("service_btfbnlq","template_nw70j5x",params).then(
            (response) => {
                let result = confirm("Mail has been send!");
                if (result === true) {
                    location.reload();
                } else {
                    location.reload();
                }
            },(error) => {
                let result = confirm("Cannot send mail for this time!");
                if (result === true) {
                    location.reload();
                } else {
                    location.reload();
                }
            },
        );
    }else{
        alert('Please completed the mail form!');
    }
}
