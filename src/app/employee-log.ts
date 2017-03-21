import { AwayReason } from './away-reason';

export class EmployeeLog 
{
  id: number;
  employee_id: number;
  date: string;
  start: string;
  end: string;
  away_hours: number;
  away_reason: AwayReason;
  working_hours: number;
}
