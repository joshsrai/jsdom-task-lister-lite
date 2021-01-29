document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.querySelectorAll("input")[1].addEventListener("click", function(event){
    event.preventDefault()

    let button = document.createElement('button')
    button.innerHTML = 'X'
    button.addEventListener("click", (e)=>{
      e.target.parentElement.remove();
    });

    let parent = document.querySelector('ul')
    let task = document.createElement('li')

    task.innerHTML = document.querySelectorAll("input")[0].value
    task.append(button)
    parent.append(task)
  });
});

//The querySelectorAll() method returns all elements in the document that matches a specified CSS selector(s), as a static NodeList object. The NodeList object represents a collection of nodes. The nodes can be accessed by index numbers. The index starts at 0.
// Syntax: document.querySelectorAll(CSS selectors)
//            Parameter,	   Type,    Description
// Parameter: CSS selectors. String.	Required. Specifies one or more CSS selectors to match the element. These are used to select HTML elements based on their id, classes, types, attributes, values of attributes, etc. For multiple selectors, separate each selector with a comma.

//The addEventListener() method attaches an event handler to the specified element.
//Synatax: element.addEventListener(event, function, useCapture)
//event	Required. A String that specifies the name of the event.
//function	Required. Specifies the function to run when the event occurs. When the event occurs, an event object is passed to the function as the first parameter. The type of the event object depends on the specified event. For example, the "click" event belongs to the MouseEvent object.

//The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur. For example, this can be useful when: Clicking on a "Submit" button, prevent it from submitting a form
// Syntax: event.preventDefault()
// Parameters: None

//The createElement() method creates an Element Node with the specified name.
// Syntax: document.createElement(nodename)
// Parameter Values
// Parameter	Type	Description
// nodename	String	Required. The name of the element you want to create

// The innerHTML property sets or returns the HTML content (inner HTML) of an element.
// Syntax: Return the innerHTML property: HTMLElementObject.innerHTML
// Syntax: Set the innerHTML property: HTMLElementObject.innerHTML = text
// Property Values
// Value	Description
// text	Specifies the HTML content of an element

// The target event property returns the element that triggered the event. The target property gets the element on which the event originally occurred, opposed to the currentTarget property, which always refers to the element whose event listener triggered the event.

// The parentElement property returns the parent element of the specified element.
// Syntax: node.parentElement

// The remove() method removes the specified element from the DOM.
// Syntax: node.remove()

//The querySelector() method returns the first element that matches a specified CSS selector(s) in the document. Note: The querySelector() method only returns the first element that matches the specified selectors. To return all the matches, use the querySelectorAll() method instead. If the selector matches an ID in document that is used several times (Note that an "id" should be unique within a page and should not be used more than once), it returns the first matching element. Example Get the first element in the document with class="example": document.querySelector(".example");
// Syntax: document.querySelector(CSS selectors)
// Parameter Values
// Parameter	Type	Description
// CSS selectors	String	Required. Specifies one or more CSS selectors to match the element. These are used to select HTML elements based on their id, classes, types, attributes, values of attributes, etc. For multiple selectors, separate each selector with a comma. The returned element depends on which element that is first found in the document.

// The value property sets or returns the value of the attribute.
// Syntax:
// Return the attribute value: attribute.value
// Set the attribute value: attribute.value = value
// Property Values:
// Value	Description
// value	Specifies the value of the attribute

// The append() method appends an element to the end of the list.
// Syntax: list.append(elmnt)
// Parameter Values:
// Parameter	Description
// elmnt	Required. An element of any type (string, number, object etc.)