import React, { useState } from "react";
// import Scrollspy from "react-scrollspy";
import ScrollChangeTab from "./ScrollChangeTab";
import "./search-type.css";
function SearchType(props) {
  return (
    <div class="special-box-con">
      <ScrollChangeTab
        navIds={["page-a", "page-b", "page-c", "page-d"]}
        activeClassName="active-nav"
        isStartParent={false}
        className="nav-list"
        componentTag="ul"
      >
        <li>
          <div data-socrll-id="page-a">
            <a class="nav-scroll">a</a>
          </div>
        </li>
        <li>
          <div data-socrll-id="page-b">
            <a class="nav-scroll">b</a>
          </div>
        </li>
        <li>
          <div data-socrll-id="page-c">
            <a class="nav-scroll">c</a>
          </div>
        </li>
        <li>
          <div data-socrll-id="page-d">
            <a class="nav-scroll">d</a>
          </div>
        </li>
      </ScrollChangeTab>
      <div class="container">
        <div id="page-a">a</div>
        <div id="page-b">b</div>
        <div id="page-c">c</div>
        <div id="page-d">d</div>
      </div>
    </div>
  );
}

export default SearchType;
