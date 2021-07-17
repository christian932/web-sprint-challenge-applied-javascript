import axios from "axios"

const Tabs = (topics) => {
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //
 
  const topicsDiv = document.createElement('div');
  topicsDiv.classList.add('topics');

  topics.forEach(element => {
    let div = document.createElement('div');
    div.classList.add('tab');
    div.textContent = element;
    topicsDiv.appendChild(div);
    return div;
  });
return topicsDiv
}

const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `https://lambda-times-api.herokuapp.com/topics`
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
  const parentTab = document.querySelector(selector);

  axios.get('https://lambda-times-api.herokuapp.com/topics').then((res)=>{
    let array = res.data.topics;
    let child = Tabs(array);
    parentTab.appendChild(child);
    console.log(parentTab);
  }).catch((err)=>{
    console.log(err);
  })
}

export { Tabs, tabsAppender }