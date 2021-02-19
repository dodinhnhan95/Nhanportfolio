var canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext("2d");
// Tạo một mảng màu
var colorArray = ["#f0f5ff", "#fffaf0", "#fffaf0", "	#f0fffa", "#ffffff"];
var mouse = {
  x: undefined,
  y: undefined,
};
window.addEventListener("mousemove", function (event) {
  // console.log(event);
  // (mouse.x = event.x), (mouse.y = event.y);
  // console.log(mouse);
});
function Circle(x, y, dx, dy, radius) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.minRadius = radius;
  this.color = colorArray[Math.floor(Math.random() * colorArray.length)];
  this.draw = function () {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    // c.strokeStyle = "blue";
    c.fillStyle = this.color;
    c.fill();
  };
  this.update = function () {
    if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }
    if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }
    this.y += this.dy;
    this.x += this.dx;
    // if (
    //   mouse.x - this.x < 150 &&
    //   mouse.x - this.x > -150 &&
    //   mouse.y - this.y < 150 &&
    //   mouse.y - this.y > -150
    // ) {
    //   if (this.radius < 40) {
    //     this.radius += 1;
    //   }
    //   // tại thuật toán này quy định tất cả các phần tử nào có bán kính lớn hơn 3 đều phải giảm xuống hết cho đến khi nào bán kính bằng 3 thì không giảm nữa/ nếu không có con chuột rê đến khu vực đã quy định như trên
    // } else if (this.radius > this.minRadius) {
    //   this.radius -= 1;
    // }

    this.draw();
  };
}

var circleArray = [];
for (var i = 0; i < 200; i++) {
  var x = Math.random() * (innerWidth - radius * 2) + radius;
  var y = Math.random() * (innerHeight - radius * 2) + radius;
  var dx = (Math.random() - 0.5) * 0.4;
  var dy = (Math.random() - 0.5) * 0.4;
  var radius = Math.random() * 1.5 + 1;
  circleArray.push(new Circle(x, y, dx, dy, radius));
}

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);
  for (var i = 0; i < circleArray.length; i++) {
    circleArray[i].update();
  }
}
animate();
