const maxLoop = 5; // Set the maximum number of pages to process
let currentLoop = 1; // Set the initial page number to start with

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function findNextPage() {
  console.log(`Current page: ${currentLoop}, Maximum pages: ${maxLoop}`);

  let paginationElement = document.querySelector("#bosPagination");
  let paginationElementChildren = paginationElement?.children;

  if (currentLoop < maxLoop) {
    currentLoop++;

    function getButtonIndex() {
      for (let i = 0; i < paginationElementChildren.length; i++) {
        if (paginationElementChildren[i].textContent === currentLoop.toString()) {
          console.log("current button found", i);
          return i;
        }
      }
      console.log("-1 return");
      return -1; // Return -1 if active button not found
    }

    var nextButtonIndex = getButtonIndex();

    if (nextButtonIndex >= 0) {
      const nextButton = paginationElementChildren[nextButtonIndex + 1].firstElementChild; // Access directly
      if (nextButton) {
        nextButton.click();
      } else {
        console.error("Next button element not found.");
      }
    } else {
      console.error("Active pagination button not found.");
    }
  } else {
    console.log("Reached last page.");
  }
}

async function openAllPageBuyOrders() {
  console.log("Opening all buy orders on page...");
  let bos = document.querySelector("#bosContent");
  let buyorders = Array.from(bos.children);

  if (buyorders.length > 0) {
    for (let i = 0; i < buyorders.length; i++) {
      console.log("order", buyorders[i]);
    }
  } else {
    console.error("No buy orders found.");
  }
}

async function openAllBuyOrders() {
  console.log("Opening all buy orders...");
  await openAllPageBuyOrders(); // Start with the first page
  await findNextPage().then(() => openAllBuyOrders()); // Continue with the next page
}

openAllBuyOrders(); // Start the process
