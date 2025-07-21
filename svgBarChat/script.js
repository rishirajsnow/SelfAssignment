const data = [25, 40, 10, 30, 50];
const svg = document.getElementById('chart');
const svgNS = "http://www.w3.org/2000/svg";

const width = svg.getAttribute('width');
const height = svg.getAttribute('height');
const maxValue = Math.max(...data);

const padding = 20;
const chartHeight = height - padding * 2;
const chartWidth = width - padding * 2;

const barWidth = 40;
const gap = (chartWidth - data.length * barWidth) / (data.length + 1);

data.forEach((value, index) => {
  const scaledHeight = (value / maxValue) * chartHeight;
  const x = padding + gap + index * (barWidth + gap);
  const y = height - padding - scaledHeight;

  // Create <rect>
  const rect = document.createElementNS(svgNS, "rect");
  rect.setAttribute("x", x);
  rect.setAttribute("y", y);
  rect.setAttribute("width", barWidth);
  rect.setAttribute("height", scaledHeight);
  rect.setAttribute("fill", "steelblue");
  svg.appendChild(rect);

  // Create <text>
  const label = document.createElementNS(svgNS, "text");
  label.setAttribute("x", x + barWidth / 2);
  label.setAttribute("y", y - 5);
  label.setAttribute("text-anchor", "middle");
  label.setAttribute("font-size", "12");
  label.setAttribute("fill", "#333");
  label.textContent = value;
  svg.appendChild(label);
});
