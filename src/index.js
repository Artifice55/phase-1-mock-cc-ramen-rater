fetch("http://localhost:3000/ramens")
.then(res => res.json())
.then(ramens => {


    ramens.forEach(ramen => {
            const imgTag = document.createElement("img")
            const divTag = document.querySelector("#ramen-menu")
                imgTag.src = ramen.image

                divTag.append(imgTag)
    })

       const button = document.querySelector("#ramen-menu")
       
     button.addEventListener('click', event => {
            const imgTag = document.querySelector(".detail-image")
            
            imgTag.src = ramens.image

                
        
     })
        
      
       
    
}) 

     
 
          
            
            
             
                   
       
            
          
            
        
        
        
    
        
      
