$btn = document.querySelector(".button");

$btn.addEventListener("click", function() {
	var self = this;
	this.classList.add("pressed");
	setTimeout(function() {
		self.classList.remove("pressed");
	}, 350);
});

function addHoverEffect() {
  let hoverDiv = document.querySelector(".hover-effect");
  hoverDiv.addEventListener("mouseover", function() {
    hoverDiv.style.backgroundColor = "blue";
  });
}
