$grid = $('.grid').masonry({
    itemSelector: '.grid__item',
    columnWidth: 120,
    gutter: 6,
    isFitWidth: true,
    stamp: '.stamp'
});

$grid.on( 'mouseover', '.grid__item', function() {
$( this ).toggleClass('grid__item--gigante');
});

$grid.on('mouseleave', '.grid__item', function () {

$(this).removeClass('grid__item--gigante');

});