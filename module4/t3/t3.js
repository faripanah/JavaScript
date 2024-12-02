'use strict';

async function showSeriesInfo() {
    // Get user input from the form
    const value_from_input = document.querySelector('input[name=q]').value;

    // Fetch data from the TVMaze API
    const response = await fetch(`https://api.tvmaze.com/search/shows?q=${value_from_input}`);
    const jsonData = await response.json();

    // If no results, display a message and return
    if (jsonData.length === 0) {
        document.querySelector('#results').innerHTML = 'No results found.';
        return;
    }

    // Extract properties of the first result
    const firstShow = jsonData[0].show;
    const name = firstShow.name || 'No title available';
    const description = firstShow.summary ? firstShow.summary.replace(/<[^>]*>/g, '') : 'No description available'; // Strip HTML
    const imageAddress = firstShow.image?.medium || ''; // Handle cases where image might not exist
    const detailsLink = firstShow.url || '#';

    // Update HTML elements
    const resultsDiv = document.querySelector('#results');
    resultsDiv.innerHTML = `
        <figure>
            <img src="${imageAddress}" alt="${name}">
            <figcaption>${description}</figcaption>
        </figure>
        <h2>${name}</h2>
        <a href="${detailsLink}" target="_blank">More details</a>
    `;
}

// Attach event listener to form submission
document.getElementById('searchForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent default form submission behavior
    await showSeriesInfo(); // Call the function to show series information
});
