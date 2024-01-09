const obj = {
    a: 1,
    b: 2,
    c: 3,
};
for (const keys in obj) {
    console.log(`${keys}: ${obj[keys]}`);
}

Object.keys(obj).join(); //gives "abc"

const object = { a: 1, b: 2, c: 3 };

function keysAndValues(obj) {
    const objKeys = Object.keys(obj);
    const objValues = Object.values(obj);
    return [objKeys, objValues];

    // const keys = [] , values=[]
    // for(const key in obj){
    //     keys.push(key);
    //     values.push(obj[key])
    // }
    // return [keys , values]
}
// console.log(keysAndValues(object));

const object1 = { a: 1, b: 2, c: 3 };

function objectToArray(obj) {
    // return Object.entries(obj);
    let arr = [];
    for (const keys in obj) {
        arr.push([keys, obj[keys]]);
    }
    return arr;
}

// console.log(objectToArray(object1));

// function expensiveOrder(order, amount) {
//     const output = {};
//     for (const key in order) {
//         if (order[key] > amount) {
//             output[key] = order[key];
//         }
//     }
//     return output;
// }

// console.log(expensiveOrder({ a: 3000, b: 200, c: 1050 }, 1000));

function expensiveOrder(order, amount) {
    const output = [];
    for (const key in order) {
        if (order[key] > amount) {
            output.push(key);
        }
    }
    return output;
}
console.log(expensiveOrder({ a: 3000, b: 200, c: 1050 }, 1000));
