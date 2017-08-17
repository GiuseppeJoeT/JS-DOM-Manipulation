const myHeading = document.getElementById('myHeading');
const myButton = document.getElementById('myButton');
const myTextInput = document.getElementById('myTextInput');
const myParagraph = document.getElementById('myParagraph');

myButton.addEventListener('click', () => {
          myHeading.style.color = myTextInput.value;
      //  myParagraph.style.fontSize = 'xx-small';                    
});

const myList = document.getElementsByTagName('li');

for (let i = 0; i < myList.length; i++) {
    myList[i].style.color = 'purple';
}