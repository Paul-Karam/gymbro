fetch('https://gym-bro.onrender.com/data')
      .then(response => response.json())
      .then(json => {
        json.Sheet1.forEach(element => {
            if(element.first_set==undefined){
                var section = ` <div class="service_item">
                           <div class="service_photo">
                                 <img src="${element.img}" alt="${element.title}" />
                                <div class="photo_overlay"></div>                       
                            </div>
                             <div class="service_caption">
                                <h4>${element.title}</h4>
                                 
                             </div>
                         </div>`
            }else{
                var section = ` <div class="service_item">
                           <div class="service_photo">
                                 <img src="${element.img}" alt="${element.title}" />
                                <div class="photo_overlay"></div>                       
                            </div>
                             <div class="service_caption">
                                <h4>${element.title}</h4>
                                 <ul>
                                     <li>${element.first_set}</li>
                                     <li>${element.second_set}</li>
                                 </ul>
                             </div>
                         </div>`
            }
              
             var div = document.createElement('div')
             div.className = "col-md-4 col-sm-6"
             div.innerHTML = section;
            document.getElementById('Mycontainer').appendChild(div);
         });
        });