// Add event listener to form submission
document
.getElementById("contactForm")
.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form from submitting

  // Get form data
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  // Format email body
  var body = "Name: " + name + "\n";
  body += "Email: " + email + "\n\n";
  body += "Message:\n" + message;

  // Create a mailto link with the email address and body
  var mailtoLink =
    "mailto:zainsbusinessemail@gmail.com?subject=Contact%20Form%20Submission&body=" +
    encodeURIComponent(body);

  // Create a hidden anchor element
  var anchor = document.createElement("a");
  anchor.href = mailtoLink;
  anchor.style.display = "none";

  // Append the anchor to the document
  document.body.appendChild(anchor);

  // Simulate a click event on the anchor
  anchor.click();

  // Clean up the anchor element
  document.body.removeChild(anchor);
});