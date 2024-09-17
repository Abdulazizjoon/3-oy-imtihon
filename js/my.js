document.addEventListener('DOMContentLoaded',function() {
    fetch(`https://cars-pagination.onrender.com/products`)
    .catch(function(err) {
        console.log(err);
        
    })
    .finally(function(er) {

        let loader=document.querySelector('.loader')
        loader.style.display='none'
        console.log(er);
    })
})
