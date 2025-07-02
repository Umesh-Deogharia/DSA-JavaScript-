let apple = 0;
let money = 100;

function buyApple(x) {
    if (x > 0) {
        // apple++;
        console.log("money detucted",x ,"rs","bought apple ", apple);
        buyMore(x - 5);
    } else {
      console.log("All Money Deducted", apple);      
  }
}

buyApple(money);

function buyMore(m) {
    apple++;
    buyApple(m - 5);
}