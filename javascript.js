const next1 = document.getElementById('next1');
    const q1 = document.getElementById('q1');

    next1.addEventListener('click', () => {
        if (q1.style.display === 'block' || q1.style.display === '') {
            q1.style.display = 'none'; // Show the div
            q2.style.display = 'block';
            q3.style.display = 'none';
            q4.style.display = 'none';
        } 
        

    }); 

    const next2 = document.getElementById('next2');
    const q2 = document.getElementById('q2');

    next2.addEventListener('click', () => {
        if (q2.style.display === 'block' || q2.style.display === '') {
            q2.style.display = 'none'; 
            q3.style.display = 'block';
            q1.style.display = 'none';
            q4.style.display = 'none';
        } 
        
    }); 
    const next3 = document.getElementById('next3');
    const q3 = document.getElementById('q3');

    next3.addEventListener('click', () => {
        if (q3.style.display === 'block' || q3.style.display === '') {
            q3.style.display = 'none'; 
            q4.style.display = 'block';
            q1.style.display = 'none';
            q2.style.display = 'none';
        } 
        
    }); 
    const next4 = document.getElementById('next4');
    const q4 = document.getElementById('q4');

    next4.addEventListener('click', () => {
        if (q4.style.display === 'block' || q4.style.display === '') {
            q4.style.display = 'none'; 
            res.style.display = 'block';
            q1.style.display = 'none';
            q2.style.display = 'none';
        } 
        
    }); 
    
     
    const addButton = document.getElementById('addButton');
const resultDiv = document.getElementById('resultDiv');

addButton.addEventListener('click', () => {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const num3 = parseFloat(document.getElementById('num3').value);
    const num4 = parseFloat(document.getElementById('num4').value);



    if (!isNaN(num1) && !isNaN(num2) && !isNaN(num2)) {
        const sum = num1 + num2 + num3 + num4;
        resultDiv.textContent = `Result: ${sum}`;
    } 
});

    const an1a = document.getElementById('an1a');
    an1a.addEventListener('click', () => {
    if (next1.style.display === 'none' || next1.style.display === '') {
        next1.style.display = 'block'; 
        } 
    });
    const an1b = document.getElementById('an1b');
    an1b.addEventListener('click', () => {
    if (next1.style.display === 'none' || next1.style.display === '') {
        next1.style.display = 'block'; 
        } 
    });
    const an1c = document.getElementById('an1c');
    an1c.addEventListener('click', () => {
    if (next1.style.display === 'none' || next1.style.display === '') {
        next1.style.display = 'block'; 
        } 
    });
    const an1d = document.getElementById('an1d');
    an1d.addEventListener('click', () => {
    if (next1.style.display === 'none' || next1.style.display === '') {
        next1.style.display = 'block'; 
        } 
    });

    const an2a = document.getElementById('an2a');
    an2a.addEventListener('click', () => {
    if (next2.style.display === 'none' || next2.style.display === '') {
        next2.style.display = 'block'; 
        } 
    });
    
    const an2b = document.getElementById('an2b');
    an2b.addEventListener('click', () => {
    if (next2.style.display === 'none' || next2.style.display === '') {
        next2.style.display = 'block'; 
        } 
    });
    const an2c = document.getElementById('an2c');
    an2c.addEventListener('click', () => {
    if (next2.style.display === 'none' || next2.style.display === '') {
        next2.style.display = 'block'; 
        } 
    });
    const an2d = document.getElementById('an2d');
    an2d.addEventListener('click', () => {
    if (next2.style.display === 'none' || next2.style.display === '') {
        next2.style.display = 'block'; 
        } 
    });
    const an3a = document.getElementById('an3a');
    an3a.addEventListener('click', () => {
    if (next3.style.display === 'none' || next3.style.display === '') {
        next3.style.display = 'block'; 
        } 
    });

    const an3b = document.getElementById('an3b');
    an3b.addEventListener('click', () => {
    if (next3.style.display === 'none' || next3.style.display === '') {
        next3.style.display = 'block'; 
        } 
    });
    const an3c = document.getElementById('an3c');
    an3c.addEventListener('click', () => {
    if (next3.style.display === 'none' || next3.style.display === '') {
        next3.style.display = 'block'; 
        } 
    });
    const an3d = document.getElementById('an3d');
    an3d.addEventListener('click', () => {
    if (next3.style.display === 'none' || next3.style.display === '') {
        next3.style.display = 'block'; 
        } 
    });
    const an4a = document.getElementById('an4a');
    an4a.addEventListener('click', () => {
    if (next4.style.display === 'none' || next4.style.display === '') {
        next4.style.display = 'block'; 
        } 
    });
    const an4b = document.getElementById('an4b');
    an4b.addEventListener('click', () => {
    if (next4.style.display === 'none' || next4.style.display === '') {
        next4.style.display = 'block'; 
        } 
    });
    const an4c = document.getElementById('an4c');
    an4c.addEventListener('click', () => {
    if (next4.style.display === 'none' || next4.style.display === '') {
        next4.style.display = 'block'; 
        } 
    });const an4d = document.getElementById('an4d');
    an4d.addEventListener('click', () => {
    if (next4.style.display === 'none' || next4.style.display === '') {
        next4.style.display = 'block'; 
        } 
    });
    