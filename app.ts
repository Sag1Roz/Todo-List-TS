const data = [
  { id: "1", todo: "Buy milk", isCompleted: false },
  { id: "2", todo: "Eat cat", isCompleted: false },
  { id: "3", todo: "Go to shelter ", isCompleted: false },
];

const displayContent = document.querySelector("#displayContent");
const input: HTMLInputElement | null = document.querySelector("#inputValue");
const addButton = document.querySelector("#addButton");

addButton?.addEventListener("click", addTodo);

renderToHtml();

function removeTodo(id: string) {
  console.log(id);

  if (displayContent !== null) {
    displayContent.innerHTML = "";
    const index = data.findIndex((todo) => {
      return todo.id == id;
    });
    if (index !== -1) {
      data.splice(index, 1);
      renderToHtml();
    }
  }
}

function changeCompleted(id: string) {
  if (displayContent !== null) {
    displayContent.innerHTML = "";
    const index = data.findIndex((todo) => {
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
    } else {
      data.push({
        id: crypto.randomUUID(),
        todo: input.value,
        isCompleted: false,
      });

      renderToHtml();
    }
    input.value = "";
  } else return;
}

function renderToHtml() {
  data.forEach((todo) => {
    const div = document.createElement("div");
    div.innerHTML = `
      <div class="correction">
          <p class ="${todo.isCompleted ? "completed" : ""}">${todo.todo}</p>
          <div class="buttons">
            <button onclick="removeTodo(${todo.id})">Remove</button>
            <button onclick="changeCompleted(${todo.id})">${
      todo.isCompleted ? "Completed" : "Not completed"
    }</button>
          </div>
        </div>
    `;
    displayContent?.appendChild(div);
  });
}
