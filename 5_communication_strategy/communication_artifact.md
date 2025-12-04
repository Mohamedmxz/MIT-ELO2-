# ELO2 Machine Learning Project — Static Site

This repository contains a single-page site to present the ELO2 Machine Learning project (Temperature & Rainfall predictions in Sudan).

Files to add:

- index.html (site root)
- assets/css/styles.css
- assets/js/script.js

CSV data:

- The site expects predictions at: /4_data_analysis/model_datasets/final_forecasts_to_2030.csv
  - Columns: DATE, REGION, Predicted_Rainfall, Predicted_Temperature
  - The site aggregates (averages) predictions across regions per date for the charts and lists all rows in the table.

Images used (place already in repo):

- /3_data_exploration/Figures/avg_monthly_rain&tem.png
- /3_data_exploration/Figures/annual_temperature_trends.png
- /3_data_exploration/Figures/annual_rainfall_trends.png

Notes:

- Charts use Chart.js v4 via CDN.
- The "Refresh Data" button reloads CSV manually (no polling).
- Table supports search and column sorting.
- All website files at [docs](/docs/)

Deploy:

- This is intended to work on GitHub Pages. With site at:
  <https://mohamedmxz.github.io/MIT-ELO2-/>
  