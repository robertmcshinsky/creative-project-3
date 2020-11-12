<template>



<div id="app">

<title>Walkz</title>
  <link rel="stylesheet" href="css/master.css">
  <link href="https://fonts.googleapis.com/css2?family=Righteous&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

  <h1 class="title">WALK<span style="color: #ff3385">e</span>Z</h1>

  <div class="topnav" id="myTopnav">
    <router-link to="/">Home</router-link>
    <router-link to="/DogsList">Walk<span style="color: #ff3385">ie</span>Z</router-link>
    <router-link to="/Walkers">WALK<span style="color: #ff3385">er</span>Z</router-link>
    <router-link to="/Locator">Locat<span style="color: #ff3385">o</span>r</router-link>
    <a href="javascript:void(0);" class="icon" onclick="myFunction()">
      <i class="fa fa-bars"></i>
    </a>
  </div>

  <router-view />
</div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

* {
  box-sizing: border-box
}

body {
  font-family: Arial, Helvetica, sans-serif;
}

/* Title of the whole page */
.title {
  text-align: center;
  font-family: 'Righteous', cursive;
  font-size: 2em
}

/* Split the screen in half */
.split {
  height: 70%;
  width: 45%;
  position: fixed;
  z-index: 1;
  top: 0;
  overflow-x: hidden;
  padding-top: 20px;
  margin-top: 150px;
  font-family: 'Righteous', cursive;
  margin-left: 5%;
  margin-right: 5%;
  display: flex;
}

/* Control the left side */
.left {
  left: 0;
  background-color: #333;
}

/* Control the right side */
.right {
  right: 0;
  background-color: #D0D0D0;
}

/* If you want the content centered horizontally and vertically */
.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

/* Style the image inside the centered container, if needed */
.centered img {
  width: 250px;
  border-radius: 50%;
  border: 2px solid black;
  position: relative;
  height: 250px;
  overflow: hidden;
  border-radius: 50%;
}

h2,
p {
  color: #333;
}

.leftSide {
  color: white;
}


/* Add a black background color to the top navigation */
.topnav {
  background-color: #333;
  overflow: hidden;
  z-index: 9999;
}

/* Style the links inside the navigation bar */
.topnav a {
  float: left;
  display: flex;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
  width: 25%;
}

/* Change the color of links on hover */
.topnav a:hover {
  background-color: #ddd;
  color: black;
}

/* Add an active class to highlight the current page */
.topnav a.active {
  background-color: #ff3385;
  color: white;
}

/* Hide the link that should open and close the topnav on small screens */
.topnav .icon {
  display: none;
}

/* When the screen is less than 600 pixels wide, hide all links, except for the first one ("Home"). Show the link that contains should open and close the topnav (.icon) */
@media screen and (max-width: 600px) {
  .topnav a:not(:first-child) {
    display: none;
  }

  .topnav a.icon {
    float: right;
    display: block;
  }
}

/* The "responsive" class is added to the topnav with JavaScript when the user clicks on the icon. This class makes the topnav look good on small screens (display the links vertically instead of horizontally) */
@media screen and (max-width: 600px) {
  .topnav.responsive {
    position: relative;
  }

  .topnav.responsive a.icon {
    position: absolute;
    right: 0;
    top: 0;
  }

  .topnav.responsive a {
    float: none;
    display: block;
    text-align: left;
  }
}

button {
  background-color: #ff80b3;
  border: 1px solid white;
  color: black;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  font-family: 'Righteous', cursive;
  display: inline-block;
  font-size: 16px;
  box-shadow: 2px;
  border-radius: 20px;
}
</style>
