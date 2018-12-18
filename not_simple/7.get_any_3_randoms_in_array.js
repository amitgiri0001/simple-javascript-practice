'use strict'

const method = () => {
    let theArray = ['work', 'friend', 'family', 'sleep', 'fitness'];
    let newArray = [];

    while (newArray.length < 3) {
        //                                          values 0 - 1  * some value to being sense in random value
        //                                                  |               |
        let yourChoiceInLife = theArray[(Math.floor(Math.random() * theArray.length))];
        //Example:                              |        0.512132  *     5
        //                                      |            |___________|
        //                                      |                  |
        //                                      |                2.56066
        //                                      2       <----------|

        // maintaining uniquness
        if (newArray.indexOf(yourChoiceInLife) == -1) {
            newArray.push(yourChoiceInLife);
        }
    }

    return newArray;
}


if (require.main == module) {
    console.log(`According to a post of inc.com. In this busy schedule of life the situation these days is something like this: \n "Work, Sleep, Family, Fitness, or Friends: Pick 3" `);
    console.log(`https://www.inc.com/jessica-stillman/work-sleep-family-fitness-or-friends-pick-3.html`);
    console.log(`It triggered me to think if we can code it :P \n `);
    console.log(method());
    console.log(`\n`);
}