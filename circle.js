class Circle {
  constructor(radius, color) {
    this.radius = radius;
    this.color = color;
  }

  getRadius() {
    return this.radius;
  }

  getArea() {
    let r = this.radius;
    return r * r * Math.PI;
  }
}

let circle = new Circle(2);
let radius = circle.getRadius();
let area = circle.getArea();
alert("radius: " + radius + "; area: " + area);

let circle2 = new Circle(10);
radius = circle2.getRadius();
area = circle2.getArea();
alert("radius: " + radius + "; area: " + area);
