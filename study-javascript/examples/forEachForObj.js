var Test = {
    
};

[
    'json',
    'body',
    'hello',
].forEach(function (name) {
    console.log(name);
    Object.defineProperty(Test, name, {
        get: function () {
            console.log(1);        
        },
    });
});

console.log(Test);
