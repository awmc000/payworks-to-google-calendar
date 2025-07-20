# Shift data could potentially be fetched directly from API.

Here's what it looks like when I found it.

```
[alex@Alex ~]$ python
Python 3.13.5 (main, Jun 21 2025, 09:35:00) [GCC 15.1.1 20250425] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>> import json
>>> import pprint
>>> shifts = json.loads('[{"id":135581,"scheduleId":215,"scheduleName":"Port Alberni","employeeId":1820,"employeeName":"Mccolm, Alexander","start\
Time":"2025-07-09 16:00:00","endTime":"2025-07-09 21:00:00","notes":"","dayNotes":"","notesViewState":"NoNotification","positionId":61,"positionN\
ame":"Port Alberni Customer Service","departmentName":"Port Alberni Hourly","numberOfBreaks":0,"endTimeDisplayOptionId":1,"etmScheduleId":11,"etm\
ShiftId":106514,"isTimesheetLinked":true},{"id":135590,"scheduleId":215,"scheduleName":"Port Alberni","employeeId":1820,"employeeName":"Mccolm, A\
lexander","startTime":"2025-07-11 14:00:00","endTime":"2025-07-11 19:00:00","notes":"","dayNotes":"","notesViewState":"NoNotification","positionI\
d":61,"positionName":"Port Alberni Customer Service","departmentName":"Port Alberni Hourly","numberOfBreaks":0,"endTimeDisplayOptionId":1,"etmSch\
eduleId":11,"etmShiftId":106983,"isTimesheetLinked":true},{"id":135591,"scheduleId":215,"scheduleName":"Port Alberni","employeeId":1820,"employee\
Name":"Mccolm, Alexander","startTime":"2025-07-12 14:00:00","endTime":"2025-07-12 19:00:00","notes":"","dayNotes":"","notesViewState":"NoNotifica\
tion","positionId":61,"positionName":"Port Alberni Customer Service","departmentName":"Port Alberni Hourly","numberOfBreaks":0,"endTimeDisplayOpt\
ionId":1,"etmScheduleId":11,"etmShiftId":106984,"isTimesheetLinked":true},{"id":135619,"scheduleId":215,"scheduleName":"Port Alberni","employeeId\
":1820,"employeeName":"Mccolm, Alexander","startTime":"2025-07-18 16:00:00","endTime":"2025-07-18 21:00:00","notes":"","dayNotes":"","notesViewSt\
ate":"NoNotification","positionId":61,"positionName":"Port Alberni Customer Service","departmentName":"Port Alberni Hourly","numberOfBreaks":0,"e\
ndTimeDisplayOptionId":1,"etmScheduleId":11,"etmShiftId":105243,"isTimesheetLinked":true},{"id":135623,"scheduleId":215,"scheduleName":"Port Albe\
rni","employeeId":1820,"employeeName":"Mccolm, Alexander","startTime":"2025-07-19 09:00:00","endTime":"2025-07-19 17:00:00","notes":"","dayNotes"\
:"","notesViewState":"NoNotification","positionId":61,"positionName":"Port Alberni Customer Service","departmentName":"Port Alberni Hourly","numb\
erOfBreaks":0,"endTimeDisplayOptionId":1,"etmScheduleId":11,"etmShiftId":107003,"isTimesheetLinked":true},{"id":135627,"scheduleId":215,"schedule\
Name":"Port Alberni","employeeId":1820,"employeeName":"Mccolm, Alexander","startTime":"2025-07-20 16:00:00","endTime":"2025-07-20 21:00:00","note\
s":"","dayNotes":"","notesViewState":"NoNotification","positionId":61,"positionName":"Port Alberni Customer Service","departmentName":"Port Alber\
ni Hourly","numberOfBreaks":0,"endTimeDisplayOptionId":1,"etmScheduleId":11,"etmShiftId":105291,"isTimesheetLinked":false},{"id":135641,"schedule\
Id":215,"scheduleName":"Port Alberni","employeeId":1820,"employeeName":"Mccolm, Alexander","startTime":"2025-07-24 16:00:00","endTime":"2025-07-2\
4 21:00:00","notes":"","dayNotes":"","notesViewState":"NoNotification","positionId":61,"positionName":"Port Alberni Customer Service","department\
Name":"Port Alberni Hourly","numberOfBreaks":0,"endTimeDisplayOptionId":1,"etmScheduleId":11,"etmShiftId":105277,"isTimesheetLinked":false},{"id"\
:135647,"scheduleId":215,"scheduleName":"Port Alberni","employeeId":1820,"employeeName":"Mccolm, Alexander","startTime":"2025-07-25 09:00:00","en\
dTime":"2025-07-25 13:00:00","notes":"","dayNotes":"","notesViewState":"NoNotification","positionId":61,"positionName":"Port Alberni Customer Ser\
vice","departmentName":"Port Alberni Hourly","numberOfBreaks":0,"endTimeDisplayOptionId":1,"etmScheduleId":11,"etmShiftId":105307,"isTimesheetLin\
ked":false},{"id":135651,"scheduleId":215,"scheduleName":"Port Alberni","employeeId":1820,"employeeName":"Mccolm, Alexander","startTime":"2025-07\
-26 09:00:00","endTime":"2025-07-26 17:00:00","notes":"","dayNotes":"","notesViewState":"NoNotification","positionId":61,"positionName":"Port Alb\
erni Customer Service","departmentName":"Port Alberni Hourly","numberOfBreaks":0,"endTimeDisplayOptionId":1,"etmScheduleId":11,"etmShiftId":10527\
1,"isTimesheetLinked":false},{"id":135652,"scheduleId":215,"scheduleName":"Port Alberni","employeeId":1820,"employeeName":"Mccolm, Alexander","st\
artTime":"2025-07-27 16:00:00","endTime":"2025-07-27 21:00:00","notes":"","dayNotes":"","notesViewState":"NoNotification","positionId":61,"positi\
onName":"Port Alberni Customer Service","departmentName":"Port Alberni Hourly","numberOfBreaks":0,"endTimeDisplayOptionId":1,"etmScheduleId":11,"\
etmShiftId":107035,"isTimesheetLinked":false},{"id":135672,"scheduleId":215,"scheduleName":"Port Alberni","employeeId":1820,"employeeName":"Mccol\
m, Alexander","startTime":"2025-08-01 14:00:00","endTime":"2025-08-01 19:00:00","notes":"","dayNotes":"","notesViewState":"NoNotification","posit\
ionId":61,"positionName":"Port Alberni Customer Service","departmentName":"Port Alberni Hourly","numberOfBreaks":0,"endTimeDisplayOptionId":1,"et\
mScheduleId":11,"etmShiftId":107026,"isTimesheetLinked":false}]')
>>> p = pprint.PrettyPrinter()
>>> p.pprint(shifts)
[{'dayNotes': '',
  'departmentName': 'Port Alberni Hourly',
  'employeeId': 1820,
  'employeeName': 'Mccolm, Alexander',
  'endTime': '2025-07-09 21:00:00',
  'endTimeDisplayOptionId': 1,
  'etmScheduleId': 11,
  'etmShiftId': 106514,
  'id': 135581,
  'isTimesheetLinked': True,
  'notes': '',
  'notesViewState': 'NoNotification',
  'numberOfBreaks': 0,
  'positionId': 61,
  'positionName': 'Port Alberni Customer Service',
  'scheduleId': 215,
  'scheduleName': 'Port Alberni',
  'startTime': '2025-07-09 16:00:00'},
 {'dayNotes': '',
  'departmentName': 'Port Alberni Hourly',
  'employeeId': 1820,
  'employeeName': 'Mccolm, Alexander',
  'endTime': '2025-07-11 19:00:00',
  'endTimeDisplayOptionId': 1,
  'etmScheduleId': 11,
  'etmShiftId': 106983,
  'id': 135590,
  'isTimesheetLinked': True,
  'notes': '',
  'notesViewState': 'NoNotification',
  'numberOfBreaks': 0,
  'positionId': 61,
  'positionName': 'Port Alberni Customer Service',
  'scheduleId': 215,
  'scheduleName': 'Port Alberni',
  'startTime': '2025-07-11 14:00:00'},
 {'dayNotes': '',
  'departmentName': 'Port Alberni Hourly',
  'employeeId': 1820,
  'employeeName': 'Mccolm, Alexander',
  'endTime': '2025-07-12 19:00:00',
  'endTimeDisplayOptionId': 1,
  'etmScheduleId': 11,
  'etmShiftId': 106984,
  'id': 135591,
  'isTimesheetLinked': True,
  'notes': '',
  'notesViewState': 'NoNotification',
  'numberOfBreaks': 0,
  'positionId': 61,
  'positionName': 'Port Alberni Customer Service',
  'scheduleId': 215,
  'scheduleName': 'Port Alberni',
  'startTime': '2025-07-12 14:00:00'},
 {'dayNotes': '',
  'departmentName': 'Port Alberni Hourly',
  'employeeId': 1820,
  'employeeName': 'Mccolm, Alexander',
  'endTime': '2025-07-18 21:00:00',
  'endTimeDisplayOptionId': 1,
  'etmScheduleId': 11,
  'etmShiftId': 105243,
  'id': 135619,
  'isTimesheetLinked': True,
  'notes': '',
  'notesViewState': 'NoNotification',
  'numberOfBreaks': 0,
  'positionId': 61,
  'positionName': 'Port Alberni Customer Service',
  'scheduleId': 215,
  'scheduleName': 'Port Alberni',
  'startTime': '2025-07-18 16:00:00'},
 {'dayNotes': '',
  'departmentName': 'Port Alberni Hourly',
  'employeeId': 1820,
  'employeeName': 'Mccolm, Alexander',
  'endTime': '2025-07-19 17:00:00',
  'endTimeDisplayOptionId': 1,
  'etmScheduleId': 11,
  'etmShiftId': 107003,
  'id': 135623,
  'isTimesheetLinked': True,
  'notes': '',
  'notesViewState': 'NoNotification',
  'numberOfBreaks': 0,
  'positionId': 61,
  'positionName': 'Port Alberni Customer Service',
  'scheduleId': 215,
  'scheduleName': 'Port Alberni',
  'startTime': '2025-07-19 09:00:00'},
 {'dayNotes': '',
  'departmentName': 'Port Alberni Hourly',
  'employeeId': 1820,
  'employeeName': 'Mccolm, Alexander',
  'endTime': '2025-07-20 21:00:00',
  'endTimeDisplayOptionId': 1,
  'etmScheduleId': 11,
  'etmShiftId': 105291,
  'id': 135627,
  'isTimesheetLinked': False,
  'notes': '',
  'notesViewState': 'NoNotification',
  'numberOfBreaks': 0,
  'positionId': 61,
  'positionName': 'Port Alberni Customer Service',
  'scheduleId': 215,
  'scheduleName': 'Port Alberni',
  'startTime': '2025-07-20 16:00:00'},
 {'dayNotes': '',
  'departmentName': 'Port Alberni Hourly',
  'employeeId': 1820,
  'employeeName': 'Mccolm, Alexander',
  'endTime': '2025-07-24 21:00:00',
  'endTimeDisplayOptionId': 1,
  'etmScheduleId': 11,
  'etmShiftId': 105277,
  'id': 135641,
  'isTimesheetLinked': False,
  'notes': '',
  'notesViewState': 'NoNotification',
  'numberOfBreaks': 0,
  'positionId': 61,
  'positionName': 'Port Alberni Customer Service',
  'scheduleId': 215,
  'scheduleName': 'Port Alberni',
  'startTime': '2025-07-24 16:00:00'},
 {'dayNotes': '',
  'departmentName': 'Port Alberni Hourly',
  'employeeId': 1820,
  'employeeName': 'Mccolm, Alexander',
  'endTime': '2025-07-25 13:00:00',
  'endTimeDisplayOptionId': 1,
  'etmScheduleId': 11,
  'etmShiftId': 105307,
  'id': 135647,
  'isTimesheetLinked': False,
  'notes': '',
  'notesViewState': 'NoNotification',
  'numberOfBreaks': 0,
  'positionId': 61,
  'positionName': 'Port Alberni Customer Service',
  'scheduleId': 215,
  'scheduleName': 'Port Alberni',
  'startTime': '2025-07-25 09:00:00'},
 {'dayNotes': '',
  'departmentName': 'Port Alberni Hourly',
  'employeeId': 1820,
  'employeeName': 'Mccolm, Alexander',
  'endTime': '2025-07-26 17:00:00',
  'endTimeDisplayOptionId': 1,
  'etmScheduleId': 11,
  'etmShiftId': 105271,
  'id': 135651,
  'isTimesheetLinked': False,
  'notes': '',
  'notesViewState': 'NoNotification',
  'numberOfBreaks': 0,
  'positionId': 61,
  'positionName': 'Port Alberni Customer Service',
  'scheduleId': 215,
  'scheduleName': 'Port Alberni',
  'startTime': '2025-07-26 09:00:00'},
 {'dayNotes': '',
  'departmentName': 'Port Alberni Hourly',
  'employeeId': 1820,
  'employeeName': 'Mccolm, Alexander',
  'endTime': '2025-07-27 21:00:00',
  'endTimeDisplayOptionId': 1,
  'etmScheduleId': 11,
  'etmShiftId': 107035,
  'id': 135652,
  'isTimesheetLinked': False,
  'notes': '',
  'notesViewState': 'NoNotification',
  'numberOfBreaks': 0,
  'positionId': 61,
  'positionName': 'Port Alberni Customer Service',
  'scheduleId': 215,
  'scheduleName': 'Port Alberni',
  'startTime': '2025-07-27 16:00:00'},
 {'dayNotes': '',
  'departmentName': 'Port Alberni Hourly',
  'employeeId': 1820,
  'employeeName': 'Mccolm, Alexander',
  'endTime': '2025-08-01 19:00:00',
  'endTimeDisplayOptionId': 1,
  'etmScheduleId': 11,
  'etmShiftId': 107026,
  'id': 135672,
  'isTimesheetLinked': False,
  'notes': '',
  'notesViewState': 'NoNotification',
  'numberOfBreaks': 0,
  'positionId': 61,
  'positionName': 'Port Alberni Customer Service',
  'scheduleId': 215,
  'scheduleName': 'Port Alberni',
  'startTime': '2025-08-01 14:00:00'}]
>>> 
[alex@Alex ~]$ 
```

## Example request to API as curl

```
curl 'https://payroll.payworks.ca/pwnextv2api/etm/scheduledshifts?lowerBound=2025-08-01^&upperBound=2025-09-01^&employeeId=1820^&_=1752986790263' \
  -H 'User-Agent: Mozilla/5.0 (X11; Linux x86_64; rv:140.0) Gecko/20100101 Firefox/140.0' \
  -H 'Accept: */*' \
  -H 'Accept-Language: en-CA' \
  -H 'Accept-Encoding: gzip, deflate, br, zstd' \
  -H 'X-NewRelic-ID: VQUGVl5UChABU1VTDgUPV10J' \
  -H 'newrelic: eyJ2IjpbMCwxXSwiZCI6eyJ0eSI6IkJyb3dzZXIiLCJhYyI6IjEzMTc4NzIiLCJhcCI6IjE4MzQ4NjMzMjUiLCJpZCI6IjNlODkzNzI2YTUyZDdiYjYiLCJ0ciI6ImRiMmIxYjEyMTY1NDUxMTZmYjIyODM2NmEyNzRhMjI5IiwidGkiOjE3NTI5ODY4MjA4NjR9fQ==' \
  -H 'traceparent: 00-db2b1b1216545116fb228366a274a229-3e893726a52d7bb6-01' \
  -H 'tracestate: 1317872@nr=0-1-1317872-1834863325-3e893726a52d7bb6----1752986820864' \
  -H 'Content-Type: application/json; charset=utf-8' \
  -H 'X-Requested-With: XMLHttpRequest' \
  -H 'Connection: keep-alive' \
  -H 'Referer: https://payroll.payworks.ca/tom/ess/TimeOffCalendar.aspx?MenuID=348' \
  -H 'Cookie: RequestVerificationTokenApi=CfDJ8AYrOmHI909OiPBfv7a7uXBdCPzTu8J9zRnnHLULrSJw2IkndggN2AOE5Mq6PoxJB9zQyF1CMHCIFd-OFaLsmmWxon6Nbj-ZY-12CJzuB-BcJ3LTwOO9QItwzCtYm0m-FGnAA0liF0W7oCq7kecXu0w; useEmailLogin=true; ASP.NET_SessionId=qsma1izqcieef0oxyy0sq0m0; LoginLanguageID=0; XSRF-REQUEST-TOKEN=CfDJ8Ppou8GwwihCjStJZWgA40Z_SBDRTkhKfxIW2cpL4WXEI_JVvH2TKGXU0TXsVxbngXSM5hNe_Df8q7fwnRvJtaK7humBZ_McVlBHyLCwpGJ47d4hiJIBAuS4-gcxSu8R9ssvOzzp-Pa0kIKsjtVsDr3EzJdBJAD0PyBd2h67zsvTsihM2Frm07i2bEd1VSVX0g; CsrfToken=rQM/rLNriv2YaeIYNCG38WQpsxUXM2D8CoR4M7JTxEeNL9quTXzIGGW3c8gHid2qMnwtrY6V0uiTG7soFIsfJeeqNQTNHJYst76S+x0DVYxo+wlywNXvFtlz4RmChoDC8X6DKibQRxmSTE5Yqr7g01ssHsysDlz5VQ3GQJOp/EVuuHO9mr0S36EpaYNcfa5DNjNqAkVD5UI0faOdSFTqM8GdpVsuLXxvi4ap+XtZlC/8/CG6fo3SSrKC6YnZDYfc2ERQCg3YHSFI0mf1z+aj/LZnECBS0RiemRLl34m84gsdNfD2jO62MAKrFmK9c8TI28CfyC0CcyzU5A74rTPHUA==; UserCacheSessionCookie=E3AD9800%2D854B%2D4EFE%2DB28E%2D30EDEA59EC84; PayworksAuthToken=eyJhbGciOiJSUzI1NiIsImtpZCI6IkUwMTk2NjJDNDk4RTRCNzhFOTI2MEQyNzRENTIxNkE0OEEwMTdFRUQiLCJ4NXQiOiI0QmxtTEVtT1MzanBKZzBuVFZJV3BJb0JmdTAiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJQYXl3b3Jrcy5NaWNyb1NlcnZpY2VzLkpzb25XZWJUb2tlbiIsImV4cCI6MTc1Mjk4Nzk5MiwianRpIjoiMWZiZjI4NzgtYmNiNS00ZmEyLWI3OGItYWZlMTkwMmM1MGM2IiwiYXVkIjpbImh0dHBzOi8vcGF5cm9sbC5wYXl3b3Jrcy5jYS91c2VybWFuYWdlbWVudCIsImh0dHBzOi8vcGF5cm9sbC5wYXl3b3Jrcy5jYS9sYWJvdXJlbGVtZW50cyJdLCJjdXN0b21lck51bWJlciI6IlYwMTQ4NiIsInVzZXJJZCI6MTg3MCwiZXh0Ijp0cnVlLCJpYXQiOjE3NTI5ODY3OTIsIm5iZiI6MTc1Mjk4Njc5Mn0.XBxf1zh2dfi-4NuS4ocei05Gy-hARyp914wEvfPnurYX9GZXH7kHLk3m7W2QiBYgS46wxrRGREaGGOrms0liPhHgPeSGuDC_gPI0MUF75qt-G7LNDy_OB3MjjiZyR32OtF9vg_poXmSs3inf38V6lM47Okygcjpg2Syt8eeHP9ooLOY_2u0UCcdjqJiJp9K9rFeBviyarhxP33Ypmdi5SR_8HczjUTr1iUOSC4gzKwSI6_UqCJCdYwvXJ1Gjp_AG4lMgpY8fDWLgHnLd8uJgMd5rRlnfpcvj6Hm-oi_k_IL4mX0nweAC7-3W5z4nhItLWA6YaCNpuCN-oiDl9QhDo8RDSNHXu5iNyyaVa8LBaXHh44a0fg2oQLLl-EHxBBsICOu0hh576p5_CEfhabi-gX9V1OQQkXAejAp9ZQj5gkJihTXRUy-edgVPj1uVBHDiKBmcMQwArUXSRVzb1NH7PCEI5lj0QHqGlQIlplh2rYcv-ddI-xPDkKqFCgDYREXcQWIyh17bGdakeaA29tvzZViBCFgp7hGe93QrLB2vY4Io64vkBEeOyGeX-oVPW7NMkF8rMCyzoeFs87xfMda53pPwEL4AMz3Za8gg40ldKjJULgzalapVp8XMbauakMASrVkMZwRxQZRGMbrqhNJ36PyBPnkrYYHaqvlR3lJvHoc' \
  -H 'Sec-Fetch-Dest: empty' \
  -H 'Sec-Fetch-Mode: cors' \
  -H 'Sec-Fetch-Site: same-origin' \
  -H 'Priority: u=0'
```
