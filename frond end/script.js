
function sendMessage() {

    let message = document.getElementById("msg").value;

    if (message.trim() === "") {
        document.getElementById("result").innerText =
            "Please enter a message!";
        return;
    }

    fetch("http://localhost:8080/message?text=" +
          encodeURIComponent(message))

        .then(response => response.text())

        .then(data => {
            document.getElementById("result").innerText = data;
        })

        .catch(error => {
            document.getElementById("result").innerText =
                "Backend connection failed!";
        });
}
