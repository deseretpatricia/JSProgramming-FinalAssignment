$(document).ready(function() {
    var currentIndex = 0;
    var images = [
      { thumbnail: 'thumbnail1.jpg', large: 'image1.jpg' },
      { thumbnail: 'thumbnail2.jpg', large: 'image2.jpg' },
      { thumbnail: 'thumbnail3.jpg', large: 'image3.jpg' }
    ];
  
    function showImage(index) {
      var imagePath = images[index].large;
      $('.main-image img').fadeOut(300, function() {
        $(this).attr('src', imagePath).fadeIn(300);
      });
    }
  
    $('.thumbnails img').click(function() {
      var index = $(this).parent().index();
      showImage(index);
      currentIndex = index;
    });
  
    $('.prev-btn').click(function() {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      showImage(currentIndex);
    });
  
    $('.next-btn').click(function() {
      currentIndex = (currentIndex + 1) % images.length;
      showImage(currentIndex);
    });
  });