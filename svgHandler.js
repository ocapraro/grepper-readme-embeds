const width = 969;

export const activityBox = (name,activity) => {
  let activityList = '<g transform="translate(0, 30)">';
  for (let i = 0; i < activity.length && i < 5; i++) {
    let date = new Date(activity[i].created_at+" GMT");
    activityList += `
      <g transform="translate(0, ${i*30})">
        <text class="list-item">Viewed code answer to "${activity[i].answer_title.length>60?activity[i].answer_title.slice(0,57)+"\"...":activity[i].answer_title+"\""}</text>
        <text x="${width-50}" text-anchor="end" class="list-item">${date.toLocaleString('en-US', { hour: 'numeric', hour12: true, minute:'2-digit' })}</text>
        ${i<4?`<line x1 = "0" y1 = "9" x2 = "${width-50}" y2 = "9" stroke = "#eee" stroke-width = "1"/>`:''}
      </g>
    `;
    
  }
  activityList += "</g>"
  let box = `
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="${width}" height="200" viewBox="0 0 ${width} 200">
      <style>
        text {
          font-family: sans-serif;
          font-weight: bold;
        }
        .list-item {
          font-size: 14;
          fill: #9E9E9E;
        }
      </style>
      <rect width="100%" height="100%" fill="#151515" rx="4.5" style="stroke-width:1;stroke:#fff" x="0" y="0" />
      <g transform="translate(25, 35)">
        <text x="0" y="0" style="
          fill:white;
          font-size: 19;
        ">${name}'s Daily Activity</text>
        ${
          activity.length?activityList:`
          <g transform="translate(0, 28)">
            <text class="list-item">No activity yet..</text>
          </g>`
        }
      </g>
    </svg>
  `;
  return box
}

