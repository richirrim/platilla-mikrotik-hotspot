const templateGlide = `
  // ------------- glide js ---------------
  div(class="glide" id=idGlide)
    // ------- glide items ----------------- 
    div(class="glide__track" data-glide-el="track")
      ul.glide__slides
        li.glide__slide: +cardServices(id, card.nameFile, card.title, card.text)
    // ---------- glide controls --------------- 
    div(class="glide__arrows" data-glide-el="controls")
      button(class="glide__arrow  glide__arrow--left button  icon-arrow-left" data-glide-dir="<" type="button")
      button(class="glide__arrow  glide__arrow--right  button  icon-arrow-right" data-glide-dir=">" type="button")
`
