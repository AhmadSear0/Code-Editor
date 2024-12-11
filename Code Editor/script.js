const htmlCode = document.querySelector('.html-code textarea');
const cssCode = document.querySelector('.css-code textarea');
const jsCode = document.querySelector('.js-code textarea');
const resultFrame = document.querySelector('#result');

function runCode() {
    // Storing data in Local Storage
    localStorage.setItem('html_code', htmlCode.value);
    localStorage.setItem('css_code', cssCode.value);
    localStorage.setItem('js_code', jsCode.value);

    // Executing HTML, CSS & JS code
    const resultDocument = resultFrame.contentDocument || resultFrame.contentWindow.document;
    resultDocument.open();
    resultDocument.write(`
        <style>${cssCode.value}</style>
        ${htmlCode.value}
        <script>${jsCode.value}<\/script>
    `);
    resultDocument.close();
}

// Run the code whenever there is a change in the textareas
htmlCode.oninput = runCode;
cssCode.oninput = runCode;
jsCode.oninput = runCode;

// Load saved data from Local Storage
if (localStorage.html_code) htmlCode.value = localStorage.html_code;
if (localStorage.css_code) cssCode.value = localStorage.css_code;
if (localStorage.js_code) jsCode.value = localStorage.js_code;

// Run the code on page load
runCode();


setTimeout(function() {
    document.getElementById('banner').style.display = 'block';
}, 10000);


document.getElementById('close-btn').addEventListener('click', function() {
    document.getElementById('banner').style.display = 'none';
});