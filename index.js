var readLine=require("readline-sync");
var score=0;
console.log("Welcom to Game");
var playerName=readLine.question("Enter Yor Name to Play : ");
console.log("Welcome "+playerName+"\nAnswer the simple questions :\n");
function play(que,o1,o2,o3,ans)
{
  console.log(que);
  console.log(o1);
  console.log(o2);
  console.log(o3);
  var answer=readLine.question("Enter your answer : ");
  if(answer==ans)
  {
    console.log("\nYou are right");
    score=score+1;
  }
  else{
     console.log("You are wrong");
    score=score-1;
  }
  console.log("your score is : "+score+" out of 10\n");
 
}

play("The Battle of Plassey was fought in",'a-1757','b-1782','c-1748','a');


play("The territory of Porus who offered strong resistance to Alexander was situated between the rivers of",'a-Sutlej and Beas','b-Jhelum and Chenab','c-Ravi and Chenab','b');


play("Under Akbar, the Mir Bakshi was required to look after",'a-military affairs','b-the state treasury','c-the royal household','a');


play("Tripitakas are sacred books of",'a-Buddhist','b-Hindus','c-jains','a');



play("The trident-shaped symbol of Buddhism does not represent",'a-Nirvana','b-Sangha','c-Buddha','a');

play("The theory of economic drain of India during British imperialism was propounded by",'a-Jawaharlal Nehru','b-Dadabhai Naoroji','c-R.C. Dutt','b');


play("The treaty of Srirangapatna was signed between Tipu Sultan and",'a-Robert Clive','b-Cornwallis','c-Dalhousie','b');


play("The system of competitive examination for civil service was accepted in principle in the year",'a-1843','b-1853','c-1863','b');

play("Through which one of the following, the king exercised his control over villages in the Vijayanagar Empire?",'a-Sumanta','b-Nayaka','c-Mahanayakacharya','c');



play("The Vijayanagara ruler, Kirshnadev Raya's work Amuktamalyada, was in",'a-Telgu','b-Sanskrit','c-Tamil','a');


 console.log("\nVisit web application in portfolio having MCQs for answer !");