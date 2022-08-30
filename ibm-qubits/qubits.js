const cx = /cx(\d+)_(\d+): ([0-9e\.+-]+)/i,
  gcx = new RegExp(cx.source, "ig");

function carte(cx, cy, r, deg) {
  const theta = (deg - 90) * Math.PI / 180.0;
  return { x: cx + (r * Math.cos(theta)), y: cy + (r * Math.sin(theta)) };
}

function curved(cx, cy, r, degFrom, degTo) {
  if (degTo == 360) degTo -= 0.001;
  else if (degTo == 0) degTo += 0.1;
  const from = carte(cx, cy, r, degTo),
    to = carte(cx, cy, r, degFrom),
    largeArcFlag = degTo - degFrom <= 180 ? "0" : "1";
  return [
    "M",
    from.x,
    from.y,
    "A",
    r,
    r,
    0,
    largeArcFlag,
    0,
    to.x,
    to.y,
  ].join(" ");
}

function arrow(g, cl) {
  g.append("defs")
    .append("marker")
    .attr("id", "arrow")
    .attr("viewBox", "0 0 4 4")
    .attr("refX", 1)
    .attr("refY", 2)
    .attr("markerWidth", 2)
    .attr("markerHeight", 2)
    .attr("orient", "auto-start-reverse")
    .append("path")
    .attr("d", "M0 0 L4 2 L0 4 z")
    .attr("class", cl || "arrow");
}

const uTAG = "Single-qubit U2 error rate";
const cxTAG = "CNOT error rate";
const t1TAG = "T1 (µs)";
const t2TAG = "T2 (µs)";
const roTAG = "Readout error";
const freqTAG = "Frequency (GHz)";

const roScale = d3.scaleLinear()
// .domain([d3.min(qubits.map((d) => d[roTAG])), d3.max(qubits.map((d) => d[roTAG]))])
.domain([0.01, 0.1])
.range([0, 100]);

const freqScale = d3.scaleLinear()
.domain([4.4, 5.4])
.range([0, 360]);

const cxScale = d3.scaleLinear()
.domain([0, 0.1])
.range([0, 6]);


function detailNode(chip, { count, date, t1, t2, freq, readout, u2, cx, tmax }) {
  const r = 64,
    width = 320,
    half = r + 8,
    size = 2 * half,
    g = d3.create("svg")
      .attr("viewBox", `0 0 ${width} ${size}`)
      .attr("width", 480)
      .attr("class", "info");

  const tScale = d3.scaleLinear()
    .domain([0, tmax])
    // .domain([t1min, t1max])
    .range([0, 360]);

  g.append("circle")
    .attr("cx", r + 8)
    .attr("cy", r + 8)
    .attr("r", r - 4)
    .attr("stroke-width", 4)
    .attr("class", "qubit");

  g.append("circle")
    .attr("cx", r + 8)
    .attr("cy", r + 8)
    .attr("r", r * .6)
    .attr("stroke-width", 4)
    .attr("class", "mr");

  g.append("path")
    .attr("d", function (d, i) {
      return curved(
        r + 8,
        r + 8,
        r * .6,
        t1.min == t1.max ? 0 : tScale(t1.min),
        tScale(t1.max),
      );
    })
    .attr("class", "t1");

  g.append("circle")
    .attr("cx", r + 8)
    .attr("cy", r + 8)
    .attr("r", r * .6 + 5)
    .attr("stroke-width", 4)
    .attr("class", "mr");

  g.append("path")
    .attr("d", function (d, i) {
      return curved(
        r + 8,
        r + 8,
        r * .6 + 5,
        t2.min == t2.max ? 0 : tScale(t2.min),
        tScale(t2.max),
      );
    })
    .attr("class", "t2");

    g.append("circle")
    .attr("cx", r + 8)
    .attr("cy", r + 8)
    .attr("r", r * .6 -5)
    .attr("stroke-width", 2)
    .attr("class", "mr");
  
    g.append("path")
    .attr("d", function (d, i) {
      return curved(
        r + 8,
        r + 8,
        r * .6 - 5,
        freq.min == freq.max ? 0 : freqScale(freq.min),
        freqScale(freq.max),
      );
    })
    .attr("class", "freq");

  let x = width - 170,
    y = half - 30;
  g.append("path")
    .attr("d", `M${size} ${y} l-33 13`)
    .attr("marker-end", "url(#arrow)")
    .attr("class", "tips");

  g.append("text")
    .call((t) =>
      t.append("tspan")
        .attr("font-size", 7)
        .attr("x", x)
        .attr("y", y)
        .text(t1TAG)
        .append("tspan")
        .attr("font-size", 9)
        .attr("x", x)
        .attr("y", y + 12)
        .attr("fill", "#71deff")
        .text(`${t1.min.toFixed(3)} ~ ${t1.max.toFixed(3)}`)
    );

  y = half - 5;
  g.append("path")
    .attr("d", `M${size} ${y} l-24 0`)
    .attr("marker-end", "url(#arrow)")
    .attr("class", "tips");

  g.append("text")
    .call((t) =>
      t.append("tspan")
        .attr("font-size", 7)
        .attr("x", x)
        .attr("y", y)
        .text(t2TAG)
        .append("tspan")
        .attr("font-size", 9)
        .attr("x", x)
        .attr("y", y + 12)
        .attr("fill", "#399ac7")
        .text(`${t2.min.toFixed(3)} ~ ${t2.max.toFixed(3)}`)
    );

  y = half +20;
  g.append("path")
  .attr("d", `M${size} ${y} l-36 -13`)
  .attr("marker-end", "url(#arrow)")
  .attr("class", "tips");

  g.append("text")
    .call((t) =>
      t.append("tspan")
        .attr("font-size", 7)
        .attr("x", x)
        .attr("y", y)
        .text(freqTAG)
        .append("tspan")
        .attr("font-size", 9)
        .attr("x", x)
        .attr("y", y + 12)
        .attr("fill", "#11634d")
        .text(`${freq.min.toFixed(3)} ~ ${freq.max.toFixed(3)}`)
    );
    
  y = half + 45;

  g.append("path")
    .attr("d", `M${size} ${y} h${-20} l-3 -3`)
    .attr("marker-end", "url(#arrow)")
    .attr("class", "tips");
  g.append("path")
    .attr("d", `M${size -33},${y-13} l3,3`)
    .attr("marker-end", "url(#arrow)")
    .attr("class", "tips");

  g.append("text")
    .call((t) =>
      t.append("tspan")
        .attr("font-size", 7)
        .attr("x", x)
        .attr("y", y)
        .text(uTAG)
        .append("tspan")
        .attr("font-size", 7)
        .attr("x", x)
        .attr("y", y +9)
        .attr("fill", "#ff6600")
        .text(`${u2.min.toExponential(5)} ~ ${u2.max.toExponential(5)}`)
    );

  g.append("text")
    .call((t) =>
      t.append("tspan")
        .attr("font-size", 7)
        .attr("x", half - 20)
        .attr("y", half)
        .text(roTAG)
        .append("tspan")
        .attr("font-size", 7)
        .attr("x", half - 26)
        .attr("y", half + 9)
        .attr("fill", "#ff9900")
        .text(`${readout.min.toFixed(4)} ~ ${readout.max.toFixed(4)}`)
    );

  if(count > 1){
    g.append("text")
    .attr('transform', `rotate(-90) translate(${-100},${size +130})`)
    .call((t) =>
      t.append("tspan")
        .attr("font-size", 7)
        // .attr("x", size + 90)
        // .attr("y", half)
        .text(cxTAG)
    )
    .call((t)=>t.append("tspan")
      .attr("font-size", 8)
      .attr("x", 0)
      .attr("y", 9)
      .attr("fill", "#bd3412")
      .text(`${cx.min.toFixed(4)} ~ ${cx.max.toFixed(4)}`)
    );
    g.append('path')
      .attr('d', `M${size+124},${half+36} h16`)
      .attr('stroke', '#999999')
      .attr('stroke-width', 6);
    g.append('rect')
    .attr('stroke', 'none')
    .attr('fill', '#8f2d15')
    .attr('x', size+124 +cxScale(cx.min) * 16/6)
    .attr('y', half + 33)
    .attr('width', cxScale(cx.max-cx.min) * 16/6)
    .attr('height', 6);
  }

  g.append("text")
    .append("tspan")
    .attr("font-size", 12)
    .attr("font-weight", "bold")
    .attr("x", x)
    .attr("y", 25)
    .text(chip.toUpperCase());

  g.append("text")
    .append("tspan")
    .attr("font-size", 6)
    .attr("fill", "#888")
    .attr("x", x)
    .attr("y", size - 7)
    .text(date.replace(/\s*\(.*$/, ''));

  return g.node();
}

const hover = {
  in: function (d) {
    tooltip.transition()
      .duration(200)
      .style("opacity", .9);
    tooltip.html(d3.event ? d3.event.target.getAttribute("title") : '')
      .style("left", (d3.event.pageX - 60) + "px")
      .style("top", (d3.event.pageY - 60) + "px");
  },
  out: function (d) {
    tooltip.transition()
      .duration(500)
      .style("opacity", 0);
  },
};

const titles = {
  "u2": function (d) {
    return `<small>${uTAG}</small> of <strong>${d.Qubit}</strong><div class="value">${
      (+d[uTAG]).toExponential(5)
    }</div>`;
  },
  "cx": function (d) {
    return `<small>${cxTAG}</small> of <strong>${d.to}&#x27F7;${d.from}</strong><div class="value">${
      (+d.weight).toFixed(5)
    }</div>`;
  },
  "t": function (tag, n) {
    return (d) =>
      `<small>${tag}</small> of <strong>${d.Qubit}</strong><div class="value">${
        (+d[tag]).toFixed(n || 3)
      }</div>`;
  }
};
titles.q = function(d) {
  return `${titles.u2(d)}
  ${titles.t(t1TAG)(d)}
  ${titles.t(t2TAG)(d)}
  ${titles.t(freqTAG)(d)}
  ${titles.t(roTAG, 5)(d)}`;
};

// main
function chipView(
  qubits,
  { layout, zoom=3, tmax=300, radius=32, gap= { x: 16, y: 16 } },
) {
  // view begins -->>>
  const gapX = gap && gap.x || 8,
    gapY = gap && gap.y || 16,
    startX = radius + gapX,
    startY = radius + gapY;
  if (!layout) {
    layout = {};
    for (let i = 0; i < qubits.length; i++) {
      layout[qubits[i].Qubit] = [0, i];
    }
  }

  let layoutX, layoutY, qi = {};
  const cxl = qubits.map((q) => {
    const m = q[cxTAG].match(gcx);
    if (!m) return { weight: 0 };
    return Array.prototype.slice.apply(m).map((d) => {
      const t = d.match(cx);
      return { from: "Q" + t[1], to: "Q" + t[2], weight: +t[3] };
    });
  }).flat();

  const cxStatus = function (d, i) {
    if (!d.from) return "";
    const is = qi[d.from], s = qubits[is];
    const ie = qi[d.to], e = qubits[ie];
    let xs = layoutX(s, is),
      ys = layoutY(s, is),
      xe = layoutX(e, ie),
      ye = layoutY(e, ie);

    const from = layout[d.from],
      to = layout[d.to];
    // if(Math.abs(from[1] - to[1]) >1) {
    //   return '';
    // }
    // if(d.from != 'Q0' && d.to != 'Q0') return;
    // console.log(i, d, layout[d.from], layout[d.to]);
    let arrow = "";
    if (from[0] == to[0]) {
      if (from[1] < to[1]) {
        xs += radius;
        xe -= radius;
        arrow = " v-2 l3,2 l-3,2 v-2";
      } else {
        xs -= radius;
        xe += radius;
        arrow = " v-2 l-3,2 l3,2 v-2";
      }
    } else if (from[1] == to[1]) {
      if (from[0] < to[0]) {
        ys += radius;
        ye -= radius;
        arrow = " h-2 l2,3 l2,-3 h-2";
      } else {
        ys -= radius;
        ye += radius;
        arrow = " h-2 l2,-3 l2,3 h-2";
      }
    } else {
      const beta = Math.atan((to[1] - from[1]) / (to[0] - from[0]));
      let xd = from[1] > to[1] ? 1 : -1,
        yd = from[0] < to[0] ? 1 : -1,
        arrow = ` h-2 l2,${yd * 3} l2,${-yd * 3} h-2`;

      xs += xd * radius * Math.sin(beta);
      xe += -xd * radius * Math.sin(beta);
      ys += yd * radius * Math.cos(beta);
      ye += -yd * radius * Math.cos(beta);
    }
    return `M${xs},${ys} l${xe - xs},${ye - ys}`;
  };

  const t1min = d3.min(qubits.map((d) => +d[t1TAG])),
    t1max = d3.max(qubits.map((d) => +d[t1TAG]));

  const t2min = d3.min(qubits.map((d) => +d[t2TAG])),
    t2max = d3.max(qubits.map((d) => +d[t2TAG]));

  if (!tmax) tmax = d3.max([t1max, t2max]);

  // init
  function init(qubits, layout) {
    let rows = 1, cols = 1;
    for (let q in layout) {
      let out = layout[q];
      if (out[0] + 1 > rows) rows = out[0] + 1;
      if (out[1] + 1 > cols) cols = out[1] + 1;
    }

    const w = startX - radius + cols * (radius * 2 + gapX);
    const h = startY - radius + rows * (radius * 2 + gapY);

    layoutX = function (d, i) {
      return startX + layout[d.Qubit][1] * (radius * 2 + gapX);
    };
    layoutY = function (d, i) {
      return startY + layout[d.Qubit][0] * (radius * 2 + gapY);
    };

    const g = d3.create("svg")
      .attr("viewBox", [0, 0, w, h])
      .attr("width", "100%")
      .attr("style", "max-height:" + Math.ceil(h * zoom) + "px")
      .attr("class", "qubits");

    g.selectAll("*").remove();

    arrow(g);

    const mr = d3.mean(qubits.map((d) => d[uTAG])), // error rate required
      scale = radius / (10 * mr + 0.0001);
    // console.log(mr.toExponential(4));

    const t1Scale = d3.scaleLinear()
      .domain([0, tmax])
      // .domain([t1min, t1max])
      .range([0, 360]);

    const t2Scale = d3.scaleLinear()
      .domain([0, tmax])
      // .domain([t2min, t2max])
      .range([0, 360]);

    // mean u2 error rate background
    g.append("g").selectAll(".mr")
      .data(qubits)
      .enter()
      .append("circle")
      .attr("cx", layoutX)
      .attr("cy", layoutY)
      .attr("r", function (d, i) {
        qi[d.Qubit] = i;
        return radius;
      })
      .attr("stroke-width", function (d, i) {
        return scale * mr;
      })
      .attr("title", titles.u2)
      .attr("class", "mr");

    // qubit u2 error rate
    g.selectAll(".qubit")
      .data(qubits)
      .enter()
      .append("circle")
      .attr("cx", layoutX)
      .attr("cy", layoutY)
      .attr("r", function (d, i) {
        return radius;
      })
      .attr("title", titles.u2)
      .attr("stroke-width", function (d, i) {
        return Math.round(scale * d[uTAG] * 1000) / 1000;
      })
      .attr("class", function (d, i) {
        return d[uTAG] <= mr ? "qubit" : "qubit-above-avg";
      });

    // cx
    g.append("g").selectAll(".cnot")
      .data(cxl)
      .enter()
      .append("path")
      .attr("d", cxStatus)
      .attr("title", titles.cx)
      .attr("stroke-width", 6)
      .attr("class", function (d, i) {
        return d.weight >= 1 ? "cx-none" : "cx-link";
      })
      .attr("marker-end", function (d, i) {
        return d.weight >= 1 ? "none" : "url(#arrow)";
      });
    g.append("g").selectAll(".cnot")
      .data(cxl)
      .enter()
      .append("path")
      .attr("title", titles.cx)
      .attr("d", cxStatus)
      .attr("class", function (d, i) {
        return d.weight >= 1 ? "cx-none" : "cx-weight";
      })
      .attr("stroke-width", d=>cxScale(d.weight));

    // qubit text
    g.append("g")
      .on('mousedown', hover.out)
      .attr("font-size", 11)
      .attr("text-anchor", "middle")
      .selectAll("text")
      .data(qubits)
      .join("text")
      .attr("transform", (d, i) => {
        return `translate(${layoutX(d, i)}, ${layoutY(d, i)})`;
      })
      .call((text) =>
        text.append("tspan")
          .attr("y", "0.4em")
          .attr("font-weight", "bold")
          .attr("fill", "#239fff")
          .attr("title", titles.q)
          .text((d) => d.Qubit)
          .append("tspan")
          .attr("fill", "#ff9900")
          .attr('style', (d)=>{
            const t = 100 -roScale(+d[roTAG]);
            return t < 0 ? 'fill:#ff6600' : `clip-path:polygon(0% ${t}%, 100% ${t}%, 100% 100%, 0% 100%)`;
          })
          .attr('x', '0')
          .attr("y", "0.4em")
          .attr("font-weight", "bold")
          .attr("title", titles.q)
          .text((d) => d.Qubit)
      )

    // freq
    g.append("g").selectAll(".full-freq")
      .data(qubits)
      .enter()
      .append("circle")
      .attr("cx", layoutX)
      .attr("cy", layoutY)
      .attr("r", function (d, i) {
        return radius * .6 -4;
      })
      .attr("title", titles.t(freqTAG))
      .attr("class", "full-freq");

      g.append("g").selectAll(".freq")
      .data(qubits)
      .enter()
      .append("path")
      .attr("d", function (d, i) {
        const cx = layoutX(d, i),
          cy = layoutY(d, i);
        return curved(cx, cy, radius * .6 -4, 0, freqScale(d[freqTAG]));
      })
      .attr("title", titles.t(freqTAG))
      .attr("class", "freq");

    // T1
    g.append("g").selectAll(".full-t1")
      .data(qubits)
      .enter()
      .append("circle")
      .attr("cx", layoutX)
      .attr("cy", layoutY)
      .attr("r", function (d, i) {
        return radius * .6;
      })
      .attr("title", titles.t(t1TAG))
      .attr("class", "full-t1");

    g.append("g").selectAll(".t1")
      .data(qubits)
      .enter()
      .append("path")
      .attr("d", function (d, i) {
        const cx = layoutX(d, i),
          cy = layoutY(d, i);
        return curved(cx, cy, radius * .6, 0, t1Scale(d[t1TAG]));
      })
      .attr("title", titles.t(t1TAG))
      .attr("class", "t1");

    // T2
    g.append("g").selectAll(".full-t2")
      .data(qubits)
      .enter()
      .append("circle")
      .attr("cx", layoutX)
      .attr("cy", layoutY)
      .attr("r", function (d, i) {
        return radius * .6 + 4;
      })
      .attr("title", titles.t(t2TAG))
      .attr("class", "full-t2");

    g.append("g").selectAll(".t2")
      .data(qubits)
      .enter()
      .append("path")
      .attr("d", function (d, i) {
        const cx = layoutX(d, i),
          cy = layoutY(d, i);
        return curved(cx, cy, radius * .6 + 4, 0, t2Scale(d[t2TAG]));
      })
      .attr("title", titles.t(t2TAG))
      .attr("class", "t2");

    g.selectAll("*[title]")
      .on("mouseover", hover.in)
      .on("mouseout", hover.out);

    return g.node();
  }

  const info = {
    count: qubits.length,
    date: qubits[0].Date,
    tmax: tmax,
    t1: { min: t1min, max: t1max },
    t2: { min: t2min, max: t2max },
    u2: {
      min: d3.min(qubits.map((d) => +d[uTAG])),
      max: d3.max(qubits.map((d) => +d[uTAG])),
      avg: d3.mean(qubits.map((d) => d[uTAG])),
    },
    cx: {
      min: d3.min(cxl.filter(d=>d.weight<=1.0).map((d) => d.weight)),
      max: d3.max(cxl.filter(d=>d.weight<=1.0).map((d) => d.weight)),
    },
    freq: {
      min: d3.min(qubits.map((d) => +d[freqTAG])),
      max: d3.max(qubits.map((d) => +d[freqTAG])),
    },
    readout: {
      min: d3.min(qubits.map((d) => +d[roTAG])),
      max: d3.max(qubits.map((d) => +d[roTAG])),
    }
  };

  return {
    info: info,
    view: init(qubits, layout),
  };
  // view ends <<<--
}

const tooltip = d3.select("body").append("div")
  .attr("class", "tooltip")
  .style("opacity", 0);

function view(chip, at, vl, cb) {
  d3.csv("chips"+(at?'_'+at:'')+"/" + chip + ".csv").then((qubits) => {
    // console.log(JSON.stringify(resp, null, '\t'));
    const { info, view } = chipView(qubits, { layout: layouts[chip] });
    const key = "view_of_" +chip;
    div = document.querySelector('#' +key);
    if(div) {
      div.replaceChild(detailNode(chip.replace(/_/g, " "), info), div.childNodes[2]);
      div.replaceChild(view, div.childNodes[3]);
      return cb && cb(chip);
    }
    div = document.createElement("div");
    div.id = key;
    div.className = "chip";
    div.innerHTML = '<a name="'+chip+'"/><a class="top" href="#top">TOP &#x2912;</a>';
    div.appendChild(detailNode(chip.replace(/_/g, " "), info));
    div.appendChild(view);
    (vl||document.body).appendChild(div);
    cb && cb(chip);
  }).catch((err) => {
    console.log(err);
    cb && cb(chip, err);
  });
}
