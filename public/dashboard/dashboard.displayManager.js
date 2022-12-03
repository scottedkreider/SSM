"use strict";

import {
    displayDashBoardDiv
    } from "./dashboard.Interface.js";

import {
    attachEventListeners
    } from "./dashboard.eventListeners.js";

const dashboardDiv = document.getElementById("dashboardDiv");

displayDashBoardDiv(dashboardDiv);
attachEventListeners();



