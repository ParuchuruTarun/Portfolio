var tablinks = document.getElementsByClassName('tab_links');
var tabcontents = document.getElementsByClassName('tab_contents');

function openTab(tabName){
    for(tablink of tablinks){
        tablink.classList.remove('active_link');
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove('active_tab');
    }
    event.currentTarget.classList.add('active_link')
    document.getElementById(tabName).classList.add('active_tab')
}

// ------------------------------Show More in MyWorks------------------------------------------

const parentContainer = document.querySelector('#work');

parentContainer.addEventListener('click', event => {
    const current = event.target;
    const isReadMoreBtn = current.className.includes('show_more_btn');
    
    // If the clicked element is not a 'read more' button, exit
    if (!isReadMoreBtn) return;

    const currentText = current.parentNode.querySelector('.show_more');
    currentText.classList.toggle('show_more--show');
    
    // Toggle the button text between "Read More" and "Read Less"
    current.textContent = current.textContent.includes('show More') ? "show Less..." : "show More...";
});

