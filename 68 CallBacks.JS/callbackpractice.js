const callbackfun = (arg) => {
    alert(arg);
    setTimeout(() => {
        let boxselect = document.querySelector(".box");
        boxselect.innerHTML = "NEHA";
        boxselect.style.fontSize = "222px";
        boxselect.style.border = "10px solid rgba(168, 108, 108, 0.67)";
        boxselect.style.padding = "88px";
        boxselect.style.margin = "55px";
        boxselect.style.backgroundImage = "url(download.jpg)";
        boxselect.style.backgroundSize = "cover";
        boxselect.style.backgroundPosition = "center";
        // boxselect.style.backgroundColor = "rgba(161, 50, 50, 0.34)";
        boxselect.style.color = "white";
    }, 2000);
}

const loadfile = (srcN, callbackfun) => {
    let scelement = document.createElement("script");
    scelement.src = srcN;
    document.body.append(scelement);
    scelement.onload = () => {
        callbackfun("Something different!");
    }
}
loadfile("Synchronous.js", callbackfun); 