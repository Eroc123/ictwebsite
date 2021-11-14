console.log('ww');
async function animate() {
  await height()

  var headerpos = window.innerHeight;

  var header = document.getElementById('header')
  var nav = document.getElementById('nav')
  nav.style.left = "-"+nav.clientHeight+"px";

  header.style.top = headerpos + "px";


  var center = window.innerHeight/2;
  var center = center-header.clientHeight/2;
  console.log(center);
  console.log(header.clientHeight);
  animateheader(center, header)
  await new Promise(r => setTimeout(r, 1000));
  animatenav()
  console.log('Staring nav animation');

}



async function height() {
  var item = document.getElementsByClassName('subitem')
  var item = document.getElementsByClassName('item')
  var head = document.getElementsByClassName('head')

  var i;
  window.scrollTo(0, 0);
  for (i = 0; i < head.length; i++) {
    head[i].style.height =  window.innerHeight+'px'
  }
  var head = document.getElementsByClassName('ict')
  var i;
  for (i = 0; i < head.length; i++) {
    head[i].style.height =  window.innerHeight+'px'
  }
  var i;
  for (i = 0; i < item.length; i++) {
    item[i].style.width =  window.innerWidth/10*8+'px'
  }

  //var itemwidth = item[0].clientWidth
  //var item2 = document.getElementsByClassName('item')
  //var i;
  //for (i = 0; i < item2.length; i++) {
  //  item2[i].style.width =  itemwidth+'px'
  //}
  //console.log(itemwidth);
  //var i;
  //for (i = 0; i < item.length; i++) {
  //  item[i].style.width =  itemwidth+'px'
  //}
}

async function showarrow() {
  var arrow = document.getElementById('downarrow')
  var center = window.innerHeight/2;
  var center = center-arrow.clientHeight/2;
  console.log(center);
  arrow.style.left = center;
  await new Promise(r => setTimeout(r, 1000));

  arrow.style.opacity = 1;
}

async function animateheader(center, header) {
  //Start of animation code
  let id = null;
  var headerpos = window.innerHeight;
  clearInterval(id);
  id = setInterval(frame, 5);
  async function frame() { //Animating header
    header.style.top = center+160 + "px";
    header.style.top = center+80 + "px";
    header.style.top = center+40 + "px";
    header.style.top = center+20 + "px";
    header.style.top = center + "px";

  }
  showarrow()

}

function animatearrow() {
  var arrow = document.getElementById('arrow')
  arrow.classList.toggle('show')
}

function animatenav() {

  //Start of animation code
  var nav = document.getElementById('nav')
  let id = null;
  var pos = -nav.clientWidth;
  console.log(pos);
  clearInterval(id);
  id = setInterval(frame, 5);
  function frame() { //Animating header
    if (pos > -80) {
        if (pos > -40) {
            if (pos > -20) {
                if (pos > 0) {
                  return;
                } else {
                  pos++;
                  nav.style.left = pos + "px";
                }

            } else {
              pos++;
              nav.style.left = pos + "px";
            }

        } else {
          pos++;
          pos++;
          nav.style.left = pos + "px";
        }

    } else {
      pos++;
      pos++;
      pos++;
      nav.style.left = pos + "px";
    }
  }

}
