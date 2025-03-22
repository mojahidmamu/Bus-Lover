
let totalBalance = 0;

function showPage(pageId) {
    document.querySelectorAll("div[id]").forEach(div => div.classList.add("hidden"));
    document.getElementById(pageId).classList.remove("hidden");
}

function addMoney() {
    let amount = parseInt(document.getElementById("add-amount").value);
    if (amount > 0) {
        totalBalance += amount;
        updateBalance();
        addToHistory(`Added ৳${amount}`);
    }
}

function cashOut() {
    let amount = parseInt(document.getElementById("cash-out-amount").value);
    if (amount > 0 && amount <= totalBalance) {
        totalBalance -= amount;
        updateBalance();
        addToHistory(`Cashed out ৳${amount}`);
    } else {
        alert("Insufficient balance");
    }
}

function transferMoney() {
    let account = document.getElementById("transfer-account").value;
    let amount = parseInt(document.getElementById("transfer-amount").value);

    if (account.length === 11 && amount > 0 && amount <= totalBalance) {
        totalBalance -= amount;
        updateBalance();
        addToHistory(`Transferred ৳${amount} to ${account}`);
    } else {
        alert("Invalid details or insufficient balance");
    }
}

function updateBalance() {
    document.getElementById("total-balance").innerText = `৳ ${totalBalance}`;
}

function addToHistory(entry) {
    let li = document.createElement("li");
    li.innerText = entry;
    document.getElementById("history-list").appendChild(li);
}
