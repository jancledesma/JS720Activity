// 1. Create a predefined objects in an array

let products = [
    {
        prodCode: "00001",
        prodName: "Arduino Uno Rev 3",
        price: "$22.00",
        description: "The UNO is the best board to get started with electronics and coding. If this is your first experience tinkering with the platform, the UNO is the most robust board you can start playing with. The UNO is the most used and documented board of the whole Arduino family.",
        manufacturer: "Arduino",
        stocks: 1000,
        supplier: "Arduino",
        url: "https://store.arduino.cc/usa/arduino-uno-rev3",
        imgurl: "https://store-cdn.arduino.cc/usa/catalog/product/cache/1/image/520x330/604a3538c15e081937dbfbd20aa60aad/a/0/a000066_featured_4.jpg",
    },

    {
        prodCode: "00002",
        prodName: "Arduino Nano 33 IOT",
        price: "$18.00",
        description: "The ease of use of a Nano board with the addition of secure IoT and BT connectivity.",
        manufacturer: "Arduino",
        stocks: 1000,
        supplier: "Arduino",
        url: "https://store.arduino.cc/usa/nano-33-iot",
        imgurl: "https://store-cdn.arduino.cc/usa/catalog/product/cache/1/image/520x330/604a3538c15e081937dbfbd20aa60aad/a/b/abx00027_featured_1.png"
    },

    {
        prodCode: "00003",
        prodName: "Arduino Mega 2560 REV 3",
        price: "$30.80",
        description: "The MEGA 2560 is designed for more complex projects. With 54 digital I/O pins, 16 analog inputs and a larger space for your sketch it is the recommended board for 3D printers and robotics projects. This gives your projects plenty of room and opportunities.",
        manufacturer: "Aduino",
        stocks: 500,
        supplier: "Arduino",
        url: "https://store.arduino.cc/usa/mega-2560-r3",
        imgurl: "https://store-cdn.arduino.cc/usa/catalog/product/cache/1/image/520x330/604a3538c15e081937dbfbd20aa60aad/a/0/a000067_featured_1_.jpg"
    },

    {
        prodCode: "00004",
        prodName: "Arduino Micro",
        price: "$15.84",
        description: "Arduino Micro is the smallest board of the family, easy to integrate it in everyday objects to make them interactive.",
        manufacturer: "Arduino",
        stocks: 1000,
        supplier: "Arduino",
        url: "https://store.arduino.cc/usa/arduino-micro",
        imgurl: "https://store-cdn.arduino.cc/usa/catalog/product/cache/1/image/520x330/604a3538c15e081937dbfbd20aa60aad/a/0/a000053_featured_2.jpg" 
    },

    {
        prodCode: "00005",
        prodName: "Arduino Due",
        price: "$30.80",
        description: "The Arduino Due is the first Arduino board based on a 32-bit ARM core microcontroller. With 54 digital input/output pins, 12 analog inputs, it is the perfect board for powerful larger scale Arduino projects.",
        manufacturer: "Arduino",
        stocks: 1000,
        supplier: "Arduino",
        url: "https://store.arduino.cc/usa/due",
        imgurl: "https://store-cdn.arduino.cc/usa/catalog/product/cache/1/image/500x375/f8876a31b63532bbba4e781c30024a0a/A/0/A000062_front_2.jpg"
    },

    {
        prodCode: "00006",
        prodName: "Raspberry Pi 4",
        price: "$36.00",
        description: "Your tiny, dual-display, desktop computer …and robot brains, smart home hub, media centre, networked AI core, factory controller, and much more",
        manufacturer: "Raspberry",
        stocks: 1000 ,
        supplier: "Raspberry",
        url: "https://www.raspberrypi.org/products/raspberry-pi-4-model-b/",
        imgurl: "https://www.raspberrypi.org/homepage-9df4b/static/pi4-labelled-99c2e8935bb3cfdb27d23f634ea98a7e.png",
    },

    {
        prodCode: "00007",
        prodName: "Raspberry Pi 3 Model A+",
        price: "$30.00",
        description: "1.4GHz 64-bit quad-core processor, dual-band wireless LAN, Bluetooth 4.2/BLE in the same mechanical format as the Raspberry Pi 1 Model A+",
        manufacturer: "Raspberry",
        stocks: 1000 ,
        supplier: "Raspberry",
        url: "https://www.raspberrypi.org/products/raspberry-pi-3-model-a-plus/",
        imgurl: "https://www.raspberrypi.org/homepage-9df4b/static/8795b79dd0383fbbbe07f341744d1a20/bc3a8/b40e688ee64045b006cfe7875da3c42eb2d4bfe1_3a-1-1633x1080.jpg"
    },

    {
        prodCode: "00008",
        prodName: "Raspberry Compute Module 3+",
        price: "$22.00",
        description: "The Compute Module 3+ (CM3+) is a Raspberry Pi 3 Model B+ in a flexible form factor, intended for industrial applications",
        manufacturer: "Raspberry",
        stocks: 1000,
        supplier: "Raspberry",
        url: "https://www.raspberrypi.org/products/compute-module-3-plus/",
        imgurl: "https://www.raspberrypi.org/homepage-9df4b/static/34af626f1e8299b95d2f858372d2d14a/bc3a8/0807fa6b937b11be2d3acc8efeafda005b147a0c_cm304.jpg"
    },

    {
        prodCode: "00009",
        prodName: "Arduino Yun Rev 2",
        price: "$59.00",
        description: "The Yún Rev 2, Linux powered board with the Arduino simplicity, is the perfect board for your IoT projects!",
        manufacturer: "Arduino",
        stocks: 1000 ,
        supplier: "Arduino",
        url: "https://store.arduino.cc/usa/arduino-yun-rev-2",
        imgurl: "https://store-cdn.arduino.cc/usa/catalog/product/cache/1/image/520x330/604a3538c15e081937dbfbd20aa60aad/a/b/abx00020_featured_1_.jpg"
    },

    {
        prodCode: "00010",
        prodName: "Arduino MKR VIDOR 4000",
        price: "$59.92",
        description: "Looking for a board for a very specific use that Arduino doesn’t make? Or maybe you want a more complex central board, optimized for your particular needs that will interface with all other Arduino boards and devices. The MKR VIDOR 4000 is highly configurable and powerful, and it can perform high-speed digital audio and video processing.",
        manufacturer: "Arduino",
        stocks: 1000,
        supplier: "Arduino",
        url: "https://store.arduino.cc/usa/mkr-vidor-4000",
        imgurl: "https://store-cdn.arduino.cc/usa/catalog/product/cache/1/image/520x330/604a3538c15e081937dbfbd20aa60aad/a/b/abx00022_featured_1.jpg"
    }

]

let output = "";


products.forEach(function(item){
    output += `
    <div class="col-lg-4 col-md-6 mb-4">
    <div class="card h-100">
      <a href="#"><img  class="card-img-top" src="${item.imgurl}" alt=""></a>
      <div class="card-body">
      <h5>Product Code: ${item.prodCode}</h5>
        <h4 class="card-title">
          <a href="${item.url}">${item.prodName}</a>
        </h4>
        <h5>${item.price}</h5>
        <p class="card-text">${item.description}</p>
        <h5>Manufacturer: ${item.manufacturer}</h5>
        <h5>Stock: ${item.stocks}</h5>
        <h5>Stock: ${item.supplier}</h5>
      </div>
      <div class="card-footer">
        <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
      </div>
    </div>
  </div>
</div>`
});
document.getElementById('container').innerHTML = output;