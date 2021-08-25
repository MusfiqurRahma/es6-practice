// uses of let/const variables
/* কখন const আর কখন let দিয়ে ভেরিয়েবল ডিক্লেয়ার করতে হয় সেটা তোমাকে জানতেই হবে। তুমি নিজে নিজে একটা const দিয়ে আরেকটা let দিয়ে ভেরিয়েবল ডিক্লেয়ার করে ফেলো। */
const wiffi = 'Kajal Aggarwal';
// wiffi = 'Alia Bhatt';
// console.log(wiffi);

let cars = ['volvo', 'toyota', 'marcedes'];
cars = ['toyota', 'hunk', 'bazaz'];
// console.log(cars);

const names = ['Rahim', 'Karim', 'Sahin', 'Baharam'];
names[1] = 'Habib';
names.push('Sofiul');
// console.log(names);
/* . টেম্পলেট স্ট্রিং দিয়ে একটা স্ট্রিং তৈরি করো। সেটার মধ্যে উপরে ডিক্লেয়ার করা ভেরিয়েবল এর মান ডাইনামিক ভাবে বসাও। একইভাবে উপরে একটা অবজেক্ট ডিক্লেয়ার করো। এবং ডাইনামিকভাবে উপরের অবজেক্ট এর দুইটা প্রপার্টি এর মান তোমার টেমপ্লেট স্ট্রিং এর মধ্যে বসাও। */ 
// uses of template string and dynamic
let text = `The quick brown fox jumps over the lazy dog`;
// console.log(text);

let first = 'Kajal';
let last = 'Aggarwal';
let texts = `${first } ${ last }!`;
// console.log(texts);

const obj = { name: 'dell laptop', price: 30000, model: 'xm8' };
const { name, model } = obj;

let objText = `${name} ${model}`;
console.log(objText);

// uses of arrow function
/* একটা প্যারামিটার ওয়ালা arrow ফাংশন ডিক্লেয়ার করো। এবং সেই ফাংশনের কাজ হবে তুমি কোন ইনপুট দিলে সেই ইনপুট সংখ্যাকে ৫ দিয়ে ভাগ করে আউটপুট দিবে।  */
const divided = (num1) => (num1 /5);
const resu = divided(100);
// console.log(resu);
/* তুমি দুইটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন লিখবে। সেই ফাংশনের ভিতরে কাজ হবে। প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ২ যোগ করবে তারপর যোগফল দুইটা গুণ করবে। ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো  */
const addWithMultiply = (nums1, nums2) => {
   /*  nums1 = nums1 + 2;
    nums2 = nums2 + 2; */
    return (nums1+2) * (nums2+2);
};
const add2 = addWithMultiply(10,10);
// console.log(mutiply);
/* এইবার তিনটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন ডিক্লেয়ার করো। যেই ফাংশনের কাজ হবে তিনটা প্যারামিটার নিয়ে সেই তিনটা প্যারামিটারকে গুণ করে সেই রেজাল্ট রিটার্ন করবে।  */
const multiply = (num1, num2, num3) => (num1 * num2 * num3);
const total = multiply(2, 5, 10);
// console.log(total);
/* এইবার দুইটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন নিবে। ওই arrow ফাংশনটা হবে অনেকগুলা লাইনের। সেখানে প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ২ যোগ করবে তারপর যোগফল দুইটা গুণ করবে। ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো। */
const arr = (num1, num2) => {
    num1 = num1 + 2;
    num2 = num2 + 2;
    const gun = num1 * num2;
    return gun;
}
console.log(arr(10,10));
// console.log(multiplication);
/* অনেকগুলা সংখ্যার একটা array হবে। তারপর তোমার কাজ হবে array এর উপরে map ইউজ করে। প্রত্যেকটা উপাদানকে ৫ দিয়ে গুন্ করে গুনফল আরেকটা array হিসেবে রাখবে। পুরা কাজটা এক লাইনে হবে।  */
const array = [2, 3, 4, 5, 6, 8];
const arr = array.map(x => x * 5);
// console.log(arr);
/* অনেকগুলা সংখ্যার একটা array থেকে শুধু বিজোড় সংখ্যা বের করে নিয়ে আসার জন্য filter ইউজ করো */
let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
let oddNumbers = array1.filter(x => x % 2);
// console.log(oddNumbers);
/* একটা array এর মধ্যে অনেকগুলা অবজেক্ট আছে। সেখানে যেই অবজেক্ট এর price আছে ৫০০০ টেক্কা সেই অবজেক্টকে find দিয়ে বের করো।  */
const products = [
    { name: 'sympohony button phone', color: 'red', price: 1500},
    { name: 'nokia charger', color: 'black', price: 250 },
    { name: 'dell monitor', color: 'black', price: 4500 },
    { name: 'digital camera', color: 'white', price: 4000 },
    { name: 'i phone 11', color: 'black', price: 100000 },
    { name: 'dell laaptop', color: 'silver', price: 30000 },
];
const ar = products.find(number => number.price > 5000);
// console.log(ar);
/* সিম্পল একটা জাভাস্ক্রিপ্ট অবজেক্ট এর কোন একটা প্রোপার্টিকে ভেরিয়েবল হিসেবে ডিক্লেয়ার করার জন্য destructuring ইউজ করো।  */
const musfique = { name: 'Musfique', address: 'dhaka', phone: '017000000', height: 5.7 };
const { name, address, phone, height } = musfique;
// console.log(address);
/* [চ্যালেঞ্জিং] array এর destructuring করবে আর সেটা করার জন্য তুমি এরে এর থার্ড পজিশন এর উপাদান কে destructuring করে 'three' নামক একটা ভেরিয়েবল এ রাখবে।  */
const planet = ["Mercury", "Earth", "Venus", "Mars", "Pluto", "Saturn"];
const [one, two, three] = planet;
//  console.log(three);
/* . তিনটা প্যারামিটার ওয়ালা একটা ফাংশন লিখবে। যেই ফাংশনের কাজ হবে তিনটা প্যারামিটার নিয়ে সেই তিনটা প্যারামিটার এর যোগ করে যোগফল রিটার্ন করবে। আর থার্ড প্যারামিটার এর একটা ডিফল্ট ভ্যালু থাকবে। সেটা হবে ৭।  */
function  add3(a,b,c =7) {
    return a + b + c;
}
const rest = add3(2,3);
// console.log(rest);
/* একটা nested অবজেক্ট ডিক্লেয়ার করো (অর্থাৎ একটা অবজেক্ট এর প্রপার্টি এর মধ্যেও যে অবজেক্ট থাকতে পারে। আবার সেই অবজেক্ট এর প্রপার্টি এর মধ্যেও সে অবজেক্ট থাকতে পারে। সেই রকম একটা অবজেক্ট ডিক্লেয়ার করো। এবং যেকোন একটা প্রপার্টি এর মান একটা array হবে। জাস্ট এমন একটা অবজেক্ট ) */
const company = {
    name: 'teletalk',
    ceo: { name: 'Jhinuk', id: 10, post: 'web-developer' },
    position: { rank: 'team-leader', food: 'kacchi', department: { subject: 'english', cgpa: 3.00 } }
};
const {subject,cgpa} = company.position.department;
// console.log(subject,cgpa);
/* উপরের অবজেক্ট এ ডট এর আগে যে প্রশ্নবোধক চিহ্ন দিয়ে যে অপশনাল চেইনিং করা যায়। সেটা একটু প্রাকটিস করো।  */
const itIndustry = {
    name: 'teletalk',
    ceo: { name: 'Jhinuk', id: 10, post: 'web-developer' },
    position: {
        rank: 'team-leader', food: 'kacchi',
        department: { subject: 'english', cgpa: 3.00 }
    }
};
console.log(itIndustry?.ceo?.frontend);

function mastan(name1,name2='bhai') {
    return `${name1} ${name2}`
}
// console.log(mastan('Bangla'));
const firstName = 'Ershad';
const lastName = 'shikder';
let value = 4;
const fullName = `${firstName} ${lastName} ${value *2}`
console.log(fullName);