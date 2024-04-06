function searchDictionary() {
    const query = document.getElementById("searchInput").value.trim();
    if (query === "") {
        alert("Please enter a word to search.");
        return;
    }
    
    fetch(https,//api.dictionaryapi.dev/api/v2/entries/en/${query})
        then(response => response.json())
        .then(data => displayMeanings(data))
        .catch(error => {
            console.error("Error fetching data:", error);
            alert("An error occurred. Please try again later.");
        });
}

function displayMeanings(data) {
    const meaningsDiv = document.getElementById("meanings");
    meaningsDiv.innerHTML = ""; // Clear previous search results
    
    data.forEach(entry => {
        const word = entry.word;
        const meanings = entry.meanings.map(meaning => {
            return <li>${meaning.partOfSpeech}: ${meaning.definitions[0].definition}</li>;
        }).join("");
        
        const html = `
            <div class="word">
                <h2>${word}</h2>
                <ul>${meanings}</ul>
            </div>
        `;
        meaningsDiv.innerHTML += html;
    });
}