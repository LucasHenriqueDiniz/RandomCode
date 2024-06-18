seconds = 257539;
let Seg = 00;
let Min = 00;
let Hrs = 00;

const format = (time) => {
    return Math.floor(time) < 10 ? "0" + Math.floor(time) : Math.floor(time)
}


Hrs = Math.floor((Math.floor(seconds / 60)) / 60)

Min = Math.floor(seconds / 60) % 60

Seg = seconds % 60


console.log(format(Hrs))
console.log(format(Min))
console.log(format(Seg))

console.log(Hrs + ':' + Min + ':' + Seg)

//71:32:19