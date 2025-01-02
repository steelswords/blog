function showSpoilers(obj) {
    obj.nextElementSibling.style.display = 'block';
    console.log("Showing spoilers.");
    obj.innerHtml = "Hide Spoilers";
}

function hideSpoilers(obj) {
    obj.nextElementSibling.style.display = 'none';
    console.log("Hiding spoilers.");
    obj.innerHtml = "Show Spoilers";
}

function toggleSpoiler() {
    console.log("Toggling Spoiler contents");
    let contentDisplayStyle = this.nextElementSibling.style.display;
    if (contentDisplayStyle === 'none' || contentDisplayStyle === "")
    {
        showSpoilers(this);
    }
    else if (contentDisplayStyle === 'block')
    {
        hideSpoilers(this);
    }
    else
    {
        console.log("Can't figure out how contents are displayed.... Error time. contentDisplayStyle = " + contentDisplayStyle);
        console.log("Supposed to operate from button id ='" + this.id + "'");
        hideSpoilers(this);
    }
}

function addToggleSpoilerClickListenersToAllSpoilers() {
    let spoilerButtons = document.getElementsByClassName('spoiler-toggle')
    for (i = 0; i < spoilerButtons.length; i++)
    {
        let but = spoilerButtons.item(i);
        but.addEventListener("click", toggleSpoiler);
    }
}

addToggleSpoilerClickListenersToAllSpoilers();
