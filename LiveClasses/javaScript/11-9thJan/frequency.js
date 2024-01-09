function frequency(str) {
    const output = {};
    for (let i = 0; i < str.length; i++) {
        if (str[i] in output) {
            output[str[i]]++;
        } else {
            output[str[i]] = 1;
        }
    }
    return output;
}

console.log(frequency("ddcccttd")); // {d:3,c:3,t:2}
