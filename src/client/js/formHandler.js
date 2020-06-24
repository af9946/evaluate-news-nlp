function handleSubmit(event) {
    event.preventDefault()
    const errMsg = document.getElementById('errorMessage');
    document.getElementById('polarity').innerHTML = ""
    document.getElementById('subjectivity').innerHTML = ""
    document.getElementById('polarity_confidence').innerHTML = ""
    document.getElementById('subjectivity_confidence').innerHTML = ""
    document.getElementById('text').innerHTML = ""

    // check what text was put into the form field
    let nlpUrl = document.getElementById('url').value
    if (Client.validateURL(nlpUrl)) {
        errMsg.style.display = "none"
        console.log("::: Form Submitted :::")
        fetch("http://localhost:8081/nlpAnalysis", {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ url: nlpUrl })
        })
            .then(res => res.json())
            .then(function (res) {
                if (res == false){
                    console.log("::: Invalid Input :::");
                    errMsg.textContent = "Invalid URL, Please try again.";
                    errMsg.style.display = "block";
                }
                document.getElementById('polarity').innerHTML = res.polarity
                document.getElementById('subjectivity').innerHTML = res.subjectivity
                document.getElementById('polarity_confidence').innerHTML = res.polarity_confidence
                document.getElementById('subjectivity_confidence').innerHTML = res.subjectivity_confidence
                document.getElementById('text').innerHTML = res.text
            })
        } else {
            errMsg.textContent = "Invalid URL";
            errMsg.style.display = "block";
        }
}

module.exports = handleSubmit;
