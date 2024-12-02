'use strict';
document.getElementById('searchForm').addEventListener('submit', async function(event) {
    event.preventDefault(); 

    // Get the value from the input field
    let value_from_input = document.querySelector('input[name=q]').value;

   
    try {
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${value_from_input}`);
        const jsonData = await response.json();
        jsonData.forEach(item => {
            console.log(item.show.name); // Access the name of each show
        });
    } catch (error) {
        console.error('Error fetching data:', error.message);
    }
});

    

