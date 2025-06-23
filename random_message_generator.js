const arr_months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'Novemeber', 'December'];
const arr_verbs = ['hot', 'smelly', 'crazy', 'overweight', 'good-looking', 'smart', 'lazy', 'goony'];

const random_message_generator = (arr1, arr2) => {
    let month_index = Math.floor(Math.random() * arr1.length);
    let verb_index = Math.floor(Math.random() * arr2.length);
    let percentage = Math.ceil (Math.random() * 100);
    return`${percentage} % of all people born in ${arr1[month_index]} are ${arr2[verb_index]}!`;
}

console.log(random_message_generator(arr_months, arr_verbs));
