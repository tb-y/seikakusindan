const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("性格診断プログラム");
console.log("--------------------");

rl.question("1. 怒られた時にどんな感情になりますか (泣きたくなる、怒りが湧いてくる) ", (answer1) => {
  rl.question("2. 人から勧められた趣味を試してみるタイプですか(Yes、No) ", (answer2) => {
    rl.question("3. 道を尋ねられたら教えてあげますか （Yes、No） ", (answer3) => {
      // ここでユーザーの回答をもとに性格を診断
      const personality = diagnosePersonality(answer1, answer2, answer3);
      console.log("--------------------");
      console.log("あなたの性格診断結果: " + personality);
      rl.close();
    });
  });
});

// ユーザーの回答に基づいて性格を診断する関数
function diagnosePersonality(answer1, answer2, answer3) {
  if (answer1 === "泣きたくなる") {
    if (answer2 === "Yes") {
      if (answer3 === "Yes") {
        return "優しい人ですね";
      } else {
        return "もう少し人に優しくしましょう";
      }
    } else {
      return "もう少し人に優しくしましょう";
    
    }
    
  } else {
    return "もう少し人に優しくしましょう";
  }
}