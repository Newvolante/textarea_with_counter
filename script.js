(function() {
    console.warn('Script correctly linked to web page');

    let textArea = document.getElementById('input_text');
    let charsCounter = document.getElementById('counter');

    // initially hides the characters counter
    charsCounter.style.display = 'none';
    
    // when the text area receives focus
    textArea.addEventListener('focus', function() {
        charsCounter.style.display = 'block';
        charsCounter.innerHTML = 'Characters left: <b>' + charsLeft() + '</b>';
    });
    
    // when an input occurs in the text area
    textArea.addEventListener('input', function() {
        charsCounter.innerHTML = 'Characters left: <b>' + charsLeft() + '</b>';
    });
    
    // when the text area loses focus
    textArea.addEventListener('blur', function() {
        charsCounter.style.display = 'none';
    });

    // function to return the number of characters left
    function charsLeft() {
        let charsInput = textArea.value.length;
        return 155 - charsInput;
    }
})();