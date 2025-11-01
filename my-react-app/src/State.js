// მოდულის დონეზე ცვლადები (გლობალური state)
let currentHookIndex = 0;
let hooksArray = [];
let componentInstance = null;

function useState(initialValue) {
  // დავიმახსოვროთ რომელ ინდექსზე ვართ ამ hook-ისთვის
  const hookIndex = currentHookIndex;
  
  // თუ პირველად ვრენდერავთ, შევინახოთ საწყისი მნიშვნელობა
  if (hooksArray[hookIndex] === undefined) {
    hooksArray[hookIndex] = initialValue;
  }
  
  // setter ფუნქცია - closure-ის გამო ახსოვს hookIndex-ს
  const setState = (newValue) => {
    // განვაახლოთ მნიშვნელობა
    hooksArray[hookIndex] = newValue;
    
    // თავიდან დავრენდეროთ კომპონენტი
    rerender();
  };
  
  // გადავიდეთ შემდეგ hook-ზე
  currentHookIndex++;
  
  // დავაბრუნოთ [state, setState]
  return [hooksArray[hookIndex], setState];
}

function rerender() {
  currentHookIndex = 0; // გავნულოთ ინდექსი
  componentInstance(); // თავიდან გამოვიძახოთ კომპონენტი
}