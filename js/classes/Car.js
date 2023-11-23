export class Car {
    constructor() {
      this.carImg = carImg;
      this.velocity = p5.Vector.random2D(); // random init direction 
      this.genotype = new DNA(); // dna obj 
      this.r = 15; // r - car size 
      this.index = 0;
      this.pos = createVector(width/2, height - 325); // pos - starting point
      this.angle = 0; // orientation and rotation
      this.rotateAmount = 0; // orientation and rotation
      this.alive = true; 
      this.currentCheckpoint = 0; // progress tracking 
    }
    
    die() {
      this.alive = false;
    }
    
    draw() { // renders the car on the canvas, if the car is 'dead', it doesn't render; special rendering for the 'best' car (the green car)
      if (!this.alive) return;
  
      
      push();
      translate(this.pos.x, this.pos.y);
      rotate(this.angle);
      
      if (this.wasBest) {
        tint(0, 255, 100); 
      }
      imageMode(CENTER);
      image(carImg, 0, 0, this.r + 10, this.r);
      pop();
    }
    
    update() { // updates the car's position and angle based on its velocity and genotype and increments the index for the next move
      if (!this.alive) return;
      this.pos.x -= SPEED * cos(this.angle);
      this.pos.y -= SPEED * sin(this.angle);
      this.angle += this.genotype.genes[this.index];
      this.index++;
    }
    
    calcFitness() {
      //this.genotype.calcFitness(this.index);
      this.genotype.calcFitness(this.currentCheckpoint);
    }
    
    crossover(partner) { // creates a new Car instance with a genotype that is a mix of this car and a partner's, representing genetic crossover
      let childCar = new Car();
      childCar.genotype = this.genotype.crossover(partner.genotype);
      return childCar;
    }
    
    fitness() { // returns fitness value 
      return this.genotype.fitness;
    }
    
    mutate(mutationRate) { // aplies mutatuons to the car's genotype
      this.genotype.mutate(mutationRate);
    }
  }