import React, { useEffect, useRef, useState } from 'react'

const Narutoship = () => {

    const [isVisible,setIsVisible]=useState(false);
    const narutoShipRef=useRef(null);

    useEffect(()=>{
        const observer =new IntersectionObserver(
            ([entry])=>{
                setIsVisible(entry.isIntersecting)
            },
            {
                root:null,
                rootMargin:'0px',
                threshold:0.1,
            }
        );
        if (narutoShipRef.current){
            observer.observe(narutoShipRef.current)
        }
        return ()=>{
            if (narutoShipRef.current){
                observer.unobserve(narutoShipRef.current);
            }
        }
    });

    
  return (
    <div className=' relative top-15  h-[100vh] overflow-hidden  top-15 w-full  bg-[url(src/assets/naruto1.png)] md:bg-right bg-cover  '>
        <div className='absolute flex items-center justify-center top-0 left-0 right-0  '>

<img 
 width={200}
 height={200}
src='https://upload.wikimedia.org/wikipedia/commons/1/15/Logo_Naruto_Shipp%C5%ABden.svg' />

</div>
     <div>
      <h1 className=' mt-10 text-zinc-400 md:text-9xl md:pl-[60vw] opacity-0 md:opacity-100 ml-5'>Naruto Shipuden</h1>
      <p className='info1 text-zinc-400 ml-5 text-2xl md:pl-[60vw] mt-10'>The second anime series, titled Naruto: Shippuden[h], developed by Studio Pierrot and directed by Hayato Date, is a direct sequel to the first Naruto anime series; it corresponds to Part II of the manga.[32] It debuted on Japanese TV on February 15, 2007, on TV Tokyo, and concluded on March 23, 2017.[33][34] On January 8, 2009, TV Tokyo began broadcasting new episodes via internet streaming to monthly subscribers. Each streamed episode was available online within an hour of its Japanese release and includes English subtitles.[35]</p>
      
      <p className='info2 text-zinc-400 mt-20 text-2xl md:pl-[60vw]
      sm:hidden md:block'>Naruto was adapted into 11 theatrical films. The first three films correspond to the first anime series, and the remaining eight correspond to the second.</p>
     </div>

    </div>
  )
}

export default Narutoship