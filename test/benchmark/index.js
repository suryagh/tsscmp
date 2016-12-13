import timeSafeCompare from '../../lib/index';

function random(length=32) {
    let result = "";
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-+/*[]{}-=\|;\':\"<>?,./";

    for( let i=0; i < length; i++ ){
        result += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return result;
}

function run(count=100*1000) {
    console.log(`benchmark count: ${count/1000}k`);
    console.time('benchmark');

    while(count--){
        timeSafeCompare(random(), random());
    }
    console.timeEnd('benchmark');
}

run(100000);

export default run;
