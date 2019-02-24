async function fetchURLs() {
    const Url1 = 'https://baconipsum.com/api/?type=all-meat&paras=3&start-with-lorem=1&format=json';
    const Url2 = 'https://baconipsum.com/api/?type=meat-and-filler&paras=5&format=json';

    let Urls = await Promise.all([
     fetch(Url1)
      .then(response => response.json()),
     fetch(Url2)
      .then(response => response.json())
    ]);

    let displayString = '';

    for (var i of Urls) {
        for (var textString of i) {
            displayString += textString;
        }
    }
    console.log(displayString);
}
fetchURLs();