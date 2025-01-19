import React from 'react'

const Hero = () => {
  return (

    
    <div className=' overflow-hidden  top-15 w-full h-[100vh] bg-[url(src/assets/narutonew.jpg)] md:bg-right bg-cover   '
    
    >
       <div className='nav flex items-center justify-center fixed top-0 left-0 right-0'>

<img 
 width={200}
 height={200}
src='https://upload.wikimedia.org/wikipedia/commons/c/c9/Naruto_logo.svg' />

</div>
     <div>
      <h1 className='text-zinc-400 text-9xl'>Naruto</h1>
      <p className='info1 text-zinc-400 text-2xl md:pr-[60vw]'>is a Japanese manga series written and illustrated by Masashi Kishimoto. It tells the story of Naruto Uzumaki, a young ninja who seeks recognition from his peers and dreams of becoming the Hokage, the leader of his village. The story is told in two parts: the first is set in Naruto's pre-teen years (volumes 1–27), and the second in his teens (volumes 28–72). The series is based on two one-shot manga by Kishimoto: Karakuri (1995), which earned Kishimoto an honorable mention in Shueisha's monthly Hop Step Award the following year, and Naruto (1997).</p>
      
      <p className='info2 text-zinc-400 mt-20 text-2xl md:pr-[60vw]'>Naruto is one of the best-selling manga series of all time, having 250 million copies in circulation worldwide in 47 countries and regions, with 153 million copies in Japan alone and remaining 97 million copies elsewhere.</p>
     </div>

    </div>
  )
}

export default Hero