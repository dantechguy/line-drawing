function line (start, end) {
  let points = [];

  let width = end.x - start.x;
  let height = end.y - start.y;
  let largestGap = Math.max(Math.abs(width), Math.abs(height));

  let deltaX = width / largestGap;
  let deltaY = height / largestGap;

  for (let i=0; i<=largestGap; i++) {
    points.push({
      x: start.x + i*deltaX,
      y: start.y + i*deltaY
    })
  }
  return points;
}