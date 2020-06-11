async function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let nlpUrl = document.getElementById('url').value
    if  (!Client.validateURL (nlpUrl)) {
        console.log('Wrong url entered')
    }

    console.log("::: Form Submitted :::")
    await fetch("http://localhost:8081/nlpAnalysis", {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({url:nlpUrl})
    })
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('polarity').innerHTML = res.polarity
        document.getElementById('subjectivity').innerHTML = res.subjectivity
        document.getElementById('polarity_confidence').innerHTML = res.polarity_confidence
        document.getElementById('subjectivity_confidence').innerHTML = res.subjectivity_confidence
        document.getElementById('text').innerHTML = res.text
    })
}

export { handleSubmit }
