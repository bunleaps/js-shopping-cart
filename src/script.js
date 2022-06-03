// Create Items Array
var items = [];

// get table element from HTML
var tableBody = document.getElementById("cartTableBody");

// Setup Price Map
const prices = [
  {
    item: "apple",
    price: 1,
  },
  {
    item: "pie",
    price: 2,
  },
];

// Add to Cart Function
function add_toCart() {
  var item = { item, quan };
  item.item = document.getElementById("item").value;
  item.quan = document.getElementById("quan").value;

  items.push(item);
  console.log(item.item, "*", item.quan, "has been added to cart!");

  tableBody.innerHTML +=
    "<tr>" +
    "<td>" +
    item.item +
    "</td>" +
    "<td class='text-right'>" +
    item.quan +
    "</td>" +
    "</tr>";
}

// Sum up total price function
function total_Price(price_map) {
  var sum = 0;
  var totalAmount = document.getElementById("totalAmount");

  for (i = 0; i < items.length; i++) {
    if (items[i].item == price_map[i].item) {
      sum += price_map[i].price * items[i].quan;
    }
  }

  console.log("Total: $" + sum);

  totalAmount.innerHTML = sum;
}

// Console Log Each items in the cart
function get_Cart() {
  for (item in items) {
    console.log(items[item].item, "*", items[item].quan);
  }
}
