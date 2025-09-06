
//Example-1
// let d=;
// console.log(d);
document.getElementById('changeTextButton').addEventListener('click',function (){
  document.getElementById('myParagraph').innerHTML='Paragraph has changed..'
})

// Example-2
document.getElementById('highlightFirstCity').addEventListener('click', function(){
    document.getElementById('citiesList').firstElementChild.classList.add('highlight');
})
// Example-3
 document.getElementById('changeOrder').addEventListener('click',function(){
     document.getElementById('coffeeType').textContent='Espresso';
     document.getElementById('coffeeType').style.backgroundColor='red';
     document.getElementById('coffeeType').style.padding='5px';

 });
// Example- 4
document.getElementById('addNewItem').addEventListener('click',function(){
    let element=document.createElement('li');
    element.textContent='Eggs';
    document.getElementById('shoppingList').appendChild(element);
})

//Exapmle-5

document.getElementById('removeLastTask').addEventListener('click', function(){
    document.getElementById('taskList').lastElementChild.remove();
});

// Example-6
document.getElementById('clickMeButton').addEventListener('dblclick',function(){
    alert('click properly.')
});
// Example-7
document.getElementById('teaList').addEventListener('click',function(event){
    //  console.log(event);
    if (event.target&& event.target.matches('.teaItem'))
     alert('You have selected: '+ event.target.textContent);
});
//Example-8
document.getElementById('feedbackForm').addEventListener('submit',function(event){
    event.preventDefault();
    let feedback= document.getElementById('feedbackInput').value;
    // console.log(feedback); 
    document.getElementById('feedbackDisplay').textContent=`Your feedback is: ${feedback}`;
    //  alert(`Your feedback is: ${feedback}`);
})
// Example - 9

document.addEventListener('DOMContentLoaded',function(){
    document.getElementById('domStatus').textContent='DOM Fully Loaded..'
})

// Example -10
document.getElementById('toggleHighlight').addEventListener('click',function(){
    document.getElementById('descriptionText').classList.toggle('highlight');
})


