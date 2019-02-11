## Web App From Scratch
By Guus Dijkhuis

[link to prototype](https://guusdijkhuis.github.io/web-app-from-scratch-18-19/week1)

### The assignment
Make a application with HTML/CSS/JS and use data from an API. You need these data because we would build an overview page.
For the right data we need a good API so I decide to use the PokéAPI. I choose for the PokéAPI because it is a small API with enough datapoints in the API but not too many datapoints. It was perfect for my project.

### The concept
I want to make an overview of all pokemons sort on number. When you will click on a image of a pokémon you get all the information of a single pokémon. This is my first idea so it can change in the future but this is the basis for my web app.

### What I want
So the use can looking through the list of Pokémons and see the details the user wants and not every Pokémon.

### What I did last week
First of all I forgot my computer at the first day of the minor, so it was a good start... I decide to go to my house for my laptop so after 2 hours I finally started with my code and it was a nice experience. It was easier than I thought and I learned a lot about fetch and promises. Below a part of my code and the limit is 20 because it was too much loading time if I get all the data for every Pokémon.

I use fetch for getting the names of all Pokémons with the url for the details:
```
fetch('https://pokeapi.co/api/v2/pokemon/?limit=20').then(response => {
  return response.json();
}).then(response => {
  response.results.forEach(pokeNameData => {
```
When I get the response I use the url for fetching a second time because I want to get all the data of all Pokémons and not only the name. I want to use attack, abbilities, etc.   
```
  fetch(pokeNameData.url, {
    method: 'get'
  }).then(pokeAllData => {
    return pokeAllData.json()
  }).then(pokeAllData => {
```

### Wishlist

- [x]  overview
- [ ] search on name/number
- [ ] get a random Pokémon
- [ ] click on a type and get all Pokémons with the type
- [ ] detail page
