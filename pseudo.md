# Let's pseudo

## Application outline

- Display the current day and date in the header on open

- Have javascript create a div containing 3 other div elements
    - Time display
    - Event information
    - Save button


- Color the event information block based on current time vs the hour value of the time display div
    - color information is already defined in the provided stylesheet
    - simply add the correct class each time an event block is created or changed
    - misread the initial requirement
        - all past event blocks need to have the .past class, current hour block the .present class and future the .future class


- Add the ability to set the text of an hour block
    - Click event on an event information block enables an input field
    - If you user clicks off of the event or presses the return key the input closes
    - When the input closes the text of the event information box is set to the input field variable


- Save event information to local storage when clicking the save button


- Bonus
    - Clear the events from the calendar if the date of the save does not equal the current date
    - Do something dumb to the page