# ELO2 Project: Temperature and Rainfall Prediction in Sudan

This project focuses on building a **machine learning model** to **predict future temperature and rainfall patterns** across Sudan. The goal is to support **farmers and local communities** by providing early insights into long-term climate trends that affect agriculture and water management.

The process involves collecting and cleaning NASA satellite data, analyzing historical climate trends, and preparing the data for predictive modeling. Visualizations and dashboards will highlight regional and temporal patterns, while the final model will forecast future values to guide climate adaptation and planning, read more at [`0_domain_study`](../MIT-ELO2-/0_domain_study/README.md)

---

## Modeling the Climate Domain

This project models temperature and rainfall data across Sudan’s main regions using NASA’s POWER database. The analysis focuses on two key indicators: surface temperature (°C) and total corrected precipitation (PRECTOTCORR, mm/day), which together describe the country’s heat and moisture conditions.

I divided Sudan into five regions—North, Central, East, West, and South—each defined by latitude and longitude boundaries. Twenty NASA datasets were collected, cleaned, and merged into two structured datasets: one for temperature and one for rainfall.

Each dataset includes **region**, **latitude**, **longitude**, **month**, and **annual average**, creating a unified structure that supports trend analysis and machine learning prediction. This design allows exploration of how temperature and rainfall interact across space and time, forming a foundation for accurate climate forecasting.

*Data cleaning and preparation Located in the folder [`2_data_preparation`](../MIT-ELO2-/2_data_preparation/)*

---

## Limitations

The data are based on satellite estimates that may differ slightly from ground measurements. Regional averaging simplifies analysis but can mask local variations. Monthly and annual data capture long-term climate patterns, not short-term weather events. The findings reveal correlations, not causation, and future predictions depend on past patterns, which may change unexpectedly.

---

## Current Progress

- ✅ **Milestone 1 (Scoping & Planning):** Completed domain study and project plan  
- ✅ **Milestone 2 (Data Collection):** Collected, cleaned, and merged NASA datasets  
- 🔄 **Next Step:** Begin exploratory data analysis and visualization (Milestone 3)  

---

## Tools

- **Python** (Pandas, NumPy, Matplotlib, Seaborn, Scikit-learn)  
- **Jupyter Notebook** for analysis and exploration  
- **GitHub Projects** for task tracking and progress management  

---

## Author

Developed individually by Mohamed Tilal as part of the **MIT Emerging Talent** program.
