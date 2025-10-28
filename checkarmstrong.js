function isArmstrong(num) {
    const digits = num.toString().split('');       
    const power = digits.length;                  
    const sum = digits.reduce((acc, d) => acc + Math.pow(parseInt(d), power), 0);
    
    return sum === num;
}

