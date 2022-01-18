var $grid = $('.grid').masonry({
  itemSelector: '.grid__item',
  columnWidth:'.grid_columnWidth' ,
  gutter: '.gutter_sizer'
  });

  $grid.on( 'click', '.grid__item', function() {
    // change size of item via class
    $( this ).toggleClass('grid__item_gigante');
    // trigger layout
    $grid.masonry();
  });
  

// layout Masonry after each image loads
$grid.imagesLoaded().progress( function() {
  $grid.masonry();
}); 