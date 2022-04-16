import { basicEmbed } from "./embedTemplates.js";

const frameworkColors = [
  {
    name:"jQuery",
    hex:"#0769ad"
  },
  {
    name:"React",
    hex:"#61DBFB"
  },
  {
    name:"Wordpress",
    hex:"#21759b"
  },
  {
    name:"Node.js",
    hex:"#68a063"
  },
  {
    name:"Express",
    hex:"#828282"
  },
  {
    name:"Ionic",
    hex:"#81ACFF"
  },
  {
    name:"Flask",
    hex:"#4C4C4C"
  },
  {
    name:"Spring",
    hex:"#98C97A"
  },
  {
    name:"Unity",
    hex:"#000"
  },
  {
    name:"Skeleton",
    hex:"#000"
  },
  {
    name:"Semantic UI",
    hex:"#fff"
  },
  {
    name:"AngularJS",
    hex:"#EA7175"
  },
  {
    name:"Bootstrap",
    hex:"#8876A3"
  },
  {
    name:"Laravel",
    hex:"#FA6F67"
  },
  {
    name:"Vue",
    hex:"#759095"
  }
];

export const frameworkBox = (frameworks,width,isMobile) => {
  let style = isMobile?`
    .card {
      width:425px
    }
  `:"";
  let activity = frameworks.reduce((a,b)=>a+b[1],0);
  let frameworksList = '<g transform="translate(0, 30)"><g>';
  let gradient = '<linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">';
  for (let i = 0; i < frameworks.length && i < 5; i++) {
    const color = frameworkColors.find(x => x.name === frameworks[i][0])?frameworkColors.find(x => x.name === frameworks[i][0]).hex:"#fff";
    let prevPercent = parseFloat(100*frameworks.slice(0, i).reduce((a,b)=>a+b[1],0)/activity);
    let prevPrevPercent = parseFloat(100*frameworks.slice(0, i>0?i-1:0).reduce((a,b)=>a+b[1],0)/activity);
    gradient += `
      <stop offset="${i>0?(parseFloat(100*frameworks[i-1][1]/activity)+prevPrevPercent).toFixed(2):0}%" style="stop-color:${color};stop-opacity:1" />
      ${i<frameworksList.length?`<stop offset="${(parseFloat(100*frameworks[i][1]/activity)+prevPercent).toFixed(2)}%" style="stop-color:${color};stop-opacity:1" />`:""}
    `;
    frameworksList += `
      ${i===3?`</g><g transform="translate(170, 0)">`:""}
      <g transform="translate(10, ${(i-Math.floor(i/3)*3)*30+5})">
        <ellipse rx="6" ry="6" fill="${color}"/>
        <text style="
          font-size: 14px;
          font-weight: normal;
          fill: #9E9E9E;
        " x="15" y="3.5">${frameworks[i][0]} ${parseFloat(100*frameworks[i][1]/activity).toFixed(2)}%</text>
      </g>
    `;
  }
  gradient += `${frameworksList.length>5?`
  <stop offset="${(parseFloat(100*(activity-frameworks.slice(5, frameworks.length).reduce((a,b)=>a+b[1],0))/activity)).toFixed(2)}%" style="stop-color:#404040;stop-opacity:1" />
  `:""}</linearGradient>`;
  frameworksList += `
    ${
      frameworksList.length>5?`
        <g transform="translate(10, 65)">
          <ellipse rx="6" ry="6" fill="#404040"/>
          <text style="
            font-size: 14px;
            font-weight: normal;
            fill: #9E9E9E;
          " x="15" y="3.5">Other ${parseFloat(100*frameworks.slice(5, frameworks.length).reduce((a,b)=>a+b[1],0)/activity).toFixed(2)}%</text>
        </g>
      `:""
    }</g></g>
  `;
  let box = basicEmbed("Most Used Frameworks",`
    <defs>
      ${gradient}
    </defs>
    <g transform="translate(0, 20)">
      <rect style="width: calc(100% - 60px);" height="10" fill="url(#grad1)" rx="5" />
      ${
        frameworks.length?frameworksList:`
        <g transform="translate(0, 28)">
          <text class="list-item">No activity yet...</text>
        </g>`
      }
    </g>
  `, width,style);
  return box
}

