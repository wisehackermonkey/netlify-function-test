let naughty_strings_list = []


//copy text to clipboard
function copyToClipboard(text) {
    if (window.clipboardData && window.clipboardData.setData) {
        // IE specific code path to prevent textarea being shown while dialog is visible.
        return clipboardData.setData("Text", text);
    }
    else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
        var textarea = document.createElement("textarea");
        textarea.textContent = text;
        textarea.style.position = "fixed";  // Prevent scrolling to bottom of page in MS Edge.
        document.body.appendChild(textarea);
        textarea.select();
        try {
            return document.execCommand("copy");  // Security exception may be thrown by some browsers.
        } catch (ex) {
            console.warn("Copy to clipboard failed.", ex);
            return false;
        } finally {
            document.body.removeChild(textarea);
        }
    }
}

//append to ul list text element
function appendToList(list, text) {
    var input_el = document.createElement("input");
    input_el.type = "text";
    input_el.value = text;



    var li = document.createElement("li");
    li.innerHTML = input_el;
    // li.appendChild(input_el);
    list.appendChild(li);
}
let getDataSet = async (url) => {
    let serverURL = await (await fetch(".netlify/functions/naughty_strings")).json();
    return serverURL["data"]
}





//append to li child input box
function appendToInput(input, text) {

}

let main = async () => {
    let list_elem = document.getElementById("list_ul")

    // try{
    // }catch(err){
    //     console.log(err);
    // }
    getDataSet().then(naughty_strings_list => {
        console.log(naughty_strings_list)
        for (let i = 0; i < naughty_strings_list.length; i++) {
            console.log(naughty_strings_list[i])
            appendToList(list_elem, naughty_strings_list[i]);
        }
    })
}

main()