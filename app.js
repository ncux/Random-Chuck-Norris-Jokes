
document.querySelector('#fetch').addEventListener('click', fetchJokes);

function fetchJokes(e) {
    let numJokes = document.querySelector('#numJokes').value;

    let xhr = new XMLHttpRequest();
    xhr.open('GET', `http://api.icndb.com/jokes/random/${numJokes}`, true);

    xhr.onload = function() {
        if(xhr.status === 200) {
            let jokes = JSON.parse(xhr.responseText);
            console.log(jokes);

            let output = document.querySelector('#output');
            if(jokes.type === 'success') {
                jokes.value.forEach(function (joke) {
                    output.innerHTML += `<li>${joke.joke}</li>`;
                });

            } else {
                output.innerHTML = '<li>Oops, shit went wrong</li>'
            }
        }

    };






    xhr.send();
    e.preventDefault();

}