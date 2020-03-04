window.onload = () => {
    var input = document.getElementById("input-textbox");

    input.addEventListener('keyup', (e) => {
        if (e.keyCode === 13) {
            var value = input.value;
            var div_text_content_area = document.createElement("div");
            var div_text_content = document.createElement("div");
            var textnode = document.createTextNode(value);
            var div_text_display_area = document.getElementById("text-display-area");

            div_text_content_area.appendChild(div_text_content); 
            div_text_content.appendChild(textnode); 
            div_text_content_area.className = "text-content-area";
            div_text_content.className="text-content";
            div_text_display_area.appendChild(div_text_content_area);

            input.value = '';
        }
    })
}
