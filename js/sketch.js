import { TURN_MAX, POPULATION_COUNT, SPEED, SHOW_CHECKPOINTS, MUTATION_RATE } from './config.js';
import { Car } from './classes/Car.js';
import { DNA } from './classes/DNA.js';
import { Checkpoints } from './classes/Checkpoints.js';


let population = [];
let matingPool = [];

let skip = false;
let generationCount = 0;
let myFrameCount = 0;
let track;
let carImg;
let isFinished = false;
let checkpoints;
let best;

function preload() { // in p5.js, preload() is used to load external files before the rest of the program runs. Here, it loads the track layout
  loadJSON('data/points.json', setupCheckpoints);
}

function setupCheckpoints(points) {
  checkpoints = new Checkpoints(points);
}

function setup() {  // sets up the canvas, loads images, and initializes the car population
  console.log('set up is working') 
  createCanvas(800, 800);
  carImg = loadImage('images/car.png');
  track = loadImage('images/track.png');
  for (let i = 0; i < POPULATION_COUNT; i++) {
    population.push(new Car());
  }
  goal = createVector(width / 2, 20);
}

function draw() { // continuously updates the simulation - It handles car updates, checks for collisions, and manages the genetic algorithm process if the generation is finished
    console.log("Draw function is running.");
  background(147, 204, 76);
  image(track, 0, 0, 800, 800)

  checkWallCollisions();

  isFinished = true;
  for (let car of population) {
    car.update();
    car.draw();
    
    
    if (checkpoints.hit(car)) {
      car.currentCheckpoint++;
    }
    if (car.alive) isFinished = false;
  }

  if (isFinished) {
    for (let pop of population) {
      pop.calcFitness();
    }
    naturalSelection();
    generate();
    generationCount++;
    myFrameCount = 0;
  }
  
  checkpoints.draw();
  textSize(20);
  text(`Best Distance: ${best && best.currentCheckpoint ?  best.currentCheckpoint: 0}`, 25, height - 110);
  text(`Generation: ${generationCount}`, 25, height - 80);
  text(`Population: ${population.length}`, 25, height - 50);
  text(`Mutation Rate: ${mutationRate*100}%`, 25, height - 20);
  myFrameCount++;
}

function checkWallCollisions() { // checks if cars collide with walls
  for (let car of population) {
    let pixelRgb = get(car.pos.x, car.pos.y);
    if (pixelRgb[0] !== 147 && pixelRgb[0] !== 110) {
      car.die();
    }
  }
}

function naturalSelection() { // selects the fittest cars to form a new mating pool
  matingPool = [];
  let bestCount = 0;
  for (let pop of population) {
    let n = floor(pop.fitness() * 100);
    if (n > bestCount) {
      bestCount = n;
      best = pop;
    }
    for (let i = 0; i < n; i++) {
      matingPool.push(pop);
    }
  }

  if (best) {
    for (let i = 0; i < bestCount * 4; i++) {
      matingPool.push(best);
    }
  }

  best = Object.assign({}, best);

}

function generate() { // creates a new generation of cars using crossover and mutation from the mating pool
  for (let i = 0; i < population.length; i++) {
    let mummyIndex = floor(random(matingPool.length));
    let daddyIndex = floor(random(matingPool.length));

    let mummy = matingPool[mummyIndex];
    let daddy = matingPool[daddyIndex];

    let child = mummy.crossover(daddy);
    child.mutate(mutationRate);
    population[i] = child;
  }
  population[0].genotype = best.genotype // always have the previous best with 0 mutations
  population[0].wasBest = true;
}


function mousePressed() {
  checkpoints.create(mouseX, mouseY);
}

function keyPressed() {
  if (keyCode === 83) {
    checkpoints.save();
  }
  checkpoints.delete();
}

