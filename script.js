//selecting all the elements that will be manipulated
var form = document.querySelector('form');
var topMeme = form.querySelector('#topText');
var memeUrl = form.querySelector('#memeURL');
var bottomMeme = form.querySelector('#bottomText');
var button = form.querySelector('button[type=submit]');
var memePlacement = document.querySelector('.placement');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  // get the image src that is loaded by the user
  var img = new Image();
  img.src = memeUrl.value;

  //create the meme that will be the placeholder container for all user inputs.
  var meme = document.createElement('div');
  meme.classList.add('meme');

  //Append Meme Img to our placeholder container
  meme.appendChild(img);

  //Append the Optional top text (if exists) to our placeholder container
  if (topMeme.value) {
    var top = document.createElement('span');
    top.classList.add('top-text');
    top.innerText = topMeme.value;
    meme.appendChild(top);
  }

  // Append the optional bottom text (if exists) to our placeholder container
  if (bottomMeme.value) {
    var bottom = document.createElement('span');
    bottom.classList.add('bottom-text');
    bottom.innerText = bottomMeme.value;
    meme.appendChild(bottom);
  }

  //Add the entire meme which is our placeholder container for our completed meme to the placement container at the bottom of our document
  memePlacement.appendChild(meme);

  //clear user input after form submit
  form.reset();

  //Change opacity when hovered over.
  meme.addEventListener("mouseover", function() {
    meme.classList.add("hovered");
  });

  //get back to the original img when hovered out.
  meme.addEventListener("mouseout", function () {
    meme.classList.remove("hovered");
  });

  //delete the meme on clicking it.
  meme.addEventListener('click', function (event) {
    meme.remove(meme);
  });

});






