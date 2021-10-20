var creds = [
    {
        'applicationname' : 'GitHub',
        'username' : 'Lokesh-Kanna',
        'password' : '3216546',
        'email' : 'lokeshkanna.work@gmail.com'
    }, 
    {
        'applicationname' : 'Twitter',
        'username' : 'Lokeshkanna',
        'password' : '4343843!',
        'email' : 'lokeshkanna@gmail.com'
    }
];


let input = document.getElementById('inputField').value;


function getDetails() {
    let detailsAvailible = true;
    let detailsLocation = 0;
    for (let i=0; i<creds.length; i++){
        if(creds[i].applicationname.toLocaleLowerCase() == input.toLowerCase()) {
            detailsLocation = i;
            detailsAvailible = true;
            console.log(true);
            break;
        }
        else {
            detailsAvailible = false;
        }
     };
     if(detailsAvailible == true) {
            let application = creds[detailsLocation].applicationname;
            let image = input;
            let username = creds[detailsLocation].username;
            let password = creds[detailsLocation].password;
            let email = creds[detailsLocation].email;
            document.getElementById('img').setAttribute('class', `fa fa-${image} fa-5x mx-auto `)
            document.getElementById('appname').innerHTML = `Details of your ${application} account`;
            document.getElementById('details').innerHTML = `User Name: ${username} <br>
                                                            Password:  ${password} <br>
                                                            email:     ${email} <br>`;
            let form = document.getElementById('form');
            form.reset();
        }
    else {
        let a = document.getElementById('appname');
            a.innerHTML = `You don't have any details on your ${input} account.`
            let b = document.getElementById('details');
            b.innerHTML = ''
            let form = document.getElementById('form');
            form.reset();
        alert('bad request');
    }
}


 
