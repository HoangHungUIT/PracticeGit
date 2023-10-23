// // Lấy các đối tượng button và tab content
var button1 = document.getElementById("btn_connect");
var button2 = document.getElementById("btn_tasks");
var button3 = document.getElementById("btn_random");
var tabContent1 = document.getElementById("tab_content1");
var tabContent2 = document.getElementById("tab_content2");
var tabContent3 = document.getElementById("tab_content3");

tabContent1.style.display = "flex";
tabContent1.style.flexDirection = "column";
tabContent1.style.justifyContent = "center";
tabContent1.style.alignItems = "center";
tabContent1.style.textAlign = "center";

tabContent2.style.display = "none";
tabContent3.style.display = "none";

// Xử lý sự kiện click cho button 1
button1.addEventListener("click", function(event) {
   // huy cac hanh dong mac dinh HTML cai dat san - truong` hop nay la the a

   event.preventDefault();
   // Ẩn tất cả tab content
   tabContent1.style.display = "flex";
   tabContent1.style.flexDirection = "column";
   tabContent1.style.justifyContent = "center";
   tabContent1.style.alignItems = "center";
   tabContent1.style.textAlign = "center";

   tabContent2.style.display = "none";
   tabContent3.style.display = "none";
   });

   // Xử lý sự kiện click cho button 2
   button2.addEventListener("click", function(event) {
   // huy cac hanh dong mac dinh HTML cai dat san - truong` hop nay la the a
   event.preventDefault();

   // Ẩn tất cả tab content
   tabContent1.style.display = "none";

   tabContent2.style.display = "flex";
   tabContent2.style.flexDirection = "column";
   tabContent2.style.justifyContent = "center";
   tabContent2.style.alignItems = "center";
   tabContent2.style.textAlign = "center";
   
   tabContent3.style.display = "none";
   });

   // Xử lý sự kiện click cho button 3
   button3.addEventListener("click", function(event) {
   // huy cac hanh dong mac dinh HTML cai dat san - truong` hop nay la the a
   event.preventDefault();

   // Ẩn tất cả tab content
   tabContent1.style.display = "none";
   tabContent2.style.display = "none";
   
   tabContent3.style.display = "flex";
   tabContent3.style.flexDirection = "column";
   tabContent3.style.justifyContent = "center";
   tabContent3.style.alignItems = "center";
   tabContent3.style.textAlign = "center";
   });