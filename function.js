const number = [20, 40, 60, 75, 35, 55];
for (let i = 0; i < number.length; i++) {
    const newNumber = number[i];
    if(newNumber % 2 == 0){
        console.log("this number is even number:", newNumber);
    }
    else{
        console.log("this number is odd number:", newNumber);
    }    
}

const friend_Age = [25, 35, 45, 55, 65, 75];
for (let i = 0; i < friend_Age.length; i++) {
    const newAge = friend_Age[i];
    if(newAge % 2 == 0){
        console.log("this age is even number:", newAge);
    }
    else{
        console.log("this age is odd number:", newAge);
    }
}

// duplicate process reduce with function

function actionWithAll(number){
    for (let i = 0; i < number.length; i++) {
        const newNums = number[i];
        if (newNums % 2 == 0) {
            console.log("this number is even:", newNums);       
        }
        else{
            console.log("this number is odd:", newNums);
        }
    }
}
const num1 = [25, 20, 40, 85, 75, 60, 10];
actionWithAll(num1);
const num2 = [33, 45, 60, 6, 18,55, 78, 19];
actionWithAll(num2);