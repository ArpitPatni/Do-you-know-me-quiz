var readlineSync=require("readline-sync");

var score=0;

var userName=readlineSync.question("What is your name !! \n");


console.log("Welcome "+userName+" let's see how much do you know about Arpit");


//play function

function play(question,answer)
{
  var userAnswer=readlineSync.question(question);

  if(userAnswer.toLocaleUpperCase===answer.toLocaleUpperCase)
  {
    console.log("Right !!");
    score++;
  }
  else
  {
    console.log("Wrong !! ");
  }

  console.log("Your score is ",score);
}

question1={
  question:"Where do Arpit live ? \n",
  answer:"guwahati"
}
question2={
  question:"Which color after loves the most Black or White \n",
  answer:"black"
}
question3={
  question: "Arpit is a Doctor or an Engineer ? \n",
  answer:"Engineer"
}
question4={
  question:"Arpit loves Cricket or Football ? \n",
  answer:"Cricket"
}

var questions=[question1,question2,question3,question4];

for(var i=0;i<questions.length;i++)
{
  var currentQuestion=questions[i];
  play(currentQuestion.question,currentQuestion.answer);
  
}

console.log("---------")

console.log("Your Final Score is ",score);