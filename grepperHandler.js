import fetch from "node-fetch";

export const getActivity = async (id) => {
  let date = new Date().toISOString().split('T')[0];
  let activity;
  await fetch("https://www.codegrepper.com/api/get_user_daily_coding_activity.php?day="+date+"&user_id="+id, {
    "headers": {
      "accept": 'application/json',
    },
    "method": "GET"
  })
  .then((res) => res.json())
  .then((data) => {
    activity = data.a;
  }).catch((err) => console.log(err));
  return activity
}

export const getExpertise = async (id, type="s") => {
  let expertise;
  await fetch("https://www.codegrepper.com/api/get_user_activity_stats.php?user_id="+id, {
    "headers": {
      "accept": 'application/json',
    },
    "method": "GET"
  })
  .then((res) => res.json())
  .then((data) => {
    expertise = data[type];
  }).catch((err) => console.log(err));
  return expertise
}

export const getId = async (username) => {
  let id;
  await fetch("https://www.codegrepper.com/profile/"+username, {
    "headers": {
      "accept": 'application/json',
    },
    "method": "GET"
  })
  .then((res) => res.text())
  .then((res) => res.match(/(user_id=).*[0-9]/gm))
  .then((res) => {
    id = res[res.length-1].slice(8,res[res.length-1].length);
  })
  .catch((err) => console.log(err));
  return id
}

