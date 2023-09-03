    //for switching tabs
    let currentStep = 1;
    const form = document.getElementById('myForm');

    function nextStep(stepIncrement) {
        const currentStepDiv = document.getElementById(`step${currentStep}`);
        currentStepDiv.style.display = 'none';
        currentStep += stepIncrement;
        const nextStepDiv = document.getElementById(`step${currentStep}`);
        nextStepDiv.style.display = 'block';
    }


//selection DOM element

 document.getElementById('myForm').addEventListener('submit', function(event) {
        event.preventDefault();


        const name = document.getElementById('name').value;
        const age = document.getElementById('age').value;
        const email = document.getElementById('email').value;
        const education = document.getElementById('education').value;
        const study = document.getElementById('study').value;
        const Institute = document.getElementById('institute').value;
        const admitted = document.getElementById('admitted').value;
        const program = document.getElementById('program').value;
        const country = document.getElementById('country').value;
        const goals = document.getElementById('goals').value;
        const Listening = document.getElementById('Listening').value;
        const Reading = document.getElementById('Reading').value;
        const Speaking = document.getElementById('Speaking').value;
        const Writing = document.getElementById('Writing').value;
     //   const selectedValue = document.querySelector('input[name="didYouPay"]:checked').value;
        const tuition  = document.getElementById('tuition-fee').value;
    //    const didYouGIC = document.querySelector('input[name="didYouGIC"]:checked').value;
        const GIC = document.getElementById('GIC').value;


//generating paylodes
        const data = {
            name: name,
            age: age,
            email: email,
            education:education,
            study: study,
            Institute: Institute,
            admitted: admitted,
            program:program,
            country: country,
            goals: goals,
            Listening: Listening,
            Reading: Reading,
            Speaking: Speaking,
            Writing:Writing,
        //    selectedValue: selectedValue,
            tuition:tuition,
        //    didYouGIC: didYouGIC,
            GIC:GIC,

        };
         
 
  
       //sending data to backend server


        fetch('http://localhost:3000/api/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        // Handle the response from the backend (e.g., show a success message)
        console.log('Response from server:', data);
    })
    .catch(error => {
        console.error('Error:', error);
    });


 });

