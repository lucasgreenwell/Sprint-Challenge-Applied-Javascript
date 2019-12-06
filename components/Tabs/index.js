// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then(response => {
        response.data.topics.forEach(ele => {
            const tab = document.createElement('div');
            tab.classList.add('tab');
            tab.textContent = ele;
            const tabsGoHere = document.querySelector('.topics');
            tabsGoHere.append(tab);
            return tab;
        })
    })





// function makeTab (){
//     const tab = document.createElement('div');
//     tab.classList.add('tab');
//     tab.textContent = `${response.data.topics[i]}`;
//     const tabsGoHere = document.querySelector('.topics');
//     tabsGoHere.append(tab);
//     return tab;
// }