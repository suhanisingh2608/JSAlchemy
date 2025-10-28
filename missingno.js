function findLongestWord(sentence) {
    const words = sentence.split(' '); // split sentence into words
    let longest = '';

    for (let word of words) {
        if (word.length > longest.length) {
            longest = word;
        }
    }

    return longest;
}