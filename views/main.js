
    const createUserForm = document.getElementById('createUserForm');

    createUserForm.addEventListener('submit', (event) => {
    event.preventDefault();

    //Get fields and check validities
    const firstName = document.getElementById('name').value;
    if (firstName == '') {
        firstName.reportValidity();
        return false;
    }

    const middleName = document.getElementById('middleName').value;
    
    const lastName = document.getElementById('lastName').value;
    if (lastName == '') {
        lastName.reportValidity();
        return false;
    }

    const email = document.getElementById('email').value;
    if (email == '') {
        email.reportValidity();
        return false;
    }

    const nin = document.getElementById('nin').value;
    if (nin == '') {
        nin.reportValidity();
        return false;
    }
    
    const nationality = document.getElementById('nationality').value;
    
    const address = document.getElementById('address').value;

    const profession =  document.getElementById('profession').value;

    


    //start the button spinner
    document.getElementById("submitCreateUserForm").classList.add("is-loading");

    //prepare init for fetch
    const init = {
        method: 'Post',
        headers: {
            'Content-Type': 'application/json'
        },
        //credentials: 'same-origin',
        body: JSON.stringify({ firstName,lastName,nationality,profession })
    }

    //call fetch
    fetch('/biodata', init)
        .then(response => response.json())
        .then(data => {
            //alert(JSON.stringify(data))
            //remove spinner class
            document.getElementById("submitCreateUserForm").classList.remove("is-loading");
            //set notification
            document.getElementById("notificationMessage").innerHTML = 'Citizen creation successful';
            //add notification color class sent
            document.getElementById("notification").classList.add("is-success");
            //remove is-hidden from notificationWrapper
            document.getElementById("notification").classList.remove("is-hidden");

        })
        .catch(error => {
            //remove spinner class
            document.getElementById("submitCreateUserForm").classList.remove("is-loading");

            document.getElementById("notificationMessage").innerHTML = error.message;
            //add notification color class sent
            document.getElementById("notification").classList.add("is-danger");
            //remove is-hidden from notificationWrapper
            document.getElementById("notification").classList.remove("is-hidden");

        });
    })
