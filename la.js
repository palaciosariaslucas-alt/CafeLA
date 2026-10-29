fetch('https://uselessfacts.jsph.pl/api/v2/facts/today')
    .then(response => response.json())
    .then(data => console.log(data.text))