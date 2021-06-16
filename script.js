(function() {
    console.warn('Script correctly linked to web page');

    let textArea = document.getElementById('input_text');
    let charsCounter = document.getElementById('counter');

    charsCounter.style.display = 'none';
    
    textArea.addEventListener('focus', function() {
        charsCounter.style.display = 'block';
        charsCounter.innerHTML = 'Characters left: ' + charsLeft();
    });
    
    textArea.addEventListener('input', function() {
        charsCounter.innerHTML = 'Characters left: ' + charsLeft();
    });

    textArea.addEventListener('blur', function() {
        charsCounter.style.display = 'none';
    });

    function charsLeft() {
        let charsInput = textArea.value.length;
        return 155 - charsInput;
    }
})();