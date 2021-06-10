function imgButton() {
    if (document.getElementById('image').src=='https://mymodernmet.com/wp/wp-content/uploads/2020/06/mariposa-monarca-fb.jpg') {
        document.getElementById('image').src='https://cdn.pixabay.com/photo/2021/06/04/15/51/coast-6310250_960_720.jpg'
    }else{
        document.getElementById('image').src='https://mymodernmet.com/wp/wp-content/uploads/2020/06/mariposa-monarca-fb.jpg';
    }
};