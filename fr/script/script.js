$(document).ready(function () {

  /* Editing popup position by following the mouse when hovering a nav button */

  function editPopupPos(e, id) {
    var popup = document.getElementById(id + "_popup");
    const button = document.getElementById(id);

    if (popup) {
      popup.style.left = e.pageX + "px";
      popup.style.top = e.pageY - 40 + "px";

      if (!button.matches(":hover")) {
        popup.remove();
      }
    }
  }

  /* Popup generation + styling */

  function printPopup(id, popup) {
    if (id == "nav_plus") {
      var title = "Créer un nouveau texte";
    } else if (id == "nav_home") {
      var title = "Retour au menu";
    } else if (id == "nav_mytexts") {
      var title = "Afficher mes textes";
    } else if (id == "nav_notifications") {
      var title = "Voir mes notifications";
    } else if (id == "nav_loved") {
      var title = "Afficher mes favoris";
    } else if (id == "nav_leaderboard") {
      var title = "Voir le classement";
    } else if (id == "fullscreen_button") {
      var title = "Affichage en plein écran";
    }

    popup.innerText = title;
    popup.style.position = "absolute";
    popup.style.color = "white";
    popup.style.backgroundColor = "#303030";
    popup.style.padding = "5px";
    popup.style.zIndex = "999";
    popup.id = id + "_popup";

    document.body.appendChild(popup);

    document.addEventListener("mousemove", (e) => {
      editPopupPos(e, id);
    });
  }

  /* Pass animation on texts */

  function animateChangingText(first_container, second_container) {
    if (!first_container.classList.contains("main_first_text_transition")) {
      first_container.classList.toggle("main_first_text_transition");
      
      setTimeout(() => {
        second_container.classList.toggle("main_second_text_transition");
      }, "500");
    } else {
      second_container.classList.toggle("main_second_text_transition");
      
      setTimeout(() => {
        first_container.classList.toggle("main_first_text_transition");
      }, "500");
    }
  }

  /* Username dropdown animation */

  function togglingUsernameDropdown(username_dropdown) {        
    if (username_dropdown.style.display == "block") {
      if (!username_dropdown.classList.contains("username_dropdown_transition")) {
        return;
      }

      document.getElementById("username_arrow").classList.toggle("username_transition");
      username_dropdown.classList.toggle("username_dropdown_transition");
    
      setTimeout(() => {
        username_dropdown.style.display = "none";
      }, "290");

    } else {
      username_dropdown.style.display = "block";
      
      setTimeout(() => {
        document.getElementById("username_arrow").classList.toggle("username_transition");
        username_dropdown.classList.toggle("username_dropdown_transition");
      }, "10");
    }
  }

  /* One-time arrival animations */

  function togglingArrivalAnimations(param) {
    document.getElementById("home_title_c") ? document.getElementById("home_title_c").classList.toggle("arrival_title") : "";   
    document.getElementById("home_nav_c") ? document.getElementById("home_nav_c").classList.toggle("arrival_nav") : "";
    
    document.getElementById("home_interact_c") ? document.getElementById("home_interact_c").classList.toggle("arrival_interactions") : "";   
    document.getElementById("filter_c") ? document.getElementById("filter_c").classList.toggle("arrival_filter") : "";  
    document.getElementById("home_comments_c") ? document.getElementById("home_comments_c").classList.toggle("arrival_comments") : "";
    document.getElementById("edit_text_form") ? document.getElementById("edit_text_form").classList.toggle("arrival_main_content") : "";
    document.getElementById("first_content") ? document.getElementById("first_content").classList.toggle("arrival_main_content") : "";
    document.getElementById("second_content") ? document.getElementById("second_content").classList.toggle("arrival_main_content") : "";
    document.getElementById("profil_form") ? document.getElementById("profil_form").classList.toggle("arrival_main_content") : "";

    if (param !== "False") {
      document.getElementById("main_first_text") ? document.getElementById("main_first_text").classList.toggle("arrival_box") : "";
      document.getElementById("main_second_text") ? document.getElementById("main_second_text").classList.toggle("arrival_box") : "";
    }
  }

  function togglingSecondArrivalAnimations(param) {
    document.getElementById("home_title_c") ? document.getElementById("home_title_c").classList.toggle("second_arrival_title") : "";   
    document.getElementById("home_nav_c") ? document.getElementById("home_nav_c").classList.toggle("second_arrival_nav") : "";
    
    document.getElementById("home_interact_c") ? document.getElementById("home_interact_c").classList.toggle("second_arrival_interactions") : "";
    document.getElementById("filter_c") ? document.getElementById("filter_c").classList.toggle("second_arrival_filter") : "";  
    document.getElementById("home_comments_c") ? document.getElementById("home_comments_c").classList.toggle("second_arrival_comments") : "";
    document.getElementById("edit_text_form") ? document.getElementById("edit_text_form").classList.toggle("second_arrival_main_content") : "";
    document.getElementById("first_content") ? document.getElementById("first_content").classList.toggle("second_arrival_main_content") : "";
    document.getElementById("second_content") ? document.getElementById("second_content").classList.toggle("second_arrival_main_content") : "";
    document.getElementById("profil_form") ? document.getElementById("profil_form").classList.toggle("second_arrival_main_content") : "";

    if (param !== "False") {
      document.getElementById("main_first_text") ? document.getElementById("main_first_text").classList.toggle("second_arrival_box") : "";
      document.getElementById("main_second_text") ? document.getElementById("main_second_text").classList.toggle("second_arrival_box") : "";
    }
  }

  window.togglingLeavingAnimations = function(redirection) {
    document.getElementById("home_title_c") ? document.getElementById("home_title_c").classList.toggle("leaving_title") : "";   
    document.getElementById("home_nav_c") ? document.getElementById("home_nav_c").classList.toggle("leaving_nav") : "";

    document.getElementById("home_interact_c") ? document.getElementById("home_interact_c").classList.toggle("leaving_interactions") : "";    
    document.getElementById("filter_c") ? document.getElementById("filter_c").classList.toggle("leaving_filter") : "";  
    document.getElementById("home_comments_c") ? document.getElementById("home_comments_c").classList.toggle("leaving_comments") : "";
    document.getElementById("edit_text_form") ? document.getElementById("edit_text_form").classList.toggle("leaving_main_content") : "";
    document.getElementById("first_content") ? document.getElementById("first_content").classList.toggle("leaving_main_content") : "";
    document.getElementById("second_content") ? document.getElementById("second_content").classList.toggle("leaving_main_content") : "";
    document.getElementById("profil_form") ? document.getElementById("profil_form").classList.toggle("leaving_main_content") : "";
    document.getElementById("login_c") ? document.getElementById("login_c").classList.toggle("leaving_main_content") : "";
    
    setTimeout(() => {
      window.location.href = redirection;
    }, 700);
  }

  /* Searching firstArrival parameter in URL to trigger animations correctly */

  const url = window.location.search;
  const urlNotReady = new URLSearchParams(url);
  const firstArrival = urlNotReady.get("firstArrival");

  togglingArrivalAnimations(firstArrival); /* ON */

  setTimeout(() => {
    togglingArrivalAnimations(firstArrival); /* OFF */
    togglingSecondArrivalAnimations(firstArrival); /* ON */

    document.getElementById("home_title_c") ? document.getElementById("home_title_c").style.opacity = 1 : "";   
    document.getElementById("home_interact_c") ? document.getElementById("home_interact_c").style.opacity = 1 : "";   
    document.getElementById("filter_c") ? document.getElementById("filter_c").style.opacity = 1 : "";  
    document.getElementById("home_comments_c") ? document.getElementById("home_comments_c").style.opacity = 1 : "";   
    document.getElementById("home_nav_c") ? document.getElementById("home_nav_c").style.opacity = 1 : "";

  }, 1000);

  setTimeout(() => {
    togglingSecondArrivalAnimations(firstArrival); /* OFF */

    document.getElementById("edit_text_form") ? document.getElementById("edit_text_form").style.opacity = 1 : "";
    document.getElementById("first_content") ? document.getElementById("first_content").style.opacity = 1 : "";
    document.getElementById("second_content") ? document.getElementById("second_content").style.opacity = 1 : "";
    document.getElementById("profil_form") ? document.getElementById("profil_form").style.opacity = 1 : "";

  }, 2000);

  /* Adding listeners to print popups when some buttons are hovered */

  const nav_buttons = document.getElementById("nav_buttons");
  
  var popup = document.createElement("div");

  if (nav_buttons) {
    nav_buttons.childNodes.forEach((button) => {
      button.addEventListener("mouseenter", () => {
        printPopup(button.id, popup);
      });
    });
  }

  /* Toggle fullscreen mode in text editing */

  const fullscreen_button = document.getElementById("fullscreen_button");

  if (fullscreen_button) {

    fullscreen_button.addEventListener("mouseenter", () => {
      if (!fullscreen_button.parentNode.classList.contains("fullscreen")) {
        printPopup(fullscreen_button.id, popup);
      }
    });

    fullscreen_button.addEventListener("click", () => {
      if (fullscreen_button.parentNode.style.position === "fixed") {
        fullscreen_button.src = "fr/src/fullscreen_on_image.png";
        
        fullscreen_button.style.width = "3%";
        fullscreen_button.style.margin = "10px 0 0 0";
        
        fullscreen_button.parentNode.style.position = "relative";
        fullscreen_button.parentNode.style.margin = "10px 0 10px 0";
        
        document.getElementById("edit_textarea").style.padding = "10px 50px 10px 10px";
        document.getElementById("edit_textarea").style.margin = "10px 0 20px 0";
        document.getElementById("edit_textarea").style.borderRadius = "5px";
        
        document.getElementById("home_c").style.perspective = "10000px";
      } else {
        fullscreen_button.src = "fr/src/fullscreen_off_image.png";
        
        fullscreen_button.style.width = "2%";
        fullscreen_button.style.margin = "0";
        
        fullscreen_button.parentNode.style.position = "fixed";
        fullscreen_button.parentNode.style.margin = "0";
        
        document.getElementById("edit_textarea").style.padding = "10px 80px 10px 10px";
        document.getElementById("edit_textarea").style.margin = "0";
        document.getElementById("edit_textarea").style.borderRadius = "0px";
      
        document.getElementById("home_c").style.perspective = "none";
      }

      fullscreen_button.parentNode.classList.toggle("fullscreen");
    })
  }

  /* Toggle username select options & arrow transition */

  const username_container = document.getElementById("username_cont");
  var username_dropdown = document.getElementById("username_drop");

  if (username_container) {
    username_container.childNodes.forEach((elem) => {
      elem.addEventListener("click", () => {
        togglingUsernameDropdown(username_dropdown);
      })
    })

    document.addEventListener("click", (e) => {
      if (username_dropdown.style.display == "block") {
        togglingUsernameDropdown(username_dropdown);
      }
    })
  }

  /* Bind pass button to trigger animation */

  const pass_button = document.getElementById("pass_button");
  
  const main_first_container = document.getElementById("main_first_text");
  const main_second_container = document.getElementById("main_second_text");

  if (pass_button) {
    pass_button.addEventListener("click", () => {
      animateChangingText(main_first_container, main_second_container);
    })
  }

  /* Toggle sidebar elements's view by hovering */

  const searchbar_container = document.getElementById("searchbar_c");
  const filter_container = document.getElementById("filter_all");
  const spotify_container = document.getElementById("spotify_c");

  if (searchbar_container) {
    searchbar_container.addEventListener("mouseenter", () => {
      searchbar_container.classList.toggle("searchbar_container_transition");
    })

    searchbar_container.addEventListener("mouseleave", () => {
      searchbar_container.classList.toggle("searchbar_container_transition");
    })
  }

  if (filter_container) {
    filter_container.addEventListener("mouseenter", () => {
      filter_container.classList.toggle("filter_container_transition");
    })

    filter_container.addEventListener("mouseleave", () => {
      filter_container.classList.toggle("filter_container_transition");
    })
  }

  if (spotify_container) {
    spotify_container.addEventListener("mouseenter", () => {
      spotify_container.classList.toggle("spotify_container_transition");
    })

    spotify_container.addEventListener("mouseleave", () => {
      spotify_container.classList.toggle("spotify_container_transition");
    })
  }

  /* Bind custom checkboxes to be interacted */

  const checkboxes = document.getElementsByClassName("filter_checkbox");

  if (checkboxes) {
    for (let checkbox in checkboxes) {
      if (checkboxes[checkbox].nodeType == 1) {
        checkboxes[checkbox].addEventListener("click", () => {
          checkboxes[checkbox].classList.toggle("filter_transition")
          checkboxes[checkbox].childNodes[0].classList.toggle("filter_img_transition");
        })

        checkboxes[checkbox].addEventListener("mouseenter", () => {
          checkboxes[checkbox].classList.toggle("filter_transition_hover");
        });

        checkboxes[checkbox].addEventListener("mouseleave", () => {
          checkboxes[checkbox].classList.toggle("filter_transition_hover");
        });
      }
    }
  }
});