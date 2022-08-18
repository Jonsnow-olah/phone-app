function startApp() {
    // Your entire app should not necessarily be coded inside this 
    // single function (though there's no penalty for that), 
    // so create and use/call additional functions from here

    // pls remove the below and make some magic in here!
    console.log('make magic in here!');

    const header = document.querySelector('h2');
    if(header) {
      header.textContent = 'make some magic here!!';
    }
  };

  // ======= DO NOT EDIT ============== //
  export default startApp;
  // ======= EEND DO NOT EDIT ========= // 
  // Your entire app should not necessarily be coded inside this
  // single function (though there's no penalty for that),
  // so create and use/call additional functions from here
  // pls remove the below and make some magic in here!
}

// ======= DO NOT EDIT ============== //
export default startApp;
// ======= EEND DO NOT EDIT ========= //
 81  
index.html
@@ -1,19 +1,76 @@
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Name of chosen challenge</title>
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!-- Start of Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,400;0,700;0,900;1,400&family=Montserrat:ital,wght@0,400;0,700;0,900;1,400&display=swap"
      rel="stylesheet"
    />
    <!-- End of Fonts -->
    <title>Phonie App</title>

    <link rel="stylesheet" href="style.css">
</head>
<body>

    <h2>Heloo</h2>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <!-- App Wrapper -->
    <main class="app">
      <!-- Greeting -->
      <section class="greeting">
        <h1>Phone App</h1>
        <h2 class="title">
          What's up, <input type="text" id="name" placeholder="Name here" />
        </h2>
      </section>
      <!-- End of Greeting -->

      <!-- App -->
      <section class="validate-number">
        <h3>Validate Your Number</h3>
        <form id="validate-form">
          <h4>What's is Your Email?</h4>
          <input
            type="text"
            placeholder="e.g. adunola@gmail.com"
            name="content"
            id="content-email"
          />

          <h4>What's is Your Country?</h4>
          <input
            type="text"
            placeholder="e.g. Nigeria"
            name="content"
            id="content-country"
          />

          <h4>What's is Your Phone Number?</h4>
          <input
            type="number"
            placeholder="e.g. 08145362848"
            name="content"
            id="content-number"
          />
          <input type="submit" value="Validate" />
        </form>
      </section>
      <!-- End App -->

      <!-- Result -->
      <section class="result">
        <h4>Your result</h4>
        <div class="result-item" id="result"></div>
      </section>
      <!-- End  -->
    </main>
    <!-- End of App Wrapper -->

    <!-- // ============= EEND DO NOT EDIT ============== // -->
    <script src="index.mjs" type="module"></script>
    <!-- // ============= EEND DO NOT EDIT ============== // -->
</body>
</html> 
  </body>
</html>
 4  
index.mjs
@@ -1,3 +1,3 @@
import startApp from './app.mjs';
import startApp from "./app.mjs";

document.addEventListener('DOMContentLoaded', startApp);  
document.addEventListener("DOMContentLoaded", startApp);
  133  
style.css
@@ -0,0 +1,133 @@
/* Variables */
:root {
  --primary: #ea40a4;
  --business: #3a82ee;
  --personal: var(--primary);
  --light: #eee;
  --grey: #888;
  --dark: #313154;
  --danger: #ff5b57;

  --shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

  --business-glow: 0px 0px 4px rgba(58, 130, 238, 0.75);
  --personal-glow: 0px 0px 4px rgba(234, 64, 164, 0.75);
}
/* End of Variables */

/* Resets */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "montserrat", sans-serif;
}

input,
button {
  appearance: none;
  border: none;
  outline: none;
  background: none;
  cursor: initial;
}
/* End of Resets */

body {
  background: var(--light);
  color: var(--dark);
}

.app {
  margin: 0 4rem;
}

section {
  margin-top: 2rem;
  margin-bottom: 2rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}

h1 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-align: center;
}

h3 {
  color: var(--dark);
  font-size: 1rem;
  font-weight: 400;
  margin-bottom: 0.5rem;
}

h4 {
  color: var(--grey);
  font-size: 0.875rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.greeting .title {
  display: flex;
}

.greeting .title input {
  margin-left: 0.5rem;
  flex: 1 1 0%;
  min-width: 0;
}

.greeting .title,
.greeting .title input {
  color: var(--dark);
  font-size: 1.5rem;
  font-weight: 700;
}

.validate-number input[type="text"] {
  display: block;
  width: 100%;
  font-size: 1.125rem;
  padding: 1rem 1.5rem;
  color: var(--dark);
  background-color: #fff;
  border-radius: 0.5rem;
  box-shadow: var(--shadow);
  margin-bottom: 1.5rem;
}
.validate-number input[type="number"] {
  display: block;
  width: 100%;
  font-size: 1.125rem;
  padding: 1rem 1.5rem;
  color: var(--dark);
  background-color: #fff;
  border-radius: 0.5rem;
  box-shadow: var(--shadow);
  margin-bottom: 1.5rem;
}
.validate-number input[type="submit"] {
  display: block;
  width: 100%;
  font-size: 1.125rem;
  padding: 1rem 1.5rem;
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
  background-color: var(--primary);
  box-shadow: var(--personal-glow);
  border-radius: 0.5rem;
  cursor: pointer;
  transition: 0.2s ease-out;
}

.validate-number input[type="submit"]:hover {
  opacity: 0.75;
}

.result .result-item {
  margin: 1rem 0;
}
