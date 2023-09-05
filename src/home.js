export default function getHome() {
    
  const hometext = `Welcome to 'El Secreto', your gateway to the exquisite flavors of Uruguay, right here in Punta del Este. We invite you to embark on a culinary journey that captures the essence of this South American gem, renowned for its hearty and delicious cuisine.
    Our Uruguayan restaurant is a warm and inviting haven where you can experience the heart and soul of Uruguayan gastronomy. Step inside, and you'll be greeted by an ambiance that reflects the rustic charm and coastal beauty of Uruguay.
    
    Wooden accents, nautical elements, and earthy tones create an atmosphere reminiscent of a cozy Uruguayan estancia by the sea.
    At 'El Secreto', we take pride in offering an authentic taste of Uruguay, from traditional recipes passed down through generations to modern interpretations that honor the country's culinary heritage.
    Our talented Chef Damian is dedicated to sourcing the finest locally grown ingredients to create dishes that transport you to the sun-soaked shores of Uruguay. Whether you're craving the famous Uruguayan barbecue, known as "asado," or looking to savor the delights of "chivito" sandwiches or "milanesa," our menu showcases the diverse flavors of Uruguay.
    Indulge in our tender, wood-grilled cuts of beef, seasoned to perfection and served with chimichurri sauce, or relish the flavors of fresh seafood inspired by the Atlantic coast.`;
  const restDesc = document.createElement("div");
  restDesc.classList.add("homeText");
  restDesc.append(hometext);
  return restDesc;
}
