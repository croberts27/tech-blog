const id = window.location.toString().split("/")[
  window.location.toString().split("/").length - 1
];

const updateForm = async (event) => {
  event.preventDefault();
  const title = document.querySelector('input[name="post-title"]').value;
  const content = document.querySelector('textarea[name="post-content"]').value;

  const response = await fetch(`/api/post/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      postId: id,
      title,
      content,
    }),
    headers: { "Content-Type": "application/json" },
  });
  if (response.ok) {
    document.location.replace("/dashboard/");
  } else {
    alert("Error! Cannot update post.");
  }
};

document.querySelector(".update-form").addEventListener("submit", updateForm);
