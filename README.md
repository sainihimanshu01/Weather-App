🌤️ Weather App

A sleek and responsive Weather Application built using HTML, CSS, and JavaScript that displays real-time weather details like temperature, humidity, wind speed, sunrise/sunset time, and more using the OpenWeatherMap API.

🚀 Features

🔍 Search weather by city name

🌡️ Real-time temperature & feels-like info

🌥️ Weather conditions with icons

💨 Wind speed & wind direction (N, NE, E, SE, etc.)

☁️ Cloud percentage

🌅 Sunrise & 🌇 Sunset (AM/PM format)

📅 Local date and time based on city timezone

📱 Fully responsive UI

🎨 Clean & modern design

🛠️ Tech Stack
Technology	Purpose
HTML5	Structure
CSS3	Styling & Layout
JavaScript (ES6)	Logic & API handling
OpenWeatherMap API	Weather data


📸 Screenshot
![image url](https://github.com/sainihimanshu01/Weather-App/blob/bf2b963c6ba14303611b9278a0b2cdafc8842a1c/Screenshot-Weather.png)



🗂️ Project Structure
📁 Weather-App
│── index.html
│── style.css
│── script.js
└── README.md

🔧 Installation & Setup

Clone the repository

git clone https://github.com/your-username/weather-app.git


🔑 API Setup

Go to https://openweathermap.org/api

Create a free account

Get your API key

Replace it inside script.js

const API_KEY = "YOUR_API_KEY_HERE";

📌 Example Output
{
  "temp": 28.5,
  "humidity": 70,
  "wind_speed": 3.5,
  "description": "clear sky"
}

🧩 Future Enhancements

🔄 Add unit switching (°C ⇆ °F)

🗺️ Add search by current GPS location

📈 Add 7-day forecast

🌗 Add dark/light theme
