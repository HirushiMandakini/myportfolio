window.addEventListener('load', function() {
    setTimeout(function() {
        document.body.classList.add('loaded'); // Add 'loaded' class to body after the specified loading time
        
        // Trigger animation by adding 'animate-slide' class to elements after a short delay
        setTimeout(function() {
            document.querySelector('.hometextdiv').classList.add('animate-slide');
            document.querySelector('.homebtncontainer').classList.add('animate-slide');
        }, 100); // Adjust delay as needed
    }, 2000); // Adjust the loading time (in milliseconds) as needed
});

