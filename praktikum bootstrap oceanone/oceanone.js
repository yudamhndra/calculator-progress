function showAlert() {
  alert("Take action alert box!");
}

function sendData() {
  try {
    document.getElementById("formsaran").addEventListener("submit", (e) => {
      e.preventDefault();
      var name = document.getElementById("name").value;
      var email = document.getElementById("email").value;
      var message = document.getElementById("message").value;

      document.getElementById("nameShow").innerText = name;
      document.getElementById("emailShow").innerText = email;
      document.getElementById("messageShow").innerText = message;

      var div = document.getElementById("response");
      if (div.style.display === "none") {
        div.style.display = "block";
      } else {
        div.style.display = "none";
      }
    });
  } catch (err) {
    alert(err.message);
  }
}

var items = [
  { name: "Botol Plastik", quantity: 0 },
  { name: "Sedotan", quantity: 0 },
  { name: "Puntung Rokok", quantity: 0 },
];

function updateQuantity(index, quantity) {
  items[index].quantity = parseInt(quantity);
}

function addItem() {
  var itemName = prompt("Enter item name");
  if (itemName) {
    var newItem = {
      name: itemName,
      quantity: 0,
    };
    items.push(newItem);
    updateItemList();
  }
}

function updateItemList() {
  var itemList = document.getElementById("itemList");
  itemList.innerHTML = "";

  for (var i = 0; i < items.length; i++) {
    var listItem = document.createElement("li");
    listItem.textContent = items[i].name + ": ";
    var quantityInput = document.createElement("input");
    quantityInput.type = "number";
    quantityInput.min = 0;
    quantityInput.value = items[i].quantity;
    quantityInput.onchange = (function (index) {
      return function () {
        updateQuantity(index, this.value);
      };
    })(i);
    listItem.appendChild(quantityInput);
    itemList.appendChild(listItem);
  }
}

function calculateTotal() {
  var total = 0;
  for (var i = 0; i < items.length; i++) {
    total += items[i].quantity;
  }
  document.getElementById("total").textContent = "Total Sampah: " + total * 365;
}

function calculate() {
  document.getElementById("Kalkulator").addEventListener("submit", (x) => {
    x.preventDefault();

    var sampah1 = parseFloat(document.getElementById("Botol").value);
    var sampah2 = parseFloat(document.getElementById("Sedotan").value);
    var sampah3 = parseFloat(document.getElementById("rokok").value);

    var total = (sampah1 + sampah2 + sampah3) * 365;

    document.getElementById("jumlahSampah").innerText = total + " dalam Setahun";
  });
}
