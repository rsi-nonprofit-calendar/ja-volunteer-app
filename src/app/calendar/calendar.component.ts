
import {
  Component,
  ChangeDetectionStrategy,
  ViewChild,
  TemplateRef,
} from "@angular/core";
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours
} from "date-fns";
import { Subject } from "rxjs";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarEventTitleFormatter,
  CalendarView
} from "angular-calendar";
import { CustomEventTitleFormatter } from "./custom-event-title-formatter.provider";
import { HttpClient } from '@angular/common/http';
// import { CalendarService } from './../calendar.service';
import { JoinEventService } from './../join-event/join-event.service';


const colors: any = {
  red: {
    primary: "#ad2121",
    secondary: "#FAE3E3"
  },
  blue: {
    primary: "#1e90ff",
    secondary: "#D1E8FF"
  },
  yellow: {
    primary: "#e3bc08",
    secondary: "#FDF1BA"
  },
  example: {
    primary: "#de795b",
    secondary: "#17a2b8"
  },
  default: {
    primary: "#17a2b8",
    secondary: "#de795b"
  }
};

@Component({
  selector: "app-calendar",
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ["calendar.component.css"],
  templateUrl: "calendar.component.html",
  providers: [
    {
      provide: CalendarEventTitleFormatter,
      useClass: CustomEventTitleFormatter
    }
  ]
})
export class CalendarComponent {
  @ViewChild("modalContent", { static: true }) modalContent: TemplateRef<any>;
  private url = "http://jsonplaceholder.typicode.com/posts";

  view: CalendarView = CalendarView.Month;

  CalendarView = CalendarView;

  viewDate: Date = new Date();



  modalData: {
    action: string;
    event: CalendarEvent;
  };

  actions: CalendarEventAction[] = [
    {
      label: '<i class="fa fa-fw fa-pencil"></i>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.handleEvent("Edited", event);
      }
    },
    {
      label: '<i class="fa fa-fw fa-times"></i>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.events = this.events.filter(iEvent => iEvent !== event);
        this.handleEvent("Deleted", event);
      }
    },
    {
      label: '<i class="fa fa-fw fa-times"></i>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.handleEvent("Edited", event);
      }
    }
  ];

  refresh: Subject<any> = new Subject();

  onSubmit(f) {
    let post = { event: f };
    this.http.post<any[]>(this.url, post).subscribe(response => {
      this.events.push();
    });
  };



  events: CalendarEvent[] = [


    //Example Events
    {
      start: subDays(startOfDay(new Date()), 1),
      end: addDays(new Date(), 1),
      title: "Booyah",
      color: colors.blue,
      actions: this.actions,
      allDay: false,
    },
    {
      start: subDays(startOfDay(new Date()), 1),
      end: addDays(new Date(), 1),
      title: "A 3 day event",
      color: colors.red,
      actions: this.actions,
      allDay: true,
      resizable: {
        beforeStart: true,
        afterEnd: true
      },
      draggable: true
    },
    {
      start: startOfDay(new Date()),
      title: "An event with no end date",
      color: colors.yellow,
      actions: this.actions
    },
    {
      start: subDays(endOfMonth(new Date()), 3),
      end: addDays(endOfMonth(new Date()), 3),
      title: "A long event that spans 2 months",
      color: colors.blue,
      allDay: true
    },
    {
      title: "Watermelon Mountain Ranch Adoptathon",
      start: new Date(),
      end: addHours(startOfDay(new Date()), 2),
      color: colors.example
    },
    {
      title: "RSI Blood Donation Event",
      start: new Date(),
      end: addHours(startOfDay(new Date()), 4),
      color: colors.example
    }
  ];

  activeDayIsOpen: boolean = false;

  constructor(private modal: NgbModal, private http: HttpClient, private service: JoinEventService) { }

  getEvents() {
    this.service.getDetails().subscribe(response => {
      this.events = response;
    });
  }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
      this.viewDate = date;
    }
  }

  eventTimesChanged({
    event,
    newStart,
    newEnd
  }: CalendarEventTimesChangedEvent): void {
    this.events = this.events.map(iEvent => {
      if (iEvent === event) {
        return {
          ...event,
          start: newStart,
          end: newEnd
        };
      }
      return iEvent;
    });
    this.handleEvent("Dropped or resized", event);
  }

  handleEvent(action: string, event: CalendarEvent): void {
    this.modalData = { event, action };
    this.modal.open(this.modalContent, { size: "lg" });
  }

  addEvent(): void {
    this.events = [
      ...this.events,
      {
        title: "New event",
        start: startOfDay(new Date()),
        end: endOfDay(new Date()),
        color: colors.default,
        draggable: true,
        resizable: {
          beforeStart: true,
          afterEnd: true
        }
      }
    ];
  }

  deleteEvent(eventToDelete: CalendarEvent) {
    this.events = this.events.filter(event => event !== eventToDelete);
  }

  setView(view: CalendarView) {
    this.view = view;
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }

  // onSubmit(f) {
  //   let CalendarEvent = { CalendarEvent: f };
  //   this.http.post(this.url, CalendarEvent).subscribe(response => {
  //     this.events.push(response);
  //     this.eventForm.resetForm();
  //   });
  // };
}
