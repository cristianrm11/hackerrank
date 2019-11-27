/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    const vowels = ['a','e','i','o','u'];
    let outputResult = '';
    let outputVowels = '';
    let outputConsonants = '';
    console.log(`s.length is ${s.length}`);
    for (let i=0; i < s.length; i++ ) {
        if (vowels.indexOf(s[i]) > -1) {
            outputVowels += s[i] + '\n';
        } else {
            outputConsonants += s[i] + '\n';
        }
    }
    outputResult = outputVowels + outputConsonants;
    console.log(`outputResult is \n${outputResult}`);
    return outputResult;
}

vowelsAndConsonants('javascriptloops');