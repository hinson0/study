var a = [
{id: 1, hello: 1},
{id: 2, hello: 2},
    ];

a.forEach(function(value, index, array) {
    array[index].xx = 55;
});
console.log(a);   

