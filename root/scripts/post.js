function hidesavebutton(){
    save_button.style.display = "none";

}

function enableEditing()
{
  var post_title = document.getElementById('post_title');
  var para_edit = document.getElementById('para_edit');
  var edit_button = document.querySelector('#edit_button');
  var save_button = document.querySelector('#save_button');

  post_title.contentEditable = "true";
  para_edit.contentEditable = "true";
  post_title.classList.add("editable");
  para_edit.classList.add("editable");

  edit_button.style.display = "none";
  save_button.style.display = "inline-block";
}


function saveChanges()
{
  var post_title = document.getElementById('post_title');
  var para_edit = document.getElementById('para_edit');
  var edit_button = document.querySelector('#edit_button');
  var save_button = document.querySelector('#save_button');

  post_title.contentEditable = "true";
  para_edit.contentEditable = "true";
  post_title.classList.remove("editable");
  para_edit.classList.remove("editable");

  edit_button.style.display = "inline-block";
  save_button.style.display = "none";
}


var likeCount = 0;

function toggleLike() {
  var likeButton = document.getElementById("likeButton");
  var likeText = document.getElementById("likeText");
  var likeCountElement = document.getElementById("likeCount");
  
  likeCount++;
  
  if (likeCount === 1) {
    likeCountElement.textContent = "1 person likes this!";
  } else {
    likeCountElement.textContent = likeCount + " people like this!";
  }
  
  if (likeButton.classList.contains("liked")) {
    likeButton.classList.remove("liked");
    likeText.textContent = "Like";
    likeText.style.color = "white";
    likeText.classList.add("clicked");

  } else {
    likeButton.classList.add("liked");
    likeText.textContent = "Liked!";
    likeText.style.color = "white";
  }
}


var commentBox = document.getElementById("commentBox");
var submitButton = document.getElementById("submitButton");
var commentsContainer = document.getElementById("comments");

// Add click event listener to the submit button
submitButton.addEventListener("click", function() {
  // Get the comment text from the comment box
  var commentText = commentBox.value;

  // Clear the comment box
  commentBox.value = "";

  // Create a new comment element
  var commentElement = document.createElement("div");
  commentElement.className = "comment";
  commentElement.textContent = commentText;

  // Add the comment element to the comments container
  commentsContainer.appendChild(commentElement);
});