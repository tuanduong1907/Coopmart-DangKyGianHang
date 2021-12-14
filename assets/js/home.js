

// Click Menu
function handleMenuListJob(event) {
    event.stopPropagation();
    document.querySelector('.container__header-list-option').classList.toggle('active')
    document.querySelector('.navbar__sub-menu-list').classList.remove('active')
    document.querySelector('.overlay1').classList.toggle('active')
}

function handleMenuCategory(event) {
    event.stopPropagation();
    document.querySelector('.overlay1').classList.toggle('active')
    document.querySelector('.container__body-info-wrap').classList.toggle('active')
}


function handleMenuNav(event) {
    event.stopPropagation();
    document.querySelector('.navbar__sub-menu-list').classList.toggle('active')
    document.querySelector('.container__header-list-option').classList.remove('active')
}

function handleShowNotifi(event) {
    event.stopPropagation();
    document.querySelector('.notifi-check').classList.toggle('active')
}

function handleCloseNotifi(event){
    event.stopPropagation();
    var test = document.querySelector('.active')
    if (test || test !== null) {
        document.querySelector('.notifi-check').classList.remove('active')
       
    }
}

$(window).click(function (e) {
    var test = document.querySelector('.active')
    if (test || test !== null) {
        document.querySelector('.container__header-list-option').classList.remove('active')
        document.querySelector('.container__body-info-wrap').classList.remove('active')
        document.querySelector('.navbar__sub-menu-list').classList.remove('active')
        document.querySelector('.overlay1').classList.remove('active')
        document.querySelector('.notifi-check').classList.remove('active')

    }
});





