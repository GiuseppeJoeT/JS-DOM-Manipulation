const myHeading = document.getElementById('myHeading');
const myButton = document.getElementById('myButton');
const myTextInput = document.getElementById('myTextInput');
const myParagraph = document.getElementById('myParagraph');

myButton.addEventListener('click', () => {
          myHeading.style.color = myTextInput.value;
      //  myParagraph.style.fontSize = 'xx-small';                    
});

