score = parseInt(prompt ('Masukkan Nilai: '))
console.log(score)
document.write(`<p> Nilai : ${score}`)
let result;

if (score >= 90 && score <= 100){
    result = 'Selamat! Anda mendapat nilai A'
}

if (score >= 80 && score <= 89){
    result = 'Anda mendapat nilai B'
}

if (score >= 70 && score <= 79){
    result = 'Anda mendapat nilai C'
}

if (score >= 60 && score <= 69){
    result = 'Anda mendapat nilai D'
}

if (score >= 0 && score <= 59){
    result = 'Anda mendapat nilai E'
}

console.log(result)
document.write(`<p>${result}<p>`)