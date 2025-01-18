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

function show() {
    const hiddenItems = document.querySelector('.show_more');
    const btn = document.querySelector('.show_more_btn');

    if (hiddenItems.classList.contains('show_more--show')) {
        hiddenItems.classList.remove('show_more--show');
        btn.textContent = 'Show More...';
    } else {
        hiddenItems.classList.add('show_more--show');
        btn.textContent = 'Show Less';
    }
}
