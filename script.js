// Function to dynamically load the navbar from index.html
function loadNavbar() {
    fetch('index.html')
        .then(response => response.text())
        .then(data => {
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = data;
            const navbar = tempDiv.querySelector('#navbar-section');
            // document.getElementById('navbar').innerHTML = navbar.outerHTML;
            document.body.insertAdjacentHTML('afterbegin', navbar.outerHTML); // adding the navbar by replacing the id="navbar"
        })
        .catch(error => console.error('Error loading navbar:', error));
}

// Ensure the navbar loads after the page content
window.addEventListener('load', loadNavbar);
