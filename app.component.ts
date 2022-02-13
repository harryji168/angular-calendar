import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { extend, isNullOrUndefined } from '@syncfusion/ej2-base';
import { resourceConferenceData } from './data';
import {
  PopupOpenEventArgs, ScheduleComponent, MonthService, DayService, WeekService, WorkWeekService, GroupModel,
  EventSettingsModel, AgendaService, MonthAgendaService
} from '@syncfusion/ej2-angular-schedule';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService, MonthAgendaService],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent {
  @ViewChild('scheduleObj') scheduleObj: ScheduleComponent;

  title = 'editor-customization';
  public resourceDataSource: Object[] = [
    { Text: 'Margaret', Id: 1, Color: '#1aaa55' },
    { Text: 'Robert', Id: 2, Color: '#357cd2' },
    { Text: 'Laura', Id: 3, Color: '#7fa900' }
  ];
  public group: GroupModel = { allowGroupEdit: true, resources: ['Conferences'] };
  public allowMultiple: Boolean = true;
  public fields: Object = { text: 'Text', value: 'Id' };
  public data: Object[] = <Object[]>extend([], resourceConferenceData, null, true);
  public eventData: EventSettingsModel = { dataSource: this.data };
  public setDate: Date = new Date(2018, 5, 5);
  public dateParser(data: string) {
    return new Date(data);
  }
  public check(data: any) {
    if (!isNullOrUndefined(data.groupIndex)) {
      return this.scheduleObj.getResourcesByIndex(data.groupIndex).resourceData.Id;
    } else {
      return data.ConferenceId;
    }
  }
}
