const submit_btn = document.querySelector(".submit");
const textarea = document.querySelector(".textarea");
const list = document.querySelector(".works-list");
const error_box = document.querySelector(".txt_error");
const char_limit = document.querySelector(".textarea_characters");



const submitHandler = () => {
    let txt = textarea.value;
    if (txt.length < 10) {
        error_box.style.display = "flex";
        error_box.textContent = "too low characters";
        error_handler("textarea_error", 1000);

        return;
    }
    if (txt.length > 100) {
        error_box.style.display = "flex";
        error_box.textContent = "too high characters";
        error_handler("textarea_error", 1000);
        return;
    }
    error_box.style.display = "none";
    char_limit.textContent = 100;
    const listItem = `<li class="work">
                    <div class="content">${txt}</div>
                    <div class="buttons">
                        <button class="delete"><i class="fa fa-trash" aria-hidden="true"></i></button>
                        <button class="did"><i class="fa fa-check" aria-hidden="true"></i></button>
                    </div>
                </li>`;
    list.insertAdjacentHTML("afterbegin", listItem);
    textarea.value = "";


}

const error_handler = (className, time) => {
    textarea.classList.add(className);
    setTimeout(() => {
        textarea.classList.remove(className);
    }, time);
}
function charactersHandler() {
    const now_length = textarea.value.length;
    const max_length = 100;
    char_limit.textContent = max_length - now_length;
}


function deleteOrDone(event) {
    const clickedEl = event.target;
    if (clickedEl.className.includes("delete") || clickedEl.className.includes("fa-trash")) {
        clickedEl.closest(".work").style.display = "none";
    }
    if (clickedEl.className.includes("did") || clickedEl.className.includes("fa-check")) {
        clickedEl.closest(".work").style.backgroundColor = "rgb(200 , 255 , 200)";
        clickedEl.closest(".work").style.border = "2px solid green";
        clickedEl.closest(".work").querySelector(".content").style.color = "green";
        const mark = `<i class="fa fa-check" aria-hidden="true"></i>  `;
        clickedEl.closest(".work").querySelector(".content").insertAdjacentHTML("afterbegin", mark);
    }

}




list.addEventListener("click", deleteOrDone);
textarea.addEventListener("input", charactersHandler);
submit_btn.addEventListener("click", submitHandler);
