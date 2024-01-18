# uni-Calender-backend

Daily calendar is one of the major requirement for our institute to get to know the activities happening in the institute at one place. This calendar will have details based on different category like academic, sports, club activities, placement etc. The student should have an option to view on single day, week or
monthly calendar and also to view category wise.

[+] The technologies to be used are nodejs and mongodb
[+] The model schema for the above problem statement has to be defined.

### Following details shall be included in the event model schema:

[+] eventName
[+] date
[+] time
[+] organisingDept
[+] category: academic/club/sports/placement etc.
[+] type: online/offline/hybrid
[+] venue
[+] meetlink
[+] description
[+] studentCoordinatorInfo
[+] facultyCoordinatorInfo
[+] socialMediaLinks 
[+] userId


### Functionalities
[+] Get event details by user (filter the events by user) 
[+] Get event details by month (based on date data has to be filtered for montly view) 
[+] Get event details by date (day view)
[+] Get event details by week (week view) 
[+] Get event details by category 
[+] get event by type (online/offline)
[+] Delete event by user


### API Endpoints
[+] GET /events/ - eventController.getAllEvents
[+] GET /events/:userId - eventController.getEventByUser
[+] GET /events/month/:month - eventController.getEventByMonth
[+] GET /events/date/:date - eventController.getEventByDate
[+] GET /events/week/:week - eventController.getEventByWeek
[+] GET /events/category/:category - eventController.getEventByCategory
[+] GET /events/type/:type - eventController.getEventByType
[+] POST /events/ - eventController.createEvent
[+] PUT /events/:eventId - eventController.updateEvent
[+] DELETE /events/:userId/:eventId - eventController.deleteEventByUser


### Additionaly added PM2 for process management 

