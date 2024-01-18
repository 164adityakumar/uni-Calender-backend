# uni-Calender-backend

Daily calendar is one of the major requirement for our institute to get to know the activities happening in the institute at one place. This calendar will have details based on different category like academic, sports, club activities, placement etc. The student should have an option to view on single day, week or
monthly calendar and also to view category wise.

- [x] The technologies to be used are nodejs and mongodb
- [x] The model schema for the above problem statement has to be defined.

### Testing the API's
- For sending the data as per schema use your own unique userId in the request body , this userId will be used to GET/DELETE the event from the database.
- No need to add a link it will be automatically generated

### Following details shall be included in the event model schema:

- [x] eventName
- [x] date
- [x] time
- [x] organisingDept
- [x] category: academic/club/sports/placement etc.
- [x] type: online/offline/hybrid
- [x] venue
- [x] meetlink
- [x] description
- [x] studentCoordinatorInfo
- [x] facultyCoordinatorInfo
- [x] socialMediaLinks 
- [x] userId


### Functionalities
- [x] Get event details by user (filter the events by user) 
- [x] Get event details by month (based on date data has to be filtered for montly view) 
- [x] Get event details by date (day view)
- [x] Get event details by week (week view) 
- [x] Get event details by category 
- [x] get event by type (online/offline)
- [x] Delete event by user


### API Endpoints
- [x] GET /events/ - eventController.getAllEvents
- [x] GET /events/:userId - eventController.getEventByUser
- [x] GET /events/month/:month - eventController.getEventByMonth
- [x] GET /events/date/:date - eventController.getEventByDate
- [x] GET /events/week/:week - eventController.getEventByWeek
- [x] GET /events/category/:category - eventController.getEventByCategory
- [x] GET /events/type/:type - eventController.getEventByType
- [x] POST /events/ - eventController.createEvent
- [x] PUT /events/:eventId - eventController.updateEvent
- [x] DELETE /events/:userId/:eventId - eventController.deleteEventByUser


### Additionaly added PM2 for process management 

