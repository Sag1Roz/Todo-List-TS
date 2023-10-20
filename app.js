var data = [
    { id: "1", todo: "Buy milk", isCompleted: false },
    { id: "2", todo: "Eat cat", isCompleted: false },
    { id: "3", todo: "Go to shelter ", isCompleted: false },
];
var displayContent = document.querySelector("#displayContent");
var input = document.querySelector("#inputValue");
var addButton = document.querySelector("#addButton");
addButton === null || addButton === void 0 ? void 0 : addButton.addEventListener("click", addTodo);
renderToHtml();
function removeTodo(id) {
    console.log(id);
    if (displayContent !== null) {
        displayContent.innerHTML = "";
        var index = data.findIndex(function (todo) {
            return todo.id == id;
        });
        if (index !== -1) {
            data.splice(index, 1);
            renderToHtml();
        }
    }
}
function changeCompleted(id) {
    if (displayContent !== null) {
        displayContent.innerHTML = "";
        var index = data.findIndex(function (todo) {
            return todo.id == id;
        });
        if (index !== -1) {
            data[index].isCompleted = !data[index].isCompleted;
            renderToHtml();
        }
    }
}
function addTodo() {
    if (input !== null && displayContent !== null) {
        displayContent.innerHTML = "";
        input.style.borderColor = "#a782ec";
        if (input.value.length <= 2) {
            input.style.borderColor = "red";
            renderToHtml();
        }
        else {
            data.push({
                id: crypto.randomUUID(),
                todo: input.value,
                isCompleted: false,
            });
            renderToHtml();
        }
        input.value = "";
    }
    else
        return;
}
function renderToHtml() {
    data.forEach(function (todo) {
        var div = document.createElement("div");
        div.innerHTML = "\n      <div class=\"correction\">\n          <p class =\"".concat(todo.isCompleted ? "completed" : "", "\">").concat(todo.todo, "</p>\n          <div class=\"buttons\">\n            <button onclick=\"removeTodo(").concat(todo.id, ")\">Remove</button>\n            <button onclick=\"changeCompleted(").concat(todo.id, ")\">").concat(todo.isCompleted ? "Completed" : "Not completed", "</button>\n          </div>\n        </div>\n    ");
        displayContent === null || displayContent === void 0 ? void 0 : displayContent.appendChild(div);
    });
}
