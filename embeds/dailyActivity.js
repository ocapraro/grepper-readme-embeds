import { basicEmbed } from "./embedTemplates.js";

export const activityBox = (name,activity,width) => {
  let activityList = '<g transform="translate(0, 30)">';
  for (let i = 0; i < activity.length && i < 5; i++) {
    let date = new Date(activity[i].created_at+" GMT");
    let maxDigits = Math.round((width-400)/(20/3));
    activityList += `
      <g transform="translate(0, ${i*30})">
        <text class="list-item">${activity[i].is_my_answer?"Added code answer for":"Viewed code answers for"} "${activity[i].answer_title.length>maxDigits?activity[i].answer_title.slice(0,maxDigits-3)+"\"...":activity[i].answer_title+"\""}</text>
        <text x="${width-50}" text-anchor="end" class="list-item">${(new Date().getHours() - date.getHours())*60+(new Date().getMinutes() - date.getMinutes())} minutes ago</text>
        ${i<4?`<line x1 = "0" y1 = "9" x2 = "${width-50}" y2 = "9" stroke = "#eee" stroke-width = "1"/>`:''}
      </g>
    `;
  }
  activityList += "</g>"
  let box = basicEmbed(`${name}'s Daily Grepper Activity`,`${
    activity.length?activityList:`
    <g transform="translate(0, 28)">
      <text class="list-item">No activity yet...</text>
    </g>`
  }`, width);
  return box
}

