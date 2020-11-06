import { Component, Inject, OnInit } from "@angular/core";
import { MatIconRegistry } from "@angular/material/icon";
import {
  faArrowLeft,
  faSquare,
  faArrowRight
} from "@fortawesome/free-solid-svg-icons";
import moment = require("moment");
@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  name = "Angular";
  faArrowLeft = faArrowLeft;
  faArrowRight = faArrowRight;
  faSquare = faSquare;
  datelist = [];
  profile = [
    {
      name: "Sarah Symons",
      check: "AE+C ?",
      note: "Add note",
      calendar: ["HI", "A", "HI", "A", "UA", "A", "B", "HI", "UA", "A"]
    },
    {
      name: "Jain Symons",
      check: "AE+C ?",
      note: "Edit note",
      calendar: ["HI", "A", "HI", "A", "UA", "V", "B", "HI", "UA", "A"]
    }
  ];
  ngOnInit() {
    //let currentDate = new Date().getDate();
    for (let i = 0; i < 10; i++) {
      let dateObj: any = {};
      dateObj.date = moment()
        .add(i, "days")
        .format("DD");
      dateObj.month = moment()
        .add(i, "days")
        .format("MMM");
      dateObj.day = moment()
        .add(i, "days")
        .format("dddd")
        .substr(0, 3);
      this.datelist.push(dateObj);
    }
  }
  onsearch(e) {
    this.profile = Object.assign([], this.profile).filter(
      item => item.name.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1
    );
  }
  handleStatus(i, status: any) {
    // alert(i.toString() + status.toString());

    let copyObj = Object.assign([], this.profile);
    copyObj[i].calendar[i] = status == "UA" ? "A" : "UA";
    this.profile = copyObj;
  }
}
