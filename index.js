function sendMail() {
    var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      mobile: document.getElementById("mobile").value,
      message: document.getElementById("message").value,
    };
    const serviceID = "service_tnv0m53";
    const templateID = "template_lntym7s";
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("mobile").value = "";
          document.getElementById("message").value = "";
          console.log(res);
          alert("Your message sent successfully to Movie Magnet")
      })
      .catch(err=>console.log(err));
  }