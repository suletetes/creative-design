
 
 document.querySelectorAll('.story-btn').forEach((btn) => {
     btn.addEventListener('click', function () {
        //  console.log('lf');
        btn.classList.toggle('change')
        btn.nextElementSibling.classList.toggle('change')
     })
 })