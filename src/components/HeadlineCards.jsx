import React from 'react'

 const HeadlineCards = () => {
  return (
    <div className='max-w-[1640] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
 
    <div className='rounded-xl relative'>
   
        <div className='absolute w-full bg-black/50 rounded-xl text-white'>
            <p>Sun's Out, BOGO's Out</p>
            <p>Through 8/26</p>
            <button>Order Now</button>
        </div>

        <img
        className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src='https://images.unsplash.com/photo-1613769049987-b31b641f25b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGJyZWFrZmFzdHxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60'
          alt='/'
        />
           
      
            </div>
            </div>
  );
};

export default HeadlineCards;