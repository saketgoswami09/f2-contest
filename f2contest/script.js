    document.addEventListener("DOMContentLoaded", () => {
        const decrementBtn = document.getElementById("decrement");
        const incrementBtn = document.getElementById("increment");
        const clearBtn = document.getElementById("clear");
        const countDisplay = document.getElementById("count");
        const errorMsg = document.getElementById("error-msg");

        let count = 0;

        function updateCountDisplay() {
            countDisplay.innerText = count;
            if (count === 0) {
                decrementBtn.disabled = true;
                errorMsg.style.display = "block";
            } else {
                decrementBtn.disabled = false;
                errorMsg.style.display = "none";
            }
        }

        incrementBtn.addEventListener("click", () => {
            count++;
            updateCountDisplay();
        });

        decrementBtn.addEventListener("click", () => {
            if (count > 0) {
                count--;
                updateCountDisplay();
            } else {
                errorMsg.style.display = "block";
            }
        });

        clearBtn.addEventListener("click", () => {
            count = 0;
            updateCountDisplay();
        });

        updateCountDisplay(); // Initialize display
    });
