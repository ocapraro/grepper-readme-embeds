export const basicEmbed = (title, content, width, style="") => {
  let box = `
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="${width}" height="200" viewBox="0 0 ${width} 200">
      <style>
        :root {
          --background-color:#151515;
          --title-color:#fff;
          --border-color:#fff;
        }
        @media (prefers-color-scheme: light) {
          :root {
            --background-color:#fff;
            --title-color:#000;
            --border-color:#000;
          }
        }
        text {
          font-family: sans-serif;
          font-weight: bold;
        }
        .list-item {
          font-size: 14;
          fill: #9E9E9E;
        }
        #title {
          fill:var(--title-color);
          font-size: 19px;
        }
        #bg {
          fill:var(--background-color);
          stroke:var(--border-color);
        } 
        ${style}
      </style>
      <rect width="100%" height="100%" id="bg" rx="4.5" x="0" y="0" />
      <g transform="translate(25, 35)">
        <text x="0" y="0" id="title">${title}</text>
        ${content}
      </g>
    </svg>
  `;
  return box
}