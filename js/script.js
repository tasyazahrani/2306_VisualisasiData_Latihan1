const sandwiches = [
    { name: "Thesis", price: 7.95, size: "large" },
    { name: "Dissertation", price: 8.95, size: "large" },
    { name: "Highlander", price: 6.50, size: "small" },
    { name: "Just Tuna", price: 6.50, size: "small" },
    { name: "So-La", price: 7.95, size: "large" },
    { name: "Special", price: 12.50, size: "small" }
];

const svg = d3.select("svg");

const radiusScale = d3.scaleOrdinal()
    .domain(["small", "large"])
    .range([20, 40]); // small = 20px, large = 40px

const colorScale = d3.scaleThreshold()
    .domain([7.00])
    .range(["green", "yellow"]); // <7 = green, >=7 = yellow

svg.selectAll("circle")
    .data(sandwiches)
    .enter()
    .append("circle")
    .attr("cx", (d, i) => i * 85 + 50) // Jarak antar lingkaran
    .attr("cy", 50) // Semua sejajar dalam satu baris
    .attr("r", d => radiusScale(d.size))
    .attr("fill", d => colorScale(d.price))
    .attr("stroke", "black")
    .attr("stroke-width", 1);
