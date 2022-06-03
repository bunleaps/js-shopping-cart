var items = [];
var tableBody = document.getElementById("cartTableBody");

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

function size_ofCart() {
  var size = items.length;
  console.log("Cart size is", size);
}

function get_Cart() {
  for (item in items) {
    console.log(items[item].item, "*", items[item].quan);
  }
}

total_Price(prices);
