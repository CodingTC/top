const findTheOldest = function(people) {
    const oldestPerson = people.sort((a, b) => {
        if(!a.yearOfDeath && !b.yearOfDeath)
        {
            return (((new Date()).getFullYear()) - b.yearOfBirth) - (((new Date()).getFullYear()) - a.yearOfBirth);
        }
        else if(!b.yearOfDeath)
        {
            return (((new Date()).getFullYear()) - b.yearOfBirth) - (a.yearOfDeath - a.yearOfBirth);
        }
        else if(!a.yearOfDeath)
        {
            return (b.yearOfDeath - b.yearOfBirth) - (((new Date()).getFullYear()) - a.yearOfBirth);
        }

        return b.yearOfDeath - a.yearOfDeath
    });
    return oldestPerson[0];
};

// Do not edit below this line
module.exports = findTheOldest;
