function details(t, d, p, i) {
  this.type = t;
  this.description = d;
  this.price = p;
  this.image = i;
}

function product_data(e) {
  e.preventDefault();

  var form = document.getElementById("products");

  var type = form.type.value;
  var description = form.desc.value;
  var price = form.price.value;
  var image = form.image.value;

  var info = new details(type, description, price, image);

  var data1 = JSON.parse(localStorage.getItem("products")) || [];

  data1.push(info);

  localStorage.setItem("products", JSON.stringify(data1));

  console.log(data1);
}
