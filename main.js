let emails = JSON.parse(localStorage.getItem('emails'));

if (!emails) {
    emails = [];
}


function sendEmail() {
    let to = document.getElementById('to').value;
    let cc = $('#cc').val();
    let subject = $('#subject').val();
    let message = $('#text').val();
    let email = {to, cc, subject, message};
    
    emails.push(email);
    console.log(emails);
    localStorage.setItem('emails', JSON.stringify(emails));

}
/* 
function showInbox() {
    document.getElementById('inboxLink').classList.add('active');
    document.getElementById('composeLink').classList.remove('active');

    inbox.hidden = false;
    compose.hidden = true;
}

function showCompose() {
    inboxLink.classList.remove('active');
    composeLink.classList.add('active');

    inbox.hidden = true;
    compose.hidden = false;
} */

function switchScreen(reqScreen) {
    if (reqScreen == 'inbox') {
        inboxLink.classList.add('active');
        composeLink.classList.remove('active');
    
        inbox.hidden = false;
        compose.hidden = true;
        //reqScreen = 'compose';
        getEmails();
    }else if(reqScreen == 'compose'){
        document.getElementById('inboxLink').classList.remove('active');
        document.getElementById('composeLink').classList.add('active');
    
        inbox.hidden = true;
        compose.hidden = false;
        //reqScreen = 'inbox';
    }else{
        alert("There's a problem. Please contact with support service");
    }
}

function getEmails() {
    //<button type="button" class="list-group-item list-group-item-action">Morbi leo risus</button>
    mailList.innerHTML = "";
    //$('#mailList').html("");

    let mailBox = JSON.parse(localStorage.getItem('emails'));

    if (mailBox) {
        mailBox.map(val=>{
            $('#mailList').append(`<button type="button" class="list-group-item list-group-item-action">${val.subject}</button>`);
        });
    }
}

getEmails();

/*  
let mailArr = [
    {
        to: "bulent.kayici@bbb.com", 
        cc: "dddd", 
        subject: "wtreet", 
        message: "dsfsdfddd"
    },
    {
        to: "bulent.kayici@bbb.com", 
        cc: "dddd", 
        subject: "wtreet", 
        message: "dsfsdfddd"
    },
    {
        to: "bulent.kayici@bbb.com", 
        cc: "dddd", 
        subject: "wtreet", 
        message: "dsfsdfddd"
    }
]

*/