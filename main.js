$("#form").submit(e => {
    e.preventDefault();
    loadJson();
})

async function loadJson() {
    const csData = await fetch('./credentials/custom-search-api.json').then((data) => data.json())
    var urlTemplate = "https://www.googleapis.com/customsearch/v1?[parameters]"
    var MY_API_KEY = csData.apiKey;
    var MY_SE_ID = csData.searchEngineId;
    var tech = $("#search").val()
    var query = tech + " documentation";
    
    url = urlTemplate.replace("[parameters]", `key=${MY_API_KEY}&cx=${MY_SE_ID}&q=${query}`);
    loadUrl(url)
}


async function loadUrl(url) {
    const res = await fetch(url).then((data) => data.json())
    var siteDocumentacao = res.items[0].link;
    window.open(siteDocumentacao, '_blank');
}

