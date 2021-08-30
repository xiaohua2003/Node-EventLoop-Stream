const fs=require('fs');
setTimeout(()=>{console.log('Timer 1 is finished'), 0});
setImmediate(()=>{console.log('this is immediate function 1')})
fs.readFile('./test-file.txt', 'utf8', ()=>{
    console.log('this is file reading system')
    console.log('----------')
    setTimeout(()=>{console.log('Timer 2 is finished'), 0});
    setTimeout(()=>{console.log('Timer 3 is finished'), 3000});
    setImmediate(()=>{console.log('this is immediate function 2')})


})
console.log('this is top level code')