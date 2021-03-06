import React from 'react';
import Heading from './heading';

const Header = React.createClass({
    render() {
    <head>
        <link rel="stylesheet" href="style.css" />
        <title> Get it now</title>
    </head>
    <body>
        <div class="grid-container">
            <header class="header">
                <div class="brand">
                    <button onclick="openMenu()">
                        &#9776;
                    </button>
                    <a href="index.html">get it now</a>
                </div>
                <div class="header-links">
                    <a href="cart.html">Cart</a>
                    <a href="signin.html">Signin</a>
                </div>
            </header>
            <aside class="sidebar">
                <h3>Shopping Categories</h3>
                <button class="sidebar-close-button" onclick="closeMenu()">x</button>
                <u1>
                    <li>
                       <a href="index.html">Toilet Paper</a> 
                    </li>

                    <li>
                        <a href="index.html">Pet Food</a>
                    </li>
                    <li>
                        <a href="index.html">Rice</a>
                    </li>

                </u1>
                
            </aside>
            <main class="main">
                <div class="cotent">
                <ul class="products">
                    <li>
                        <div class="product">
                            <img class="image" src="https://cdn.shopify.com/s/files/1/0012/8440/7394/products/kleenex-small-roll-toilet-tissue-kleenex-12818116640866_450x450.jpg?v=1580212623" alt="product">
                            <div class="product-name">
                            <a href="product.html">Toilet Paper</a>
                            <div class="product quantity">
                                We are short of toilet paper right now!
                                quantity:3</div>
                            

                        </div>
                    </li>
                </ul>
                </div>
            </main>
            <br/>
            <br/>

            <footer class="footer">
                All rights reserved.
            </footer>
        </div>
        <script>
            function openMenu(){
                console.log('test');
                document.querySelector(".sidebar").classList.add('open');
            }
            function closeMenu(){
                document.querySelector(".sidebar").classList.add('open');
            }
        </script>

    </body>

</html>