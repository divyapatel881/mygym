  document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.toggle-button');
    const navbarLinks = document.querySelector('.navbar-links');
  
    toggleButton.addEventListener('click', function() {
      navbarLinks.classList.toggle('active');
    });
  });


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
          ['Fitness Class', '9:00 AM - 12:00 AM', ' 4:00 AM - 6:00 AM', 'Divya Patel'],
          ['Muscle Training', '9:00 AM - 12:00 AM', ' 4:00 AM - 6:00 AM', 'Aum Patel'],
          ['Body Building', '9:00 AM - 12:00 AM', ' 4:00 AM - 6:00 AM', 'Devansh Brambhatt'],
          ['Yoga Training', '9:00 AM - 12:00 AM', ' 4:00 AM - 6:00 AM', 'Dhairya Patel'],
          ['Advance Training', '9:00 AM - 12:00 AM', ' 4:00 AM - 6:00 AM', 'Dhairya Patel']
        ],
        Tuesday: [
          ['Body Building', '9:00 AM - 12:00 AM', ' 4:00 AM - 6:00 AM', 'Devansh Brambhatt'],
          ['Yoga Training', '9:00 AM - 12:00 AM', ' 4:00 AM - 6:00 AM', 'Dhairya Patel'],
          ['Fitness Class', '9:00 AM - 12:00 AM', ' 4:00 AM - 6:00 AM', 'Divya Patel'],
          ['Muscle Training', '9:00 AM - 12:00 AM', ' 4:00 AM - 6:00 AM', 'Aum Patel'],
          ['Advance Training', '9:00 AM - 12:00 AM', ' 4:00 AM - 6:00 AM', 'Dhairya Patel']
        ],
        Wednesday: [
          ['Yoga Training', '9:00 AM - 12:00 AM', ' 4:00 AM - 6:00 AM', 'Dhairya Patel'],
          ['Fitness Class', '9:00 AM - 12:00 AM', ' 4:00 AM - 6:00 AM', 'Divya Patel'],
          ['Muscle Training', '9:00 AM - 12:00 AM', ' 4:00 AM - 6:00 AM', 'Aum Patel'],
          ['Body Building', '9:00 AM - 12:00 AM', ' 4:00 AM - 6:00 AM', 'Devansh Brambhatt'],
          ['Advance Training', '9:00 AM - 12:00 AM', ' 4:00 AM - 6:00 AM', 'Dhairya Patel']
        ],
        Thursday: [
          ['Muscle Training', '9:00 AM - 12:00 AM', ' 4:00 AM - 6:00 AM', 'Aum Patel'],
          ['Body Building', '9:00 AM - 12:00 AM', ' 4:00 AM - 6:00 AM', 'Devansh Brambhatt'],
          ['Fitness Class', '9:00 AM - 12:00 AM', ' 4:00 AM - 6:00 AM', 'Divya Patel'],
          ['Yoga Training', '9:00 AM - 12:00 AM', ' 4:00 AM - 6:00 AM', 'Dhairya Patel'],
          ['Advance Training', '9:00 AM - 12:00 AM', ' 4:00 AM - 6:00 AM', 'Dhairya Patel']
        ],
        Friday: [
          ['Yoga Training', '9:00 AM - 12:00 AM', ' 4:00 AM - 6:00 AM', 'Dhairya Patel'],
          ['Fitness Class', '9:00 AM - 12:00 AM', ' 4:00 AM - 6:00 AM', 'Divya Patel'],
          ['Muscle Training', '9:00 AM - 12:00 AM', ' 4:00 AM - 6:00 AM', 'Aum Patel'],
          ['Body Building', '9:00 AM - 12:00 AM', ' 4:00 AM - 6:00 AM', 'Devansh Brambhatt'],
          ['Advance Training', '9:00 AM - 12:00 AM', ' 4:00 AM - 6:00 AM', 'Dhairya Patel']
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
  