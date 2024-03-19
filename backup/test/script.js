document.addEventListener('DOMContentLoaded', function () {
    const weekdayBtns = document.querySelectorAll('.weekday-btn');
    const scheduleTable = document.querySelector('.schedule-table');
  
    weekdayBtns.forEach(btn => {
      btn.addEventListener('click', function () {
        const day = this.dataset.day;
        updateSchedule(day);
      });
    });
  
    function updateSchedule(day) {
      // You can fetch the schedule for the selected day from a database or hardcoded data
      // For demonstration purposes, let's assume we have hardcoded data
      const scheduleData = {
        Monday: [
          ['9:00 AM', 'Yoga', 'Pilates', 'Zumba'],
          ['10:00 AM', 'Cardio', 'Strength Training', ''],
          ['11:00 AM', 'HIIT', 'Cycling', ''],
          ['12:00 PM', '', '', ''],
          ['1:00 PM', '', '', '']
        ],
        Tuesday: [
          ['9:00 AM', 'Pilates', 'Zumba', 'Yoga'],
          ['10:00 AM', 'Strength Training', 'Cardio', ''],
          ['11:00 AM', 'Cycling', 'HIIT', ''],
          ['12:00 PM', '', '', ''],
          ['1:00 PM', '', '', '']
        ],
        Wednesday: [
          ['9:00 AM', 'Zumba', 'Yoga', 'Pilates'],
          ['10:00 AM', 'Cardio', 'Strength Training', ''],
          ['11:00 AM', 'HIIT', 'Cycling', ''],
          ['12:00 PM', '', '', ''],
          ['1:00 PM', '', '', '']
        ],
        Thursday: [
          ['9:00 AM', 'Yoga', 'Pilates', 'Zumba'],
          ['10:00 AM', 'Cardio', 'Strength Training', ''],
          ['11:00 AM', 'HIIT', 'Cycling', ''],
          ['12:00 PM', '', '', ''],
          ['1:00 PM', '', '', '']
        ],
        Friday: [
          ['9:00 AM', 'Pilates', 'Zumba', 'Yoga'],
          ['10:00 AM', 'Strength Training', 'Cardio', ''],
          ['11:00 AM', 'Cycling', 'HIIT', ''],
          ['12:00 PM', '', '', ''],
          ['1:00 PM', '', '', '']
        ]
      };
  
      // Clear existing schedule
      scheduleTable.innerHTML = '';
  
      // Populate schedule for selected day
      const schedule = scheduleData[day];
      schedule.forEach(rowData => {
        const row = document.createElement('tr');
        rowData.forEach(cellData => {
          const cell = document.createElement('td');
          cell.textContent = cellData;
          row.appendChild(cell);
        });
        scheduleTable.appendChild(row);
      });
    }
  
    // Initially display schedule for Monday
    updateSchedule('Monday');
  });
  