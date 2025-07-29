function copyEmail(event){
  event.preventDefault();
  const clickedId = event.target.id; // get the id directly from clicked <a>
  let value = "";
  let msg = "";

  if (clickedId === "gmail") {
    value = "jkpardiv@gmail.com";
    msg = "Email Copied Successfully";
  } else if (clickedId === "phone") {
    value = "+91 9381714017";
    msg = "Phone Number Copied Successfully";
  } else {
    alert("Nothing to copy");
    return;
  }
    navigator.clipboard.writeText(value).then(()=>{
        alert(msg);
    }).catch(()=>{
        alert("Failed to Copy email")
    });
}
document.getElementById('contact-form').addEventListener('submit',function(event){
    event.preventDefault();
    emailjs.sendForm('service_aq52csh','template_arrhd1f',this).then(()=>{
        alert('message sent successfully');
    },(error)=>{
        alert("Failed to sent a Message");
    })
})