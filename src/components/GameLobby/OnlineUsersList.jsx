import React, { Component } from "react";

export default class OnlineUsersList extends Component {
  render() {
    return (
      <aside class="kanan-side">
        <div class="user-head">
          <a href="##" class="chat-tools btn-warning">
            <i class="fa fa-cog"></i>{" "}
          </a>
          <a href="##" class="chat-tools  btn-warning">
            <i class="fa fa-key"></i>{" "}
          </a>
        </div>
        <div class="invite-row">
          <h4 class="pull-left">Online Users</h4>
          <a
            href="##"
            class="btn btn-danger pull-right"
            data-original-title=""
            title=""
          >
            + Invite
          </a>
        </div>
        <ul class="chat-available-user">
          <li>
            <a href="#chat-room.html">
              <i class="fa fa-circle text-success"></i>
              Jend Hordejan
              <span class="text-muted">3h:22m</span>
            </a>
          </li>
          <li>
            <a href="#chat-room.html">
              <i class="fa fa-circle text-success"></i>
              Jan van Hest
              <span class="text-muted">1h:2m</span>
            </a>
          </li>
          <li>
            <a href="#chat-room.html">
              <i class="fa fa-circle text-success"></i>
              Thierry Dekelver
              <span class="text-muted">2h:32m</span>
            </a>
          </li>
          <li>
            <a href="#chat-room.html">
              <i class="fa fa-circle text-danger"></i>
              Ramprasad Rengaramanujam
              <span class="text-muted">3h:22m</span>
            </a>
          </li>
          <li>
            <a href="#chat-room.html">
              <i class="fa fa-circle text-warning"></i>
              Dilip Singh
              <span class="text-muted">1h:12m</span>
            </a>
          </li>
          <li>
            <a href="#chat-room.html">
              <i class="fa fa-circle text-muted"></i>
              Alexandra Marques
              {/* <!--<span class="text-muted">3h:22m</span>--> */}
            </a>
          </li>
          <li>
            <a href="#chat-room.html">
              <i class="fa fa-circle text-muted"></i>
              Brian Nieuwenhuijzen
              {/* <!--<span class="text-muted">3h:22m</span>--> */}
            </a>
          </li>
          <li>
            <a href="#chat-room.html">
              <i class="fa fa-circle text-warning"></i>
              Nicole Kuong
              <span class="text-muted">1h:12m</span>
            </a>
          </li>
        </ul>
      </aside>
    );
  }
}
