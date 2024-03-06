window.addEventListener('scroll', function () {
    let scroll = this.scrollY;
    const pageNumber = document.querySelector(".pageNumberCounter");

    console.log(scroll);
    if (scroll<6169) {
        pageNumber.innerHTML = '1 _ 4';
    }else if (scroll>=6169 && scroll<=11122) {
        pageNumber.innerHTML = '2 _ 4';
    }else if (scroll>=11122 && scroll<=27460) {
        pageNumber.innerHTML = '3 _ 4'
    }else {
        pageNumber.innerHTML = '4 _ 4'
    }
});