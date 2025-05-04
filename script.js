function writeF(){
    fetch("readFile.php").then(response => response.text()).then(data => {document.getElementById("T").textContent = data})
}

setInterval(writeF, 300)

document.getElementById("mainForm").addEventListener("submit", function(e){
    e.preventDefault();
    fetch("main.php",
        {method: "POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: "username=" + encodeURIComponent(document.getElementById("username").value) + "&message=" + encodeURIComponent(document.getElementById("message").value)
        }
    )
})