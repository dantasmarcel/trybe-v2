const calculaBmi = (peso, altura) => { 
    return peso / (Math.pow(altura, 2)); 
};

module.exports = {
    calculaBmi
};