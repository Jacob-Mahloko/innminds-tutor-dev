
[![Development Continuous Integration](https://github.com/Jacob-Mahloko/innminds-tutor-dev/actions/workflows/ci-dev.yml/badge.svg?branch=main)](https://github.com/Jacob-Mahloko/innminds-tutor-dev/actions/workflows/ci-dev.yml)

# Innminds Tutors

## What is Innminds ?

Innminds is a cutting-edge tutoring platform designed to revolutionize the way students learn and excel in their academic pursuits. With a user-friendly interface and powerful features, our application connects students with experienced tutors, providing personalized learning experiences tailored to their individual needs.

## Why Choose Innminds?

Quality Education: We prioritize quality instruction and academic excellence, ensuring that students receive the highest standard of tutoring from verified tutors.
Convenience: With anytime, anywhere access, students can learn from the comfort of their own homes, eliminating the hassle of commuting to tutoring centers.
Affordability: We believe that every student deserves access to quality education. Our transparent pricing model offers competitive rates and flexible payment options.
Community Support: Join a vibrant community of learners and educators, where students can collaborate with peers, share study tips, and access additional resources to enhance their learning journey.


[Checkout our wiki](https://github.com/Jacob-Mahloko/innminds-tutor-dev/wiki)

# running application
## FRONTEND
npm install

## Development
npm run dev

## Production
* npm run build
* npm start

## Docker frontend (if you have environement setup)

* npm run docker
* npm run docker-start

docker currently running in detach mode so you will need to add the following under environment variables

* ENV NEXT_PUBLIC_API_BASE_URI ACTUAL_BASE_URL

# BACKEND

Visual Studio
* select web.host as startup project
* build application
* run application under IIS Express
