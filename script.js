/* ============================================================
   FORMSPREE CONTACT FORM
   Endpoint: https://formspree.io/f/mzzanwoy
   ============================================================ */
var GM_FORM_ENDPOINT = 'https://formspree.io/f/mzzanwoy';

document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        var btn = document.getElementById('cf-submitBtn');
        if (!btn) return false;

        if (!form.checkValidity()) {
            form.classList.add('was-validated');
            if (typeof Swal !== 'undefined') {
                Swal.fire({
                    title: 'Missing Fields',
                    text: 'Please fill in all required fields correctly.',
                    icon: 'warning',
                    iconColor: '#f59e0b',
                    timer: 3000,
                    timerProgressBar: true,
                    showConfirmButton: false,
                    background: '#18181c',
                    color: '#f2f2f4',
                    customClass: { popup: 'swal-custom-popup', title: 'swal-custom-title' }
                });
            }
            return false;
        }

        var orig = btn.innerHTML;
        btn.disabled = true;
        btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';
        btn.style.opacity = '0.7';

        function resetBtn() {
            btn.disabled = false;
            btn.innerHTML = orig;
            btn.style.opacity = '1';
        }

        var formData = new FormData(form);
        formData.append('_subject', 'New message from portfolio');

        fetch(GM_FORM_ENDPOINT, {
            method: 'POST',
            body: formData,
            headers: { 'Accept': 'application/json' }
        })
        .then(function (r) {
            if (!r.ok) throw new Error('HTTP error');
            return r.json();
        })
        .then(function (data) {
            resetBtn();
            form.reset();
            form.classList.remove('was-validated');
            if (typeof Swal !== 'undefined') {
                Swal.fire({
                    title: 'Message Sent!',
                    text: 'Thank you for reaching out. I\'ll get back to you shortly.',
                    icon: 'success',
                    timer: 3000,
                    timerProgressBar: true,
                    showConfirmButton: false,
                    background: '#18181c',
                    color: '#f2f2f4',
                    customClass: { popup: 'swal-custom-popup', title: 'swal-custom-title' }
                });
            }
        })
        .catch(function () {
            resetBtn();
            if (typeof Swal !== 'undefined') {
                Swal.fire({
                    title: 'Error',
                    text: 'Failed to send message. Please check your connection and try again.',
                    icon: 'error',
                    timer: 5000,
                    timerProgressBar: true,
                    showConfirmButton: true,
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#10b981',
                    background: '#18181c',
                    color: '#f2f2f4',
                    customClass: { popup: 'swal-custom-popup', title: 'swal-custom-title', confirmButton: 'swal-custom-btn' }
                });
            }
        });

        return false;
    });
});
