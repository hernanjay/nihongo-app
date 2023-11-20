import React, { useState } from 'react';
import Calendar from 'moedim';

const CalendarComponent = () => {
  const [value, setValue] = useState(new Date())

  return <Calendar value={value} onChange={(d) => setValue(d)} />;
};

export default CalendarComponent;