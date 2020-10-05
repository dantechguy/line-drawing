def line (start, end):
  points = []

  width = end.x - start.x
  height = end.y - start.y
  largestGap = Math.max(Math.abs(width), Math.abs(height))

  deltaX = width / largestGap
  deltaY = height / largestGap

  for i in range(largestGap):
    points.append({
      x: start.x + i*deltaX,
      y: start.y + i*deltaY
      })

  return points