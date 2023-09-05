export default function getContactInfo() {
  const contactInfo = document.createElement("div");
  contactInfo.classList.add("contact");
  const name = document.createElement("h3");
  const phone = document.createElement("h3");
  const email = document.createElement("h3");
  name.textContent = 'El Secreto';
  phone.textContent = '+5989812399';
  email.textContent = 'info@elsecreto.resto'

  contactInfo.append(name, phone, email);
  
  return contactInfo;
}
