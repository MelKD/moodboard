$( document ).ready(function() {
  
  // Set the div height to be equal to the div class
  // Used in the "Add images to " section in sidebar
  $widthVal = $('.height-equal-width').width();
  $('.height-equal-width').css('height', $widthVal + 'px');

  // This will change once implement toggle options
  $boardWidth = $('.square-board').width();
  $('.square-board').css('height', $boardWidth + 'px');

  $('.info-button').tooltip();


  // Hide tools and display message if size less than 1200px
  if($(window).width() < 1200) {
    $('.grey-background').css('display', 'none');
    $('.sidebar-section').css('display', 'none');
    $('.sidebar-wrap').css('border-right', '0px');
    var $smallScreenImage = ('<img class="small-screen-image" src="https://www.bela-design.com.au/wp-content/uploads/2020/06/image-12.png">');
    $('body').append($smallScreenImage);
    var $smallScreenMessage = 
    ('<p class="small-screen">Looking for the Bela mood board app? Please try again on your desktop.</p>');
    $('body').append($smallScreenMessage);
  }

});




// Colour selector code
function update(jscolor) {
  var selected = document.querySelectorAll('.selected');
  console.log(selected);
  var childElements = selected[0].childNodes;
  console.log(childElements);
  var swatchSVG = childElements[1];
  console.log(swatchSVG);
  swatchSVG.setAttribute("fill", '#' + jscolor);
}

// Drag and drop
// interact('.draggable')
//   .draggable({
//     // enable inertial throwing
//     inertia: true,
//     // keep the element within the area of it's parent
//     modifiers: [
//       interact.modifiers.restrictRect({
//         restriction: '',
//         endOnly: true
//       })
//     ],
//     // enable autoScroll
//     autoScroll: true,

//     listeners: {
//       // call this function on every dragmove event
//       move: dragMoveListener,
//     }
//   })

function dragMoveListener (event) {
  var target = event.target
  // keep the dragged position in the data-x/data-y attributes
  var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
  var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy

  // translate the element
  target.style.webkitTransform =
    target.style.transform =
      'translate(' + x + 'px, ' + y + 'px)'

  // update the posiion attributes
  target.setAttribute('data-x', x)
  target.setAttribute('data-y', y)
}

// this function is used later in the resizing and gesture demos
window.dragMoveListener = dragMoveListener;


window.addEventListener("load", function() {
  
  // Click to download your moodboard as an image
  // var cHeight = 750;
  // var cWidth = 750;
  // var canvas = document.getElementById( 'moodCanvas' ),
  // c = canvas.getContext( '2d' );

  // // resize the canvas
  // canvas.width = cWidth;
  // canvas.height = cHeight;

  // var link = document.createElement('a');
  // link.innerHTML = 'Download my mood board';
  // link.addEventListener('click', function(ev) {
  //     link.href = canvas.toDataURL();
  //     // link.download = "mymoodboard.png";
  //     link.download = "mymoodboard.jpg";
  // }, false);
  // document.getElementById('saveImageButton').appendChild(link);

});
