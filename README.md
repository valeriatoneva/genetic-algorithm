# Genetic Algorithm with Race Cars

## Overview

Hi, I'm taking my time to write this doc because I know I will forget what I've done at some point. (sorry if it is overly explainatory)
This project is a car simulation that utilizes genetic algorithms to evolve car behaviors over time. It's built using p5.js library and demonstrates the principles of genetic algorithms. Now, I know this sounds complex (for noramal not so nerdy people) but it's not. If you should know one thing about this project it is that basically there are checkpoints and if the car drives over a checkpoint their score increments.

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
By gen 250, the best car should loop through the track (yes, I've watched it that long). But now, what if I want to export the genes for the car that reached the end and put it onto another track? It’d be useless. Why? Because the steering/dna is specific to this current track. If we want to create a general-purpose self-driving racing car that can be plonked onto any track then we’re going to need something a little more than a genetic algorithm, we’re going to need a Neural Network (to be continued).

## License
This project is licensed under the MIT License - see the `LICENSE` file for details.
