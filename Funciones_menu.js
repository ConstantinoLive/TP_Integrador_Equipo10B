document.addEventListener("DOMContentLoaded", function () {
    const checkboxes = document.querySelectorAll('.form-check-input[type="checkbox"]');

    checkboxes.forEach(function (checkbox) {
        checkbox.addEventListener('change', function () {
            const formCheck = checkbox.closest('.form-check');
            const numberInput = formCheck.querySelector('input[type="number"]');

            if (checkbox.checked) {
                let currentValue = parseInt(numberInput.value) || 0;
                numberInput.value = currentValue + 1;
            } else {
                
                 numberInput.value = 0;
            }
        });
    });
});