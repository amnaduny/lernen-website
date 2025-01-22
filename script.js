
function loadNavbar() {
    fetch('index.html')
        .then(response => response.text())
        .then(data => {
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = data;
            const navbar = tempDiv.querySelector('#navbar-section');
            
            document.body.insertAdjacentHTML('afterbegin', navbar.outerHTML); 
        })
        .catch(error => console.error('Error loading navbar:', error));
}


window.addEventListener('load', loadNavbar);
