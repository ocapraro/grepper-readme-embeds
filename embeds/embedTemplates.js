export const basicEmbed = (title, content, width, style="") => {
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
        ${style}
      </style>
      <rect width="100%" height="100%" fill="#151515" rx="4.5" style="stroke-width:2;stroke:#fff" x="0" y="0" />
      <g transform="translate(25, 35)">
        <text x="0" y="0" style="
          fill:white;
          font-size: 19;
        ">${title}</text>
        ${content}
      </g>
    </svg>
  `;
  return box
}