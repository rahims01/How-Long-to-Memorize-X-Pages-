const template = document.getElementById('remove');
const submitBtn = document.getElementById('submitBtn');
const halfPageTime = document.getElementById('halfPageTime');
const halfPages = document.getElementById('halfPages');
const pages = document.getElementById('pages');
const timePerPage = document.getElementById('timePerPage');
const resultOutput = document.getElementById('resultOutput');

template.remove();

function getMemorizationTime(totalPages, timePerPg, halfPagesCount, halfPageTimeValue) {
    let fullPageTime = totalPages * timePerPg;
    let estHalfPageVal = ((timePerPg / 2) + (halfPageTimeValue / 2)) / 2;
    let halfPageTimeTotal = halfPagesCount * estHalfPageVal;
    let totalTime = fullPageTime + halfPageTimeTotal;

    if (!isNaN(totalTime)) {
        return totalTime;
    } else {
        // throw new SyntaxError('User or calculation resulted in NaN value.');
        console.warn('Calculation resulted in NaN value.');
        return NaN;
    }
}

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let totalPages = parseInt(pages.value);
    let timePerPg = parseInt(timePerPage.value);
    let halfPagesNum = parseInt(halfPages.value) || 0;
    let halfPageTimeValue = parseInt(halfPageTime.value) || timePerPg;
    let estimatedTime = getMemorizationTime(totalPages, timePerPg, halfPagesNum, halfPageTimeValue);
    
    if (totalPages <= 0 || timePerPg <= 0 || halfPagesNum < 0 || halfPageTimeValue <= 0) {
        resultOutput.textContent = 'Please enter valid positive numbers for all required fields.';
        throw new SyntaxError('User input or calculation resulted in invalid negative value.');
    }

    if (isNaN(estimatedTime) || estimatedTime <= 0) {
        resultOutput.textContent = 'Please enter valid numbers for all required fields.';
        throw new SyntaxError('User input or calculation resulted in NaN or invalid value.');
    } else {
        resultOutput.textContent = `Estimated time to memorize: ${estimatedTime} minutes`;
    }
});


