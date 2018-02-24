(function() {
  var questions = [{
    question: "Did you feel like you were deciding how you wanted to do the task—in what order, for how long?",
    choices: ["I don't think so", "May not be", "Neither", "May be", "I think so"],
    correctAnswer: 2
  }, {
    question: "Pressing buttons on the keypad was something I did randomly.",
    choices: ["Strongly disagree", "Disagree", "Neither", "Agree", "Strongly agree"],
    correctAnswer: 4
  }, {
    question: "Pressing buttons on the keypad was something I did with having to consciously remember.",
    choices: ["Strongly disagree", "Disagree", "Neither", "Agree", "Strongly agree"],
    correctAnswer: 0
  }, {
    question: "Pressing buttons on the keypad did not require deliberative decision-making (effort).",
    choices: ["Strongly disagree", "Disagree", "Neither", "Agree", "Strongly agree"],
    correctAnswer: 3
  }, {
    question: "I enjoyed the task ",
    choices: ["Very little", "Little", "not", "Somewhat", "Very much"],
    correctAnswer: 4
  }, {
    question: "How easy or difficult was it for you to complete the task.",
    choices: ["Very easy", "Easy", "Neither", "Difficult", "Very difficult"],
    correctAnswer: 3
  }, {
    question: "How creative were the answers you gave?",
    choices: ["Very uncreative", "Uncreative", "Neither", "Creative", "Very creative"],
    correctAnswer: 3
  }, {
    question: "How quickly did you feel that time passed while working?",
    choices: ["Very slow", "Slow", "Neither", "Fast", "Very fast"],
    correctAnswer: 3
  }, {
    question: "How rushed did you feel while working?",
    choices: ["Very leisurely", "leisurely", "Neither", "Rushed", "Very rushed"],
    correctAnswer: 3
  }, {
    question: "How productive you felt about the way to press buttons?",
    choices: ["very unproductive", "Unproductive", "Neither", "Productive", "very productive"],
    correctAnswer: 3
  }];
  
  var questionCounter = 0; //Tracks question number
  var selections = []; //Array containing user choices
  var quiz = $('#quiz'); //Quiz div object
  
  // Display initial question
  displayNext();
  
  // Click handler for the 'next' button
  $('#next').on('click', function (e) {
    e.preventDefault();
    
    // Suspend click listener during fade animation
    if(quiz.is(':animated')) {        
      return false;
    }
    choose();
    
    // If no user selection, progress is stopped
    if (isNaN(selections[questionCounter])) {
      alert('Please make a selection!');
    } else {
      questionCounter++;
      displayNext();
    }
  });
  
  // Click handler for the 'prev' button
  $('#prev').on('click', function (e) {
    e.preventDefault();
    
    if(quiz.is(':animated')) {
      return false;
    }
    choose();
    questionCounter--;
    displayNext();
  });
  
  // Click handler for the 'Start Over' button
  $('#start').on('click', function (e) {
    e.preventDefault();
    
    if(quiz.is(':animated')) {
      return false;
    }
    questionCounter = 0;
    selections = [];
    displayNext();
    $('#start').hide();
  });
  
  // Animates buttons on hover
  $('.button').on('mouseenter', function () {
    $(this).addClass('active');
  });
  $('.button').on('mouseleave', function () {
    $(this).removeClass('active');
  });
  
  // Creates and returns the div that contains the questions and 
  // the answer selections
  function createQuestionElement(index) {
    var qElement = $('<div>', {
      id: 'question'
    });
    
    var header = $('<h2>Question ' + (index + 1) + ':</h2>');
    qElement.append(header);
    
    var question = $('<p>').append(questions[index].question);
    qElement.append(question);
    
    var radioButtons = createRadios(index);
    qElement.append(radioButtons);
    
    return qElement;
  }
  
  // Creates a list of the answer choices as radio inputs
  function createRadios(index) {
    var radioList = $('<ul>');
    var item;
    var input = '';
    for (var i = 0; i < questions[index].choices.length; i++) {
      item = $('<li>');
      input = '<input type="radio" name="answer" value=' + i + ' />';
      input += questions[index].choices[i];
      item.append(input);
      radioList.append(item);
    }
    return radioList;
  }
  
  // Reads the user selection and pushes the value to an array
  function choose() {
    selections[questionCounter] = +$('input[name="answer"]:checked').val();
  }
  
  // Displays next requested element
  function displayNext() {
    quiz.fadeOut(function() {
      $('#question').remove();
      
      if(questionCounter < questions.length){
        var nextQuestion = createQuestionElement(questionCounter);
        quiz.append(nextQuestion).fadeIn();
        if (!(isNaN(selections[questionCounter]))) {
          $('input[value='+selections[questionCounter]+']').prop('checked', true);
        }
        
        // Controls display of 'prev' button
        if(questionCounter === 1){
          $('#prev').show();
        } else if(questionCounter === 0){
          
          $('#prev').hide();
          $('#next').show();
        }
      }else {
        var scoreElem = displayScore();
        quiz.append(scoreElem).fadeIn();
        $('#next').hide();
        $('#prev').hide();
        $('#start').show();
      }
    });
  }
  //yo
    
    
       function saveTextAsFile()
{
    var textToSave = localStorage.getItem("answer");
    var textToSaveAsBlob = new Blob([textToSave], {type:"text/plain"});
    var textToSaveAsURL = window.URL.createObjectURL(textToSaveAsBlob);
    var fileNameToSaveAs = "User";
 
    var downloadLink = document.createElement("a");
    downloadLink.download = fileNameToSaveAs;
    downloadLink.innerHTML = "Download File";
    downloadLink.href = textToSaveAsURL;
    downloadLink.onclick = destroyClickedElement;
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);
 
    downloadLink.click();
}
    function destroyClickedElement(event)
{
    document.body.removeChild(event.target);
}
    
    //yo
  // Computes score and returns a paragraph element to be displayed
  function displayScore() {
    var score = $('<p>',{id: 'question'});
    
    var numCorrect = 0;
    for (var i = 0; i < selections.length; i++) {
  //  alert(selections[i]);
      if (selections[i] === questions[i].correctAnswer) {
        numCorrect++;
      }
    }
   // localStorage.setItem("quest", JSON.stringify(selections));
  /*  score.append('You got ' + numCorrect + ' questions out of ' +
                 questions.length + ' right!!!');*/
   // return score;
    //  alert(sessionStorage.getItem('answer'));
    /*  var ans3="Candidate: "+sessionStorage.getItem("txt");
      var textToSave =JSON.stringify(selections);
         $.ajax({
      url: "http://localhost/test.php?w1="+ sessionStorage.getItem("answer")+"&w2="+textToSave+"&w3="+ans3
    }).done(function(data) {
      console.log(data);
    });*/
       /*   var textToSave = sessionStorage.getItem("answer")+JSON.stringify(selections);
    var textToSaveAsBlob = new Blob([textToSave], {type:"text/plain"});
    var textToSaveAsURL = window.URL.createObjectURL(textToSaveAsBlob);
    var fileNameToSaveAs = "User";
 
    var downloadLink = document.createElement("a");
    downloadLink.download = fileNameToSaveAs;
    downloadLink.innerHTML = "Download File";
    downloadLink.href = textToSaveAsURL;
    downloadLink.onclick = destroyClickedElement;
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);
 
    downloadLink.click();*/
  }
})();