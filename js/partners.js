// const array = [1, 2, 3, 4, 5, 6, 7];

// console.log(array[1]);


// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }

// array.forEach(function(elem, index, array) 

// array.forEach((elem, index) => {
//     // console.log(elem);
//     // console.log(index);
//     // console.log(array);

//     if (index < 2) {
//         console.log(elem);
//         // console.log(index);
//     } else if (index === 3) {
//         // console.log('не подходит');
//         console.log(elem);
//     }
// });

const renderItems = (data) => {
    console.log(data);
};

fetch('https://test-f2a92-default-rtdb.firebaseio.com/db/partners.json')
    .then((response) => response.json())
    .then((data) => {
        // console.log(data);
        renderItems(data);
    });

.catch((error) => {
    console.log(error);
});

// .finally(console.log('finally'));