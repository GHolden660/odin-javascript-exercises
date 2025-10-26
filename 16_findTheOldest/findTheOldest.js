const findTheOldest = function(array) {
    return array.reduce((oldestPerson, currentPerson) =>{
            oldestPerson.yearOfDeath ??= new Date().getFullYear();
            currentPerson.yearOfDeath ??= new Date().getFullYear();
            oldestpersonAge = oldestPerson.yearOfDeath - oldestPerson.yearOfBirth;
            currentPersonAge = currentPerson.yearOfDeath - currentPerson.yearOfBirth;
            return oldestpersonAge > currentPersonAge ? oldestPerson : currentPerson;
    })
};

// Do not edit below this line
module.exports = findTheOldest;
