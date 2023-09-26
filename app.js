// let dom = {
//     name:'dom', 
//     age: 21,
//     sockcolor:'blue',
// hello:function(){
//     console.log('hello' + dom.name)
// }}

// let heading=document.createElement('h2')
// heading.textContent=dom.name
// let domData =document.getElementById('dom-data')
// console.log (domData)
// domData.appendChild(heading)

// let para=document.createElement('p')
// para.textContent='Today dom is wearing '+dom.sockcolor + ' socks'
// domData.appendChild(para)

const hours = [
    "6am",
    "7am",
    "8am",
    "9am",
    "10am",
    "11am",
    "12pm",
    "1pm",
    "2pm",
    "3pm",
    "4pm",
    "5pm",
    "6pm",
    "7pm",
  ];
// give a random number between two numbers
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // create our first shop
  const seattle = {
    location: "Seattle",
    minCust: 23,
    maxCust: 65,
    avgCookiesPerCust: 6.3,
    customersPerHour: [],
    cookiesPerHour: [],
    totalCookieSold: 0,
    calculateSales: function () {
      for (let i = 0; i < hours.length; i++) {
        // get the number of customers for this hour
        const hourCustomers = randomNumber(this.minCust, this.maxCust);
        this.customersPerHour.push(hourCustomers);

        // get the number of cookies sold this hour
      const hourCookiesSold = Math.floor(hourCustomers * this.avgCookiesPerCust)
      this.cookiesPerHour.push(hourCookiesSold);

      // increase the total cookies by adding this hours sales to it
      this.totalCookieSold = this.totalCookieSold + hourCookiesSold;
      console.log(this.totalCookieSold)
    }
  },
};

const tokyo = {
    location: "Tokyo",
    minCust: 3,
    maxCust: 24,
    avgCookiesPerCust: 1.2,
    customersPerHour: [],
    cookiesPerHour: [],
    totalCookieSold: 0,
    calculateSales: function () {
      for (let i = 0; i < hours.length; i++) {
        // get the number of customers for this hour
        const hourCustomers = randomNumber(this.minCust, this.maxCust);
        this.customersPerHour.push(hourCustomers);
  
        // get the number of cookies sold this hour
        const hourCookiesSold = Math.floor(hourCustomers * this.avgCookiesPerCust)
        this.cookiesPerHour.push(hourCookiesSold);
  
        // increase the total cookies by adding this hours sales to it
        this.totalCookieSold = this.totalCookieSold + hourCookiesSold;
      }
    },
  };

  seattle.calculateSales();
tokyo.calculateSales();

// get the element on the page with the id salesData
const salesData = document.getElementById("salesData");

// add the title for the location
const seattleH2 = document.createElement("h2")
seattleH2.textContent = seattle.location;
salesData.appendChild(seattleH2)

// create a list to show the cookies sold at each hour
const seattleUl = document.createElement("ul");
// loop through out data and for each item create an <li>
for (let i = 0; i < hours.length; i++) {
  const li = document.createElement("li");
  li.textContent = `${hours[i]}: ${seattle.cookiesPerHour[i]} cookies`
  seattleUl.appendChild(li)
}

salesData.appendChild(seattleUl)


// add the title for the location
const tokyoH2 = document.createElement("h2")
tokyoH2.textContent = tokyo.location;
salesData.appendChild(tokyoH2)

// create a list to show the cookies sold at each hour
const tokyoUl = document.createElement("ul");
// loop through out data and for each item create an <li>
for (let i = 0; i < hours.length; i++) {
  const li = document.createElement("li");
  li.textContent = `${hours[i]}: ${tokyo.cookiesPerHour[i]} cookies`
  tokyoUl.appendChild(li)
}

salesData.appendChild(tokyoUl)


const dubai = {
    location: "Dubai",
    minCust: 11,
    maxCust: 38,
    avgCookiesPerCust: 3.7,
    customersPerHour: [],
    cookiesPerHour: [],
    totalCookieSold: 0,
    calculateSales: function () {
      for (let i = 0; i < hours.length; i++) {
        // get the number of customers for this hour
        const hourCustomers = randomNumber(this.minCust, this.maxCust);
        this.customersPerHour.push(hourCustomers);

        // get the number of cookies sold this hour
      const hourCookiesSold = Math.floor(hourCustomers * this.avgCookiesPerCust)
      this.cookiesPerHour.push(hourCookiesSold);

      // increase the total cookies by adding this hours sales to it
      this.totalCookieSold = this.totalCookieSold + hourCookiesSold;
      console.log(this.totalCookieSold)
    }
  },
};

// add the title for the location
const Dubai2 = document.createElement("h2")
DubaiH2.textContent = Dubai.location;
salesData.appendChild(DubaiH2)

// create a list to show the cookies sold at each hour
const DubaiUl = document.createElement("ul");
// loop through out data and for each item create an <li>
for (let i = 0; i < hours.length; i++) {
  const li = document.createElement("li");
  li.textContent = `${hours[i]}: ${Dubai.cookiesPerHour[i]} cookies`
  DubaiUl.appendChild(li)
}

salesData.appendChild(DubaiUl)


