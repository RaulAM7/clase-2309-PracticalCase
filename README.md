# clase-2309-PracticalCase

Use Case
Let’s create a To Do List!


# 1.- Basic HTML
First, we need to create a basic HTML to work with:

A text input to write the next element of the list
A button to insert the element into the list
An unordered list to show the To Do list
The Pending Tasks item in the footer will count how many tasks are still to be done.


# 2.- Making it interactive

# 2.1.- Adding new Pending Tasks

Now we can start making our ToDo List interactive. Once the user clicks on the button, the text inside the input will be added to the list.

To do that, we need to select every HTML element we are going to work with: the button, the input, and the list:

# 2.2- Addresing Pending Tasks viewer

To show the pending tasks, we start a counter at 0, increase it every time we add a task and then add it to the innerText of the span element.

