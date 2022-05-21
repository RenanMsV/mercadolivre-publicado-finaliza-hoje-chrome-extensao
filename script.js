async function parseURL(event) {
    /*const res = await fetch ("https://api.com/v1/data");
    const record = await res.json();
    console.log(record);*/
    chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
        let urlobj = new URL(tabs[0].url);
        if (urlobj.origin.includes("mercadolivre.com") == false) {
            return
        }
        // use `url` here inside the callback because it's asynchronous!
        let search_term = urlobj.pathname.split("_PriceRange_")[0] + `_PriceRange_0-${document.getElementById("maxPrice").value || 99999}`
        window.open(`${urlobj.origin}${search_term}${event.target.id || event.srcElement.id}`)
    });
}

document.getElementById("_PublishedToday_YES").addEventListener("click", parseURL, false);
document.getElementById("_FinishedToday_YES").addEventListener("click", parseURL, false);