const p = document.getElementById("quote");
p.textContent = "Loading quote, please wait.."; 
const urlFetch = "https://demotivation-quotes-api.herokuapp.com/graphql";
const options = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        query: `
        query{
            randomQuote{
              id
              quote
              author
            }
          }
`
    }),
}

fetch(urlFetch, options)
.then(res => res.json())
.then(res => {
    p.textContent = null;
    p.append(res.data.randomQuote.quote + " - ");
    p.append(res.data.randomQuote.author);
})
.catch(err => console.log(err));