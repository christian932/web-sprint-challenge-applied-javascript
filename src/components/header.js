import axios from "axios"

const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
  
  let headerDiv = document.createElement('div');
  headerDiv.classList.add('header');

  let dateSpan = document.createElement('span');
  dateSpan.classList.add('date');
  dateSpan.textContent = date;

  let h1 = document.createElement('h1');
  h1.textContent = title;

  let tempSpan = document.createElement('span');
  tempSpan.classList.add('temp');
  tempSpan.textContent = temp;

  headerDiv.appendChild(dateSpan);
  headerDiv.appendChild(h1);
  headerDiv.appendChild(tempSpan);

  return headerDiv;
}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  let parent = document.querySelector(selector);
  let child = Header("Lambda Times", "Saturday, May 15, 2021","69°F" );
  return parent.appendChild(child);
}

export { Header, headerAppender }