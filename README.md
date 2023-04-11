# PawPrints
Welcome to Pawprints. A dog lover's paradise. This application allows you to journal your experiences with your dog. Additionally it calculates how close you are with your dog through a series of fun metrics

## Getting Started

run $ npm install in both pawprints-frontend and pawprints-backend folders 

Knex.js & MySQL
 Run command $ knex migrate:up with the following migration files in this order: users, doggos,posts,metrics. 

.env
Please insert personal environment variables for the following:

PORT DB_LOCAL_DBNAME DB_LOCAL_USER DB_LOCAL_PASSWORD JWT_SECRET

## Tech Stack
React
SQL
Node.js

## Lessons Learned

There were multiple lessons that I learned along the way. Number one is to never underestimate the value of project planning.
My plan was too vague and didn't have a solid outline for certain features of my application. Figuring it out while trying to solve the code logic, made it a stressul situation.

Number two was to include a more realistic time for design. I had originally thought I could make a mockup in day and start coding. I was sooooo wrong. It endedup taking two and a half days of my week deadline. Knowing this would have helped me scale down my project.

## Next Steps

I have multiple routes and features that I would like to implement soon. I want user interactions, with accounts able to have best friends. I'd also like to enhance my canine connection section by adding badges when you complete allpaws so it can reset. Finally my forms have no validation so I 'd like to add that as wells