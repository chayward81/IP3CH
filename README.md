# Ping Pong!!!

#### This app takes number input from the user and returns either the number, or a ping, or a pong based on specific divisibility of the numbers input. 06/22/2016

#### By Charlie Hayward

## Description

This program will take number input from the user and will return a range of either
numbers up to the number input, or the strings "ping" or "pong" or "ping pong", based on the
divisibility of the numbers input.

## Setup/Installation Requirements

* Download the repository https://chayward81.github.io/IP3CH/
* Open index.html in your browser
* Enter some numbers

## Behavior Specifications

* Can return a range of numbers from 1 to the chosen numbers
  * Example Input: 5
  * Expected Output: [1,2,3,4,5]
* In addition to above, can replace each number that is divisible by 3 with string, "ping".
  * Example Input: 6
  * Expected Output: [1,2,"ping",4,5,"ping"]
* In addition to above, can replace each number that is divisible by 5 with string "pong".
  * Example Input: 5
  * Expected Output: [1,2,"ping",4,"pong"]
* In addition to above, can replace each number that is divisible by 15 with string "ping pong".
  * Example Input: 15
  * Expected Output: [1,2,"ping",4,"pong","ping",7,8,"ping","pong",11,"ping",13,14,"ping pong"]

## Known Bugs

In terms of this program passing the program specs listed above, there are no bugs in this program.

## Support and contact details

For questions about this program, please email me at c.hayward.mail@gmail.com

## Technologies Used

The elements of this program were implemented using HTML5. The styling of the page uses bootstrap and a custom CSS stylesheet. The front end is implemented using jQuery and the back end is strictly javaScript.

### License

Copyright (c) 2016 **Charlie Hayward**
