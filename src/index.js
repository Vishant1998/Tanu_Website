setIframe("childPage", "welcome.html", "welcomepageId");
setBodyBackground("images/college2.jpeg");
const link = document.querySelectorAll('[id="clickme"]');
link.forEach((item) => {
  item.addEventListener("click", (event) => {
    console.log("innerText: ", event.target.innerText);
    let innerText = event.target.innerText;
    if (innerText === "HOME") {
      setBodyBackground("images/college2.jpeg");
      setIframe("childPage", "welcome.html", "welcomepageId");
    } else if (innerText === "COLLEGE") {
      setBodyBackground("images/college3.jpeg");
      setIframe("childPage", "new.html", "collegepageId");
    } else if (innerText === "HOSTEL") {
      setBodyBackground("images/hostel.jpeg");
      setIframe("childPage", "hostel1.html", "hostelpageId");
    } else if (innerText === "MESS") {
      setBodyBackground("images/mess.jpeg");
      setIframe("childPage", "mess.html", "messpageId");
    } else if (innerText === "SPORTS") {
      setBodyBackground("images/tabletennis.jpeg");
      setIframe("childPage", "sports.html", "sportspageId");
    } else if (innerText === "TEAM") {
      setBodyBackground("");
      setIframe("childPage", "contact.html", "teampageId");
    } else if (innerText === "TRIPS") {
      setBodyBackground("images/trip-bg.jpeg");
      setIframe("childPage", "trip2.html", "tripspageId");
    }
  });
});

function setIframe(element, location, id) {
  var theIframe = document.createElement("iframe");
  theIframe.id = id;
  theIframe.src = location;
  theIframe.style = "border:none;overflow:hidden;width:100%";
  var targetDiv = document.getElementById(element);
  console.log("innerText: ", targetDiv);
  console.log("innerText: ", targetDiv.childNodes);
  console.log("innerText: ", targetDiv.childNodes.length);
  if (targetDiv.childNodes.length > 0) {
    targetDiv.removeChild(targetDiv.childNodes[0]);
  }
  targetDiv.appendChild(theIframe);
  setIframeHeight(id);
}

function setIframeHeight(id) {
  const theIframe = document.getElementById(id);
  theIframe.addEventListener("load", function () {
    let height = theIframe.contentDocument.body.scrollHeight + 20;
    theIframe.style.height = height + "px";
  });
}

function setBodyBackground(imageUrl) {
  document.body.style =
    "background-image:linear-gradient(rgba(4, 9, 30, 0.7),rgba(4, 9, 30, 0.7)),url(" +
    imageUrl +
    ");background-color: rgb(48, 127, 180);";
}
