///check ninja desire course 6.8 adding and removing classes
///quiz///
const newlass = document.querySelectorAll('div.quiz > p');
newlass.forEach(paraTag => {
    console.log(newlass.innerText);
    if(paraTag.innerText.includes('error')) {
        paraTag.classList.add('error');
    }
    else if(paraTag.innerText.includes('success')){
        paraTag.classList.add('success');
    }
})
