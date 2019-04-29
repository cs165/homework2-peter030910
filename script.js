// TODO(you): Write the JavaScript necessary to complete the homework.

// You can access the RESULTS_MAP from "constants.js" in this file since
// "constants.js" has been included before "script.js" in index.html.

let record_question = ['one','two','three'];
let record_dict = {'one':null,'two':null,'three':null};
initial();

function initial(){
    const boxes = document.querySelectorAll('.checkbox');
    for(const box of boxes){
    box.addEventListener('click',check_item);
    }
}
function check_item(event){
    const e = event.currentTarget;
    const e_parent = e.parentElement;
    const question_index = e_parent.dataset.questionId;
    record_question[question_index] = true;
    uncheck_item(question_index);
    record_dict[question_index] = e_parent.dataset.choiceId;
    e.src = "images/checked.png";
    e_parent.style.backgroundColor = '#cfe3ff';
    e_parent.style.opacity = 1;
    if(record_question['one']===true && record_question['two']=== true && 
    record_question['three']===true)
        is_complete();
}
function uncheck_item(questionID){
    const items = document.querySelectorAll('div[data-question-id=' + questionID + ']');
    for(var item of items){
        const checkbox = item.querySelector('.checkbox');
        checkbox.src = "images/unchecked.png";
        item.style.backgroundColor = '#f4f4f4';
        item.style.opacity = 0.6;
    }
}

function is_complete(){
    const items = document.querySelectorAll('.checkbox');
    for(item of items){
        item.removeEventListener('click', check_item);
    }
    
    if (record_dict['one']===record_dict['two'])
        resultOutput(record_dict['one']);
    else if (record_dict['two']===record_dict['three'])
        resultOutput(record_dict['two']);
    else if (record_dict['one']===record_dict['three'])
        resultOutput(record_dict['one']);
    else
        resultOutput(record_dict['one']);
}

function resultOutput(result){
    const resultBox = document.createElement("div");
    const container = document.querySelector("article");
    container.appendChild(resultBox);
    resultBox.style.margin = "20px 0px";
    resultBox.style.padding = "20px";
    const resultTitle = document.createElement("h2");
    resultTitle.textContent = "You got: " + RESULTS_MAP[result].title;
    resultBox.appendChild(resultTitle);
    const resultText = document.createElement("div");
    resultText.style.padding = "18px 0px";
    resultText.textContent = RESULTS_MAP[result].contents;
    resultBox.appendChild(resultText);
  
    const restartButton = document.createElement("div");
    restartButton.style.backgroundColor = "#cecece";
    restartButton.style.height = "50px";
    restartButton.style.display = "flex";
    restartButton.style.alignItems= "center";
    restartButton.style.justifyContent = "center";
    restartButton.textContent = "Restart quiz";
    restartButton.style.fontSize = "18px";
    restartButton.addEventListener('mouseover', mouseover);
    restartButton.addEventListener('mouseout', mouseout);
    restartButton.addEventListener('click', restart);
    resultBox.appendChild(restartButton);
  }
  
  function restart(event){
    event.currentTarget.parentElement.remove();
    const checkboxs = document.querySelectorAll('.checkbox');
    record_question['one']=null;
    record_question['two']=null;
    record_question['three']=null;
    record_dict['one']=null;
    record_dict['two']=null;
    record_dict['three']=null;
    for(checkbox of checkboxs){
        checkbox.src = "images/unchecked.png";
        checkbox.parentElement.style.backgroundColor = "#f4f4f4";
        checkbox.parentElement.style.opacity = 1;
    }
    const e3 = document.querySelector(".question-name");
    e3.scrollIntoView();
    initial();
  }
  
  
  function mouseover(event){
    const button = event.currentTarget;
    button.style.backgroundColor = "#e0e0e0";
  }
  
  function mouseout(event){
    const button = event.currentTarget;
    button.style.backgroundColor = "#cecece";
  }
  

