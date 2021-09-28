readlineSync=require("readline-sync" )
console.log("he hi!!! lets test how well do you know me");
var yourName=readlineSync.question("please give your name my friend "); 
const chalk = require('chalk');
const log = console.log;
log(chalk.yellow("Hi!!  " + yourName + " this quiz will let me know how well do you know me  "));

console.log("\n")

log(chalk.blue("Please answer the below questions correctly.Correct answer will increment your scroe with one and wrong answer will decerenment with one"));
console.log("\n");
console.log("please enter the answers in lower case");
var questionOne={
  question:'where was pranjul born',
  answer:"aligarh",
}
 var questionTwo={
   question:"how old is pranjul",
   answer:"20",
}
var questionThree={
  question:"what is hobby of pranjul",
  answer:"coding",
}
var questionFour={
  question:"which is the first school of pranjul",
  answer:"heritage",

}
var questionFive={
  question:"what is the favorite food of pranjul",
  answer:"chole bature",
}
var questionSix={
  
question:"where does pranjul currently live know",
answer:"ghaziabad",
}
 var questionList=[questionOne,questionTwo,questionThree,questionFour,questionFive,questionSix];
 var score=0;

  function quiz(currentQuestion)
  {
    log(chalk.green(currentQuestion.question));
    var yourAnswer=readlineSync.question()
    if(yourAnswer===currentQuestion.answer)
    {
      score=score+1;
    }
    else
    {
      score=score-1;
      
    }
    log(chalk.green("current score :  "+ score));
    if(score>2)
    {
      console.log("\n");
      log(chalk.blue(" you moved to  alpha grade !!"));
    }
    if(score>5)
    { console.log("\n");
      log(chalk.blue("great you moved two level ninja level !!"));
    }

  }
  
 for(var i=0;i<questionList.length;i++)
 {
    quiz(questionList[i]);
 }
 console.log("\n");
  log(chalk.yellow("yay!!!! your final score is :"+score));
  console.log("\n \n");
 

if (readlineSync.keyInYN('did you like the quiz press y for yes and n for no.')) {
  
  log(chalk.yellow("thanks "))
 
} else {
  
  log(chalk.yellow("thanku for your review will work upon it"))
  
}