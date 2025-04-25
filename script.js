

// ✅ إضافة تأثير التمرير السلس عند النقر على روابط النافبار

document.querySelectorAll('.navbar a, footer a').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        const targetId = this.getAttribute('href');

        // ✅ تجاهل الروابط غير الداخلية
        if (!targetId || !targetId.startsWith("#") || targetId === "#") return;

        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            event.preventDefault(); // منع السلوك الافتراضي فقط إذا كان الرابط داخليًا

            window.scrollTo({
                top: targetSection.offsetTop - 50, // تعويض ارتفاع النافبار
                behavior: "smooth"
            });
        }
    });
});


function showForm() {
    document.getElementById('app-form').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
}

function nonOrdr() {
    document.getElementById('app-form').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}


function changeImage(element) {
    document.getElementById('mainImage').src = element.src;
}



const main = document.getElementById("btn-main");
const mainn = document.querySelector(".mainn");

main.onclick = function(){
    mainn.classList.toggle("active");

}

const close = document.querySelector(".close");
close.onclick = function(){
    mainn.classList.remove("active");

}












