// 


function rh_create_normalized_date() {
    let current_date = new Date()

    let current_month = current_date.toLocaleString('default', { month: 'long'})

    let current_day = current_date.toLocaleDateString('en-US', { day:"numeric"})
    let current_day_normalized = ''
    if (current_day.length == 1) {current_day_normalized = '0' + current_day} else {current_day_normalized = current_day}

    let current_hour = current_date.getHours()
    let current_hour_normalized = ''
    if (current_hour.length == 1) {current_hour_normalized = '0' + current_hour} else {current_hour_normalized = current_hour}

    let minuto_actual_normalized = ''
    let current_minute = current_date.getMinutes()
    if (current_minute.length == 1) {current_minute_normalized = '0' + current_minute} else {current_minute_normalized = current_minute}

    let normalized_date = '_' + current_day_normalized + '_' + current_month + '_' + current_hour_normalized + '_' + current_minute_normalized

    return normalized_date
  }

  exports.rh_create_normalized_date() = rh_create_normalized_date()