# Task manager app
http://eugenere95.github.io/awesome_todo_list

## Technologies
React, Redux, React-Router, Animated Route transitions, SCSS, LocaleStorage

## Functionality

1. Add task
 - Validation: task name is required, each task should be unique by its within one day (unique name/date pair)
 - There are 4 types of deadline to be set automatically: actual date, no deadline, today, expired. 

2. Task manipulation:
  - Complete
  - Delete
  - Add additional info (description/priority) to specific task or edit it

3. Tasks scoreboard - the amount of all/active/today's/done tasks

4. All tasks store in redux store as well as in localStorage, so user has ability to save all tasks after turning off the app

5. Tasks distribution between routes