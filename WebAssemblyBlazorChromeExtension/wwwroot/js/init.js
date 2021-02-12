(function () {
    //alert("Hello from Init.js i.e; content_script");
    $.get(chrome.runtime.getURL('index.html'), function (data) {
        console.log(data);
        //debugger
        $(data).appendTo('#rhs');
       // $(data).appendTo('._8esl');
        // Or if you're using jQuery 1.8+:
        // $($.parseHTML(data)).appendTo('body');
    });
})();

//(function () {
//    function fnAddButtons() {
//        var btn = document.createElement("input");
//        btn.value = "Search apple-watches";
//        btn.id = "search-mm-btn";
//        btn.type = "submit";
//        document.querySelector(".FPdoLc.tfB0Bf center").appendChild(btn);
//    }

//    function fnDefineEvents() {
//        document
//            .getElementById("search-mm-btn")
//            .addEventListener("click", function (event) {
//                fnSearch(event.target.value.split(" ")[1]);
//            });
//    }
//    function fnSearch(str) {
//        document.querySelector(".gLFyf.gsfi").value = str;
//    }

   

//    fnAddButtons();
//    fnDefineEvents();
//})();