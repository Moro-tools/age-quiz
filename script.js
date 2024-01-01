const start = document.getElementById("start");
start.addEventListener("click", function() {
    let title = document.getElementById("title");
    let card = document.getElementById("card");

    
    
    title.parentNode.removeChild(title);
    start.parentNode.removeChild(start);
    card.innerHTML = `
        <h2 class="q" id="q1">How old Zayd is?</h2>
        <div class="choices-1">
            <div class="choose1" id="q1-1">16</div>
        </div>
        <div class="choices-2">
            <div class="choose2" id="q1-2">20</div>
        </div>
        <div class="choices-3">
            <div class="choose3" id="q1-3">18</div>
        </div>
        <button id="submit">Submit</button>
    `;
    let q = document.getElementById("q1");
    let c1 = document.getElementById("q1-1");
    let c2 = document.getElementById("q1-2");
    let c3 = document.getElementById("q1-3");
    let submit = document.getElementById("submit");
    let true1 = false;
    c1.addEventListener("click",function(){
    c1.style.color = "black"
    c2.style.color = "white"
    c3.style.color = "white"
    true1 = true;
})
c2.addEventListener("click",function(){
    c1.style.color = "white";
    c2.style.color = "black";
    c3.style.color = "white";
    true1 = false;
})
c3.addEventListener("click",function(){
    c1.style.color = "white";
    c2.style.color = "white";
    c3.style.color = "black";
    true1 = false;
})
submit.addEventListener("click",function(){
    if(true1){
        q.parentNode.removeChild(q);
        c1.parentNode.removeChild(c1);
        c2.parentNode.removeChild(c2);
        c3.parentNode.removeChild(c3);
        submit.parentNode.removeChild(submit);
        card.innerHTML = `<h2 class="q" id="result">Results:</h2>
        <img src="win.png" width="150px">
        <p class="win-lose">Congratulations you have finiched the quiz with the full mark.</p>
        <button class="repeat" id="repeat">Repeat?</button>`
        let repeat = document.getElementById("repeat");
        repeat.addEventListener("click", function(){
            location.reload();
        })
    }else{
        q.parentNode.removeChild(q);
        c1.parentNode.removeChild(c1);
        c2.parentNode.removeChild(c2);
        c3.parentNode.removeChild(c3);
        submit.parentNode.removeChild(submit);
        card.innerHTML = `            <h2 class="q">Results:</h2>
        <img src="lose.png" width="150px">
        <p class="win-lose">Unfortuantly you lost.</p>
        <button class="repeat" id="repeat">Repeat?</button>`
        let repeat = document.getElementById("repeat");
        repeat.addEventListener("click", function(){
            location.reload();
        })
    }
})
});
