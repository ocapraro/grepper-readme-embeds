import express from "express";
import { getId } from "../grepperHandler.js";

export const id = express.Router();

/**
 * GET user id.
 *
 * @return user id | empty.
 */
 id.get("/", async (req, res) => {
  let username = req.query.username;
  let id = await getId(username);
  id=!isNaN(id)?id:"User Not Found";
  let body = `
  <style>
  body {
    background: linear-gradient(180deg, #37404B 0%, #495665 100%);
    display:flex;
    flex-direction: column;
    height: 100vh;
    align-items: center;
    padding:0;
    margin:0;
    font-family: 'Roboto';
  }

  input {
    width: 100%;
    height: 100%;
    font-size: 32px;
    border: none;
    background: none;
    outline: none !important;
    color: #FFF;
    padding-left: 12px;
  }

  .search-bar {
    width: 526px;
    height: 63px;
    background: rgba(0, 0, 0, 0.08);
    border: 2px solid #FFFFFF;
    cursor: pointer;
    margin-top: 20px;
  }
  .title {
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 38px;
    color: #FFF;
  }
  .content {
    text-align: center;
    margin-top: calc(50vh - 150px);
  }

  .id {
    color: #FFF;
    font-size: 32px;
    width:100%;
    height:100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .id:hover,.button:hover {
    background: rgba(0, 0, 0, 0.08);
  }

  .button {
    width:160px;
    height:60px;
    margin-top: 20px;
    background: none;
    border: 1px solid white;
    border-radius: 50px;
    color: #fff;
    font-size: 24px;
    font-weight: normal;
    font-family: roboto;
    cursor: pointer;
  }

  ::placeholder {
    color:#A7A7A7;
  }
  </style>
  <script>
    function copyId(id) {
      navigator.clipboard.writeText(id);
      setTimeout(function(){
        alert("ID Copied to Clipboard!");
      }, 300);
    }
  </script>
  <div class="content">
    <div class="title">Get your Grepper ID</div>
    <form action="">
    <div class="search-bar">${username?`<div class="id" onclick="copyId(${id})">${id}</div>`:`<input type="text" name="username" placeholder="Username" onSubmit="">`}</div>
    <button class="button">${username?"Back":"Submit"}</button>
    </form>
  </div>
  `;
  res.send(body);
});


