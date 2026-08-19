let balance = 0;
let todayReward = 0;


function money(amount) {

    return "Rs. " +
        amount.toLocaleString("en-PK");

}


function updateWallet() {

    document.getElementById("balance").innerText =
        money(balance);

    document.getElementById("today").innerText =
        money(todayReward);

}


function completeTask() {

    balance += 10;

    todayReward += 10;

    updateWallet();

    alert(
        "Demo task completed!\n\n" +
        "Rs. 10 simulated reward added."
    );

}

function selectPlan(planName, amount) {

    localStorage.setItem("selectedPlan", planName);
    localStorage.setItem("planAmount", amount);

    alert(
        planName +
        " Plan selected!\n\n" +
        "Demo amount: " +
        money(amount)
    );

    window.location.href = "dashboard.html";
}


function showPlans() {

    document
        .getElementById("plans")
        .scrollIntoView({
            behavior: "smooth"
        });

}


function loginDemo() {

    alert(
        "Login system will be connected " +
        "in the next version."
    );

}


updateWallet();
