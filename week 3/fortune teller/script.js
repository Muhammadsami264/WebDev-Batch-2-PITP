let options = [
    "You will have an amazing day.",
    "Something surprising is coming your way.",
    "A new opportunity is just around the corner.",
    "Good news is on the horizon.",
    "Be open to unexpected advice today.",
    "An exciting opportunity lies ahead.",
    "You will be pleasantly surprised tonight.",
    "A journey of a thousand miles begins with a single step.",
    "The fortune you seek is in another cookie.",
    "Expect the unexpected.",
    "Your success will astonish everyone.",
    "A stranger will cross your path who later becomes your friend.",
    "A wise person will give you timely advice.",
    "From small beginnings come great things.",
    "You will receive money from an unexpected source.",
    "Love is on the rise!",
    "An old acquaintance will re-enter your life.",
    "A long time friend will bring wise advice in the coming week.",
    "Your life will be happy and peaceful.",
    "You will soon be surrounded by good friends and laughter."
];

const getansbtn = document.querySelector("#ansbtn");
const ans = document.querySelector("#answer");

// 01 --------------------------------------------------------------------------------

// function showans() {
//     const index = Math.floor(Math.random() * options.length);
//     const randomans = options[index];

//     ans.textContent = randomans;
// }

// 02 --------------------------------------------------------------------------------

// function showans() {
    
//     const randomans = option[Math.floor(Math.random() * options.length)];

//     ans.textContent = randomans;
// }

// 03 --------------------------------------------------------------------------------

function showans() {
    
    ans.textContent = options[Math.floor(Math.random() * options.length)];
}

getansbtn.addEventListener("click" , showans);