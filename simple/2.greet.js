const intfc = require('../helpers/read_interface');

intfc.question("What's your name: ", answer => {
    console.log("Hi ", answer);
    intfc.close();
});