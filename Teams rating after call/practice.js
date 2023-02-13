function starPattern(ele, count, cb){
   let active = -1;
   const element = document.querySelector(ele);
   const frag = document.createDocumentFragment();
   for(let i=1;i<=count;i++){
      const item = document.createElement("i");
      item.classList.add("fa");
      item.classList.add("fa-star-o");
      item.dataset.rating = i;
      frag.appendChild(item);
   }
   element.appendChild(frag);
   element.addEventListener('mouseover',onmouseOver);
   element.addEventListener('click',onmouseClick);
   element.addEventListener('mouseleave',onmouseLeave);

   function onmouseOver(e){
      let ratingVal = e.target.dataset.rating;
      if(!ratingVal){
         return;
      }
      fillStars(ratingVal);
      getStar(ratingVal);
   }
   function onmouseClick(e){
      active = e.target.dataset.rating;
      fillStars(active);
      cb(active);
   }
   function onmouseLeave(e){
      fillStars(active);
      getStar(active);
   }

   function fillStars(ratingVal){
      for(let i=0;i<count;i++){
         if(i<ratingVal){
            element.children[i].classList.add("fa-star");
         }else{
            element.children[i].classList.remove("fa-star");
         }
      }
   }
}

function getStar(value){
   let dispValue = document.querySelector("#display-star-value");
   if(value === -1){
      dispValue.innerHTML = "";
      return;
   }
   if(value<=2){
      dispValue.innerHTML = "The quality was bad";
   }else if(value==3){
      dispValue.innerHTML = "The quality was average";
   }else if(value>3){
      dispValue.innerHTML = "The quality was excellant";
   }
}
starPattern("#star",5, getStar);