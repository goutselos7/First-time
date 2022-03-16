var minutes= +prompt("Give how much time customer spend in our service In MINUTES");
var value = 0;
var sum = 0;
for (minutes = 1; minutes >120; minutes +30){
    if( minutes <= 30 ){
        sum = sum + value;
        console.log(`You use our pc for ${minutes} and you owe ${sum}`);
    }
    else{
        sum = sum +value;
        console.log(`You use our pc for ${minutes} and you owe ${sum}`);
    }
    console.log(`You use our pc for ${minutes} and you owe ${sum}`);
}