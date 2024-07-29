// let timerID;
// var slideIndex = 0;
// showSlides(slideIndex);

// function plusSlides(n) {
//     showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//     showSlides(slideIndex = n);
// }


// function showSlides() {
//     var i;
//     var slides = document.getElementsByClassName("mySlides");
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     slideIndex++;
//     if (slideIndex > slides.length) { slideIndex = 1 }
//     slides[slideIndex - 1].style.display = "block";

//     timerID = setTimeout(() => {
//         showSlides()
//         timerID = null;
//     }
//         , 3000); 
// }

var myslide = document.querySelectorAll('.mySlider'),
            dot = document.querySelectorAll('.dot');
            var counter =1;
            slideFun(counter);
            var timer = setInterval(autoSlide, 5000);

            function autoSlide() {
                counter +=1;
                slideFun(counter);
            }

            function plusSlide(n){
                counter += n;
                slideFun(counter);
                resetTimer();
            }

            function currentSlide(n){
                counter = n;
                slideFun(counter);
                resetTimer();
            }

            function resetTimer() {
                clearInterval(timer);
                timer = setInterval(autoSlide, 5000);
            }
            function slideFun(n){
                var i ; 
                for(i= 0; i <myslide.length; i++){
                    myslide[i].style.display ="none";
                }
                for(i = 0; i < dot.length; i++){
                    dot[i].classList.remove('active');

                }
                if(n > myslide.length){
                    counter = 1;
                }
                if(n < 1){
                    counter = myslide.length;
                }
                myslide[counter - 1].style.display = "block";
                dot[counter -1].classList.add('active');
            }


function dropDown1() {
    let content = document.querySelector(".dropdown-content1");

    content.addEventListener("mouseover", function () {
        let menu = document.querySelector(".dropdown-menu1");
        menu.style.display = "block";
    });

    let menu = document.querySelector(".dropdown-menu1");
    menu.addEventListener("mouseover", function () {
        menu.style.display = "block";
        menu.addEventListener("mouseout", function () {
            menu.style.display = "none";
        });
    });

    content.addEventListener("mouseout", function () {
        let menu = document.querySelector(".dropdown-menu1");
        menu.style.display = "none";
    });
}
dropDown1();

function dropDown2() {
    let content = document.querySelector(".dropdown-content2");

    content.addEventListener("mouseover", function () {
        let menu = document.querySelector(".dropdown-menu2");
        menu.style.display = "block";
    });

    let menu = document.querySelector(".dropdown-menu2");
    menu.addEventListener("mouseover", function () {
        menu.style.display = "block";
        menu.addEventListener("mouseout", function () {
            menu.style.display = "none";
        });
    });

    content.addEventListener("mouseout", function () {
        let menu = document.querySelector(".dropdown-menu2");
        menu.style.display = "none";
    });
}
dropDown2();

function dropDown3() {
    let content = document.querySelector(".dropdown-content3");

    content.addEventListener("mouseover", function () {
        let menu = document.querySelector(".dropdown-menu3");
        menu.style.display = "block";
    });

    let menu = document.querySelector(".dropdown-menu3");
    menu.addEventListener("mouseover", function () {
        menu.style.display = "block";
        menu.addEventListener("mouseout", function () {
            menu.style.display = "none";
        });
    });

    content.addEventListener("mouseout", function () {
        let menu = document.querySelector(".dropdown-menu3");
        menu.style.display = "none";
    });
}
dropDown3();

function dropDown4() {
    let content = document.querySelector(".dropdown-content4");

    content.addEventListener("mouseover", function () {
        let menu = document.querySelector(".dropdown-menu4");
        menu.style.display = "block";
    });

    let menu = document.querySelector(".dropdown-menu4");
    menu.addEventListener("mouseover", function () {
        menu.style.display = "block";
        menu.addEventListener("mouseout", function () {
            menu.style.display = "none";
        });
    });

    content.addEventListener("mouseout", function () {
        let menu = document.querySelector(".dropdown-menu4");
        menu.style.display = "none";
    });
}
dropDown4();

function dropDown5() {
    let content = document.querySelector(".dropdown-content5");

    content.addEventListener("mouseover", function () {
        let menu = document.querySelector(".dropdown-menu5");
        menu.style.display = "block";
    });

    let menu = document.querySelector(".dropdown-menu5");
    menu.addEventListener("mouseover", function () {
        menu.style.display = "block";
        menu.addEventListener("mouseout", function () {
            menu.style.display = "none";
        });
    });

    content.addEventListener("mouseout", function () {
        let menu = document.querySelector(".dropdown-menu5");
        menu.style.display = "none";
    });
}
dropDown5();

function dropDown6() {
    let content = document.querySelector(".dropdown-content6");

    content.addEventListener("mouseover", function () {
        let menu = document.querySelector(".dropdown-menu6");
        menu.style.display = "block";
    });

    let menu = document.querySelector(".dropdown-menu6");
    menu.addEventListener("mouseover", function () {
        menu.style.display = "block";
        menu.addEventListener("mouseout", function () {
            menu.style.display = "none";
        });
    });

    content.addEventListener("mouseout", function () {
        let menu = document.querySelector(".dropdown-menu6");
        menu.style.display = "none";
    });
}
dropDown6();

function dropDown7() {
    let content = document.querySelector(".dropdown-content7");

    content.addEventListener("mouseover", function () {
        let menu = document.querySelector(".dropdown-menu7");
        menu.style.display = "block";
    });

    let menu = document.querySelector(".dropdown-menu7");
    menu.addEventListener("mouseover", function () {
        menu.style.display = "block";
        menu.addEventListener("mouseout", function () {
            menu.style.display = "none";
        });
    });

    content.addEventListener("mouseout", function () {
        let menu = document.querySelector(".dropdown-menu7");
        menu.style.display = "none";
    });
}
dropDown7();

function dropDown8() {
    let content = document.querySelector(".dropdown-content8");

    content.addEventListener("mouseover", function () {
        let menu = document.querySelector(".dropdown-menu8");
        menu.style.display = "block";
    });

    let menu = document.querySelector(".dropdown-menu8");
    menu.addEventListener("mouseover", function () {
        menu.style.display = "block";
        menu.addEventListener("mouseout", function () {
            menu.style.display = "none";
        });
    });

    content.addEventListener("mouseout", function () {
        let menu = document.querySelector(".dropdown-menu8");
        menu.style.display = "none";
    });
}
dropDown8();

function dropDown9() {
    let content = document.querySelector(".dropdown-content9");

    content.addEventListener("mouseover", function () {
        let menu = document.querySelector(".dropdown-menu9");
        menu.style.display = "block";
    });

    let menu = document.querySelector(".dropdown-menu9");
    menu.addEventListener("mouseover", function () {
        menu.style.display = "block";
        menu.addEventListener("mouseout", function () {
            menu.style.display = "none";
        });
    });

    content.addEventListener("mouseout", function () {
        let menu = document.querySelector(".dropdown-menu9");
        menu.style.display = "none";
    });
}
dropDown9();

document.getElementById("signInButton").addEventListener("click", function() {
  window.location.href = "login.html";
});

function showDropdown() {
    document.getElementById("dropDown7").classList.add("show");
  }
  
  function hideDropdown() {
    document.getElementById("dropDown7").classList.remove("show");
  }

// notification toast variables
const notificationToast = document.querySelector('[data-toast]');
const toastCloseBtn = document.querySelector('[data-toast-close]');

// notification toast eventListener
toastCloseBtn.addEventListener('click', function () {
  notificationToast.classList.add('closed');
});

'use strict';

// modal variables
const modal = document.querySelector('[data-modal]');
const modalCloseBtn = document.querySelector('[data-modal-close]');
const modalCloseOverlay = document.querySelector('[data-modal-overlay]');

// modal function
const modalCloseFunc = function () { modal.classList.add('closed') }

// modal eventListener
modalCloseOverlay.addEventListener('click', modalCloseFunc);
modalCloseBtn.addEventListener('click', modalCloseFunc);

document.addEventListener("DOMContentLoaded", function() {
    const modal = document.querySelector('.modal');
    const closeModalBtn = document.querySelector('[data-modal-close]');
    const modalOverlay = document.querySelector('[data-modal-overlay]');
    
    // Check if the modal has been displayed before
    const modalDisplayed = localStorage.getItem('modalDisplayed');
    
    if (!modalDisplayed) {
        // If the modal has not been displayed before, show it
        modal.classList.add('modal-visible');
        
        // Add event listeners to close the modal
        closeModalBtn.addEventListener('click', closeModal);
        modalOverlay.addEventListener('click', closeModal);
        
        // Set flag in local storage indicating that the modal has been displayed
        localStorage.setItem('modalDisplayed', 'true');
    }
    
    function closeModal() {
        modal.classList.remove('modal-visible');
    }
});

//close popup
function openPopup() {
    document.getElementById("popup").classList.add("active");
}

function closePopup(event) {
    event.stopPropagation(); // Stop the click event from propagating to the parent
    document.getElementById("popup").classList.remove("active");
}

class Chatbox {
    constructor() {
        this.args = {
            openButton: document.querySelector('.chatbox__button'),
            chatBox: document.querySelector('.chatbox__support'),
            sendButton: document.querySelector('.send__button')
        }

        this.state = false;
        this.messages = [];
    }

    display() {
        const {openButton, chatBox, sendButton} = this.args;

        openButton.addEventListener('click', () => this.toggleState(chatBox))

        sendButton.addEventListener('click', () => this.onSendButton(chatBox))

        const node = chatBox.querySelector('input');
        node.addEventListener("keyup", ({key}) => {
            if (key === "Enter") {
                this.onSendButton(chatBox)
            }
        })
    }

    toggleState(chatbox) {
        this.state = !this.state;

        // show or hides the box
        if(this.state) {
            chatbox.classList.add('chatbox--active')
        } else {
            chatbox.classList.remove('chatbox--active')
        }
    }

    onSendButton(chatbox) {
        var textField = chatbox.querySelector('input');
        let text1 = textField.value
        if (text1 === "") {
            return;
        }

        let msg1 = { name: "User", message: text1 }
        this.messages.push(msg1);

        fetch('http://127.0.0.1:5000/predict', {
            method: 'POST',
            body: JSON.stringify({ message: text1 }),
            mode: 'cors',
            headers: {
              'Content-Type': 'application/json'
            },
          })
          .then(r => r.json())
          .then(r => {
            let msg2 = { name: "NTPC Helpdesk", message: r.answer };
            this.messages.push(msg2);
            this.updateChatText(chatbox)
            textField.value = ''

        }).catch((error) => {
            console.error('Error:', error);
            this.updateChatText(chatbox)
            textField.value = ''
          });
    }

    updateChatText(chatbox) {
        var html = '';
        this.messages.slice().reverse().forEach(function(item, index) {
            if (item.name === "NTPC Helpdesk")
            {
                html += '<div class="messages__item messages__item--visitor">' + item.message + '</div>'
            }
            else
            {
                html += '<div class="messages__item messages__item--operator">' + item.message + '</div>'
            }
          });

        const chatmessage = chatbox.querySelector('.chatbox__messages');
        chatmessage.innerHTML = html;
    }
}

const chatbox = new Chatbox();
chatbox.display();