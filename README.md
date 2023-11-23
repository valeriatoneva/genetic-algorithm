# Genetic Algorithm with Race Cars

## Overview

Taking my time to write this down because, let's face it, I'll probably forget all this later. So, this project's about a car simulation that gets smarter over time using what's called genetic algorithms. It's all done with this p5.js library, which is pretty cool for showing off these algorithm tricks. Now, it might sound like rocket science, but it's actually pretty simple. Here's the deal: there are these checkpoints, right? Every time a car nails one, bam, their score goes up. Simple as that. For now.

## What are genetic algorithms?

Genetic algorithms are inspired by Charles Darwin’s theory of evolution. The premise being the most successful individuals reproduce and pass on their genetic traits to their offspring, i.e. natural selection. The goal for the algorithm is very simple, go from one point to another and the quicker you get there the better.

![Alt text](/assets/images/screenshot.png)

## Features

- **Simulation of Cars**: Cars navigate a track, learning over time to improve their performance (fitness). They all move with the same speed. Only thing that is different is the steering (angle). 
- **Genetic Algorithm**: Implements genetic principles like natural selection (just a means of giving the successful individuals a higher chance of reproducing), crossover (the approach I’m taking is simply combining the genes so that each element alternates between mummy gene and daddy gene) and mutation ( I loop through every gene and if the random value is less than the mutationRate then I’ll create a random vector).
- **Interactive Track**: Users can interact with the simulation, potentially altering the course or conditions. (still into implementation)

## Getting Started

To run this project, follow these steps:

1. **Clone the Repo**

2. **Open the Project**
Navigate to the project directory and open the `index.html` file in a web browser.

## Prerequisites
This project requires no special installations if run in a web browser. It uses p5.js, which is included via CDN in the HTML file.

## Technologies Used
- **p5.js**: A JavaScript library that makes coding accessible for artists, designers, educators, and beginners. In this case used for canvas rendering -  It provides a simple and easy way to create a canvas on which the car simulation can be drawn and animated. 
- **JavaScript**: The main programming language used for the simulation logic.

## Structure
- `index.html`: The main entry point of the application.
- `js/sketch.js`: Contains the main logic for the simulation.
- `css/style.css`: Contains styles for the application.

## Room for improvement
So, by the time we hit generation 250, the top car is basically doing laps around the track (yeah, I've actually watched it that long). But here's the thing – what if I want to grab the winning car's genes and drop it into a new track? Won't work. Why not? Because the way it steers – its DNA – is tailored to the current track only. If we're aiming to build a super versatile self-driving race car that can handle any track, we need to level up from just genetic algorithms. What we need next is a Neural Network. Stay tuned for more on that.

## License
This project is licensed under the MIT License - see the `LICENSE` file for details.
