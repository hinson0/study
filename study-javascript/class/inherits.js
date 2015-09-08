function Base() {

}

Base.getById = function() {
    console.log('get by id');
}

function Son() {
    
}

Son.apply(Base);
Son.getById();
