export const delay = 1000
export const gmt = -3

export interface ISchedule {
  cron?: string
  from?: number
  to?: number
  value: string
  color: string
  backgroundColor?: string
  icon?: string
}

export const schedules: ISchedule[] = [
  {cron: '* 30-59 10 * * *', value: 'DEEP', color: 'cyan'},
  {cron: '* * 11 * * *', value: 'DEEP', color: 'cyan'},
  {cron: '* 0-30 12 * * *', value: 'DEEP', color: 'cyan'},
  {cron: '* * 15-17 * * *', value: 'DEEP', color: 'green'},
  {cron: '* * * * * *', value: 'SHALLOW', color: 'black', backgroundColor: 'gray', icon: 'none'},
  {cron: '* * * * * *', value: 'SHALLOW', color: 'black', backgroundColor: 'gray'},
]
// {from: 0, to: 24, value: 'SHALLOW', color: 'red'}
