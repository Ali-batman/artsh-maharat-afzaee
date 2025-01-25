document.getElementById('contactForm').addEventListener('submit', function(event) { 
    event.preventDefault(); // جلوگیری از ارسال فرم 
    const name = document.getElementById('name').value; 
    const email = document.getElementById('email').value; 
    const message = document.getElementById('message').value; 
    // اینجا می‌توانید کد برای ارسال فرم به یک سرور اضافه کنید 
    // برای نمایش پیام تأیید 
    const responseDiv = document.getElementById('formResponse'); 
    responseDiv.textContent = `متشکرم ${name}! پیام شما با موفقیت ارسال شد.`; 
    responseDiv.style.display = 'block'; 

    // پاک کردن فرم 
    document.getElementById('contactForm').reset(); 
    });