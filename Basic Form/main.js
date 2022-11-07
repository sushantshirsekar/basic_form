const formInput = document.querySelector('#my_form');
        const firstN = document.querySelector('#fname');
        const mailInput = document.querySelector('#mail');
        const phoneInput = document.querySelector('#phone');
        const timeInput = document.querySelector('#time');
        const msg = document.querySelector('.msg');
        const afterSubmit = document.querySelector('.submitted');
        

        formInput.addEventListener('submit', addValues)

        function addValues(e) {
            e.preventDefault();
            if (firstN.value === '' || mailInput.value === '' || phoneInput.value === '' || timeInput.value === '')
            {
                msg.innerHTML = '<p>Please Enter all fields</p>';

                setTimeout(() => msg.remove(), 3000);
            }

            console.log(firstN.value);
            console.log(mailInput.value);
            console.log(phoneInput.value);
            console.log(timeInput.value);

            afterSubmit.innerHTML = 'Success!!';
            setTimeout(() => afterSubmit.remove(), 3000);
            
            firstN.value = '';
            mailInput.value = '';
            phoneInput.value = '';
            timeInput.value = '';

        }

        