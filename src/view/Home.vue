<template>

    <NavBar />
    <div class="">
        <div class="pt-72  bg-gradient-to-b from-yellow-600 to-yellow-400 h-[400px]  md:h-[500px] relative">
            <div class="container mx-auto px-10 position-absolute">
                <img class="w-50 " src="@/assets/img/couch.png">

            </div>
            <div class="container mx-auto "> <img
                    class=" w-48 md:w-1/4 absolute top-16 md:top-20 left-0 right-0 mx-auto" src="@/assets/img/app.svg">

            </div>
            <div class="flex justify-center my-10">
                <button
                    class="flex items-center rounded mb-80 py-2 px-4 bg-yellow-600 font-bold shadow-lg hover:bg-red-700 hover:text-white">

                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                        class="bi bi-download" viewBox="0 0 16 16">
                        <path
                            d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                        <path
                            d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                    </svg><span class="px-3">Download the App</span>

                </button>

            </div>

        </div>
    </div>

    <div class="clear-both"></div>
    <section class="md:bg-dotted-bg mt-[15rem] md:mt-[25rem] px-10 md:px-20">
        <div class="bg-white container mx-auto md:p-10">
            <div class="md:flex md:space-x-10 space-y-16 md:space-y-0  justify-center">
                <div class="text-center">
                    <div class="relative mx-auto w-20 h-20 border-8 rounded-full border-yellow-600">
                        <span class="absolute right-5 top-5">
                            <i class='fas fa-key' style='font-size:30px'></i>
                        </span>
                    </div>
                    <h3 class="font-bold text-2xl py-2">Safe</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, facilis?</p>
                </div>

                <!-- second item -->
                <div class="text-center">
                    <div class="relative mx-auto w-20 h-20 border-8 rounded-full border-yellow-600">

                        <span class="absolute right-5 top-5">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                class="bi bi-paypal" viewBox="0 0 16 16">
                                <path
                                    d="M14.06 3.713c.12-1.071-.093-1.832-.702-2.526C12.628.356 11.312 0 9.626 0H4.734a.7.7 0 0 0-.691.59L2.005 13.509a.42.42 0 0 0 .415.486h2.756l-.202 1.28a.628.628 0 0 0 .62.726H8.14c.429 0 .793-.31.862-.731l.025-.13.48-3.043.03-.164.001-.007a.351.351 0 0 1 .348-.297h.38c1.266 0 2.425-.256 3.345-.91.379-.27.712-.603.993-1.005a4.942 4.942 0 0 0 .88-2.195c.242-1.246.13-2.356-.57-3.154a2.687 2.687 0 0 0-.76-.59l-.094-.061ZM6.543 8.82a.695.695 0 0 1 .321-.079H8.3c2.82 0 5.027-1.144 5.672-4.456l.003-.016c.217.124.4.27.548.438.546.623.679 1.535.45 2.71-.272 1.397-.866 2.307-1.663 2.874-.802.57-1.842.815-3.043.815h-.38a.873.873 0 0 0-.863.734l-.03.164-.48 3.043-.024.13-.001.004a.352.352 0 0 1-.348.296H5.595a.106.106 0 0 1-.105-.123l.208-1.32.845-5.214Z" />
                            </svg>
                        </span>
                    </div>
                    <h3 class="font-bold text-2xl py-2">Easy Payments</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, facilis?</p>
                </div>

                <!-- third item -->
                <div class="text-center">
                    <div class="relative mx-auto w-20 h-20 border-8 rounded-full border-yellow-600">

                        <span class="absolute right-5 top-5">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                class="bi bi-lightbulb-fill" viewBox="0 0 16 16">
                                <path
                                    d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13h-5a.5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm3 8.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1-.5-.5z" />
                            </svg>
                        </span>
                    </div>
                    <h3 class="font-bold text-2xl py-2">Anytime</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, facilis?</p>
                </div>

            </div>

        </div>

    </section>

    <section class="bg-black text-white my-16 container mx-auto pb-20">
        <div class="  px-10 lg:px-80 md:px-40 py-5">
            <h2 class="text-center text-4xl text-yellow-600 font-bold py-5">Our Partners</h2>

            <p class="text-center mb-10">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam atque iusto
                accusamus
                consequuntur nulla? Dolores quasi nobis aut temporibus ipsum?</p>

            <div class="grid grid-cols-3 lg:grid-cols-4 gap-5">
                <div class="bg-white rounded shadow w-28 h-28 py-5"><img src="@/assets/img/spotify.svg">
                </div>
                <div class="bg-white rounded shadow w-28 h-28 py-5"> <img src="@/assets/img/dell.svg"></div>
                <div class="bg-white rounded shadow w-28 h-28 py-5 px-3"> <img src="@/assets/img/cisco.svg"></div>
                <div class="bg-white rounded shadow w-28 h-28 px-3"> <img src="@/assets/img/disney.svg"></div>
                <div class="bg-white rounded shadow w-28 h-28 py-5"><img src="@/assets/img/deezer.svg"></div>
                <div class="bg-white rounded shadow w-28 h-28 px-3 py-10"><img src="@/assets/img/verizon.svg"></div>
                <div class="bg-white rounded shadow w-28 h-28 py-5"> <img src="@/assets/img/engdanet.svg"></div>

            </div>

        </div>
    </section>

    <section class="container mx-auto">
        <div class="flex flex-col-reverse lg:flex-row space-x-10 px-10 md:px-20">
            <div class="my-10 lg:my-32  lg:w-1/2 ">
                <h2 class="text-4xl font-bold my-5 ">Relax, You're Home!</h2>
                <p class="my-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum dolore voluptatem
                    dolores optio sed ut rem, libero expedita quam ex.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Id similique tempora minima eaque cum libero voluptatibus ex! Voluptates, corrupti ducimus.</p>

                <button class="rounded font-bold px-5 py-2 bg-yellow-600 hover:bg-red-700 hover:text-white">Sign
                    Up</button>
            </div>

            <div class="relative">
                <img class="" src="@/assets/img/table.png" alt="">
                <div
                    class="hidden md:block w-96 h-96 rounded-full border-8  border-yellow-500 absolute -right-28 bottom-0 -z-10">
                </div>
            </div>



        </div>
    </section>

    <section class="mt-10 lg:mt-40  lg:px-40  overflow-hidden ">

        <div class="grid md:grid-cols-2">
            <div class="flex-col">
                <img class="my-10 mx-auto" src="@/assets/img/lamp.png">

               <div class=" flex justify-center my-10"> <button class="flex rounded py-3 px-2 bg-yellow-600 font-bold shadow-lg hover:bg-red-700 hover:text-white">

                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                        class="bi bi-download" viewBox="0 0 16 16">
                        <path
                            d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                        <path
                            d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                    </svg><span class="px-3">Download the App</span>

                </button></div>

               <div class="hidden md:block mx-auto mt-10  w-[200px] text-center" > <img src="@/assets/img/app.svg"></div>
            </div>
            <!-- form-div -->
            <div class="pb-5 mt-20 mx-10 ">
                <div class="border-4 border-black rounded-lg px-8">
                    <h3 class="font-bold text-2xl py-3">Contact Us</h3>
                    <form class="w-full font-bold text-lg pb-10">
                        <label class="" for="name">Enter Name</label><br>
                        <input class="border-4 border-yellow-600 w-full rounded-lg mb-3" type="text" id="fname" name="fname" >

                        <label for="email">Email:</label><br>
                        <input class="border-4 border-yellow-600 w-full rounded-lg mb-3" type="text" id="email" name="email" >

                        <label for="message">Message</label>
                        <textarea class="border-4 border-yellow-600 w-full rounded-lg mb-3"  rows="5" value="Message"></textarea>

                       <button class="rounded font-bold px-3 py-2 bg-yellow-600 hover:bg-red-700 hover:text-white">Sign Up</button>
                    </form>
                </div>
            </div>

        </div>

    </section>


<footer class="bg-black text-lg p-3 text-center text-white mt-10">Made by Christy</footer>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
export default {
    components: {
        NavBar,
    }

}
</script>

<style>
</style>