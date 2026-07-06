const search = document.getElementById("search");
const cards = document.querySelectorAll(".card");
const comments = document.getElementById('comments')



addComment.addEventListener("click", () => {
    if (comments.value.trim() === "") return;

    const li = document.createElement("li");
    li.textContent = comments.value;

    commentList.appendChild(li);

    comments.value = "";
    


search.addEventListener("keyup", function () {

    const value = search.value.toLowerCase();

    cards.forEach(card => {


        const title = card.querySelector("h3").textContent.toLowerCase();

        if(title.includes(value)){
            card.style.display = "block";
        }else{
            card.style.display = "none";
        }

    });

});


