<template>
 <nav class="py-10 bg-yellow-600 shadow flex md:block -z-10">
    <!-- Hamburger Icon -->    
            
        <div class="flex justify-between container mx-auto px-5">     
           <div class="">
            <ul class="hidden md:flex space-x-4 text-xl font-bold ">
            <li class="hover:opacity-75"> <a  href="#"> HOME</a></li>
            <li class="hover:opacity-75"> <a href="#"> CONTACT</a></li>
           </ul>
           </div>

          <div id="image " class="z-10 md:ml-10 text-center hover:opacity-75"><img class="w-70" src="@/assets/img/logo.svg" alt="logo"></div>
           <div class="hidden md:flex space-x-5">
            <button class="bg-red-500 text-white text-lg rounded  px-6 py-2 mx-4 duration-500 hover:opacity-75">LOGIN</button>
            <button class="bg-gray-900 text-white text-lg rounded  px-6 py-2 mx-4 duration-500 hover:opacity-75">SIGNUP</button>
         </div>

        <button id="menu-btn" class="flex ml-40 mr-20 items-center hamburger md:hidden focus:outline-none z-[40]" >
        <span class="hamburger-top"></span>
        <span class="hamburger-middle"></span>
        <span class="hamburger-bottom"></span>
      </button> 
          <div id="menu" class="text-lg font-bold  md:hidden bg-yellow-600 items-center absolute h-full w-full left-0 py-4 top-[-400px] transition-all ease-in duration-500">
             <a class="block text-center my-10 hover:opacity-75" href="#"> HOME</a>
            <a class="block text-center  hover:opacity-75" href="#"> CONTACT</a>
            <button class="bg-red-500 text-white text-lg w-1/2 block my-10 px-6 py-2 mx-auto  duration-500  hover:opacity-75">LOGIN</button>
            <button class="bg-gray-900 block text-center w-1/2 text-white text-lg rounded mx-auto   px-6 py-2 duration-500  hover:opacity-75">SIGN UP</button>
       </div>

            
      
        </div>

        
        
        
    </nav>
  
</template>

<script>
import {hambugerMenu} from '@/nav';
export default {

name:'NavBar',
mounted(){hambugerMenu()}

}
</script>

<style>
/* Hamburger Menu */
.hamburger {
    cursor: pointer;
    width: 24px;
    height: 24px;
    position: relative;
  }
  
  .hamburger-top,
  .hamburger-middle,
  .hamburger-bottom {
    position: absolute;
    top: 0;
    left: 0;
    width: 24px;
    height: 2px;
    background: #000;
    transform: rotate(0);
   
  }
  
  .hamburger-middle {
    transform: translateY(7px);
  }
  
  .hamburger-bottom {
    transform: translateY(14px);
  }
  
  .open {
    transform: rotate(90deg);
    transform: translateY(0px);
  }
  
  .open .hamburger-top {
    transform: rotate(45deg) translateY(6px) translate(6px);
  }
  
  .open .hamburger-middle {
    display: none;
  }
  
  .open .hamburger-bottom {
    transform: rotate(-45deg) translateY(6px) translate(-6px);
  }
  

</style>