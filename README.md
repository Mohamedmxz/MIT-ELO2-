# Sudan Climate Analysis — Temperature & Rainfall (ELO2)

Short project tagline: Data-driven analysis and forecasting of temperature and rainfall across five regions of Sudan using NASA POWER data.

Table of Contents

- [Sudan Climate Analysis — Temperature \& Rainfall (ELO2)](#sudan-climate-analysis--temperature--rainfall-elo2)
  - [Research Question and Overview](#research-question-and-overview)
  - [Motivation \& Goals](#motivation--goals)
  - [Repository structure](#repository-structure)
  - [Modeling the Climate Domain](#modeling-the-climate-domain)
  - [Non-technical explanation of findings](#non-technical-explanation-of-findings)
  - [Limitations of the Project](#limitations-of-the-project)
  - [Future Research Directions](#future-research-directions)
  - [Communicating the Results](#communicating-the-results)
  - [Contact](#contact)

---

## Research Question and Overview

>**How have temperature and rainfall patterns in Sudan changed from 1990 to 2024, and how accurately can machine learning models predict future trends?**

This project examines historical temperature and rainfall data for five regions of Sudan (North, Central, East, West, South) sourced from NASA POWER. The objective is to prepare clean regional time-series data, perform EDA to identify trends and seasonality, and develop predictive models for temperature and precipitation to support agricultural planning, research, and local decision-making.

## Motivation & Goals

- Provide accessible, cleaned, aggregated climate data for Sudan by region.
- Identify long-term trends and seasonal patterns in temperature and rainfall.
- Build and evaluate machine learning models to forecast annual/seasonal climate variables.
- Communicate findings via visualizations, simple dashboard and notebook narrative.

## Repository structure

- [`0_domain_study/`](/0_domain_study/) — Background, problem context, and domain motivation (contains a README describing goals and motivation).
- [`1_datasets/`](/1_datasets/) — Raw datasets and final prepared dataset(s). Subfolders:
  - [`Raw_datasets/`](/1_datasets/Raw_datasets/) (per-region raw CSVs downloaded from NASA POWER)
  - [`Final_dataset/`](/1_datasets/Final_dataset/) (cleaned & merged datasets used for analysis)
- [`2_data_preparation/`](/2_data_preparation/) — Notebooks and scripts used to clean, standardize, merge, and validate the data.
- [`3_data_exploration/`](/3_data_exploration/) — EDA notebooks, plots, and summary statistics.
- [`4_data_analysis/`](/4_data_analysis/) — Modeling notebooks, experiments, and evaluation artifacts.
- [`5_communication_strategy/`](/5_communication_strategy/) — Presentation, dashboard ideas and communication materials.
- [`Retrospective/`](/Retrospective/) — Project retrospective notes.
- [`docs/`](/docs/) — (optional) place to store GitHub pages website files.
- [`LICENSE`](/LICENSE) — Project license.

## Modeling the Climate Domain

This project models temperature and rainfall data across Sudan’s main regions using NASA’s POWER database. The analysis focuses on two key indicators: surface temperature (°C) and total corrected precipitation (PRECTOTCORR, mm/day), which together describe the country’s heat and moisture conditions.

I divided Sudan into five regions—North, Central, East, West, and South—each defined by latitude and longitude boundaries. Twenty NASA datasets were collected, cleaned, and merged into two structured datasets: one for temperature and one for rainfall.

Each dataset includes **region**, **latitude**, **longitude**, **month**, and **annual average**, creating a unified structure that supports trend analysis and machine learning prediction. This design allows exploration of how temperature and rainfall interact across space and time, forming a foundation for accurate climate forecasting.

*Data cleaning and preparation Located in the folder [`2_data_preparation`](/2_data_preparation/)*

## Non-technical explanation of findings

The data show a clear seasonal rhythm in both temperature and rainfall, with temperature following a very steady yearly pattern that makes it much easier to estimate from month to month, while rainfall **although seasonal** is far more irregular and harder to pin down precisely. The model generally gives better guidance than simple approaches like comparing to last month or the same month in a previous year, especially for temperature, where the regular cycle provides a strong signal the model can follow. Rainfall still benefits from the modeling, but its natural ups and downs mean unusual dry or wet months remain difficult to predict, and long stretches of future climate are even harder to anticipate. Some uncertainty comes from gaps or noise in the measurements, differences in how well certain areas are monitored, and the fact that unusual climate years don’t always resemble past patterns. The model also works with monthly data, so short intense events—like sudden heatwaves—get smoothed out and won’t appear clearly in the forecasts. Overall, the results are best treated as helpful guidance rather than exact predictions: temperature estimates can be used with more confidence, rainfall should be read more cautiously, and planning should still rely on seasonal patterns, regular updates, and local knowledge, especially where data is limited or conditions vary a lot

*Data analysis Located in the folder [`4_data_analysis`](/4_data_analysis/). Full analysis summary in [`Analysis_README`](/4_data_analysis/README.md)*

## Limitations of the Project

The analysis uses climate data collected by coordinates rather than administrative cities, which may reduce clarity and overlook local patterns. Only rainfall and temperature were included, while other important variables like humidity, wind, pressure, and elevation were not considered. Data is monthly averaged and limited in length, which can smooth out short-term events and reduce model reliability.

Model performance varies by region: temperature forecasts are stable, but rainfall predictions are inconsistent, with some regions poorly modeled. The results are observational and focus on correlations in past climate patterns; they do not guarantee exact future forecasts.

- Spatial Representation: Coordinates may not reflect city-level or population-relevant climate conditions.

- Omitted Variables: Other climate drivers and local features are not included.

- Data Frequency: Monthly data may miss short-term variations.

- Model Generalization: Rainfall models perform unevenly across regions.

## Future Research Directions

- Expand Data Sources: Incorporate additional climate variables such as humidity, wind, pressure, elevation, and soil moisture to better capture local weather dynamics.

- Finer Spatial Resolution: Use city-level or administrative boundaries instead of coordinates to improve clarity and region-specific modeling.

- Advanced Time-Series Models: Test LSTM, GRU, temporal CNNs, or transformer-based forecasting to capture complex temporal dependencies.

- Improve Rainfall Predictions: Use datasets with daily total rainfall values rather than monthly daily averages to better capture variability and extreme events, improving model performance in regions with poor forecasts.

## Communicating the Results

I chose to present the project through a website because it allows to simply showcase the analysis visually and intuitively. GitHub repository can feel abstract, but through clear graphics, simple explanations, and organized sections, the website turns the findings to something that users can follow without technical knowledge.

The communication approach focuses on two groups:

1. Learners and early career data scientists
These users can explore the pipeline, understand how climate data are cleaned and modeled, and reuse parts of the workflow in their own projects. The site introduces the concepts step by step, which supports learning and experimentation.

1. People interested in Sudanese climate trends
This includes students, researchers, and community members who want a clear overview of how temperature and rainfall behave across the country. The website helps them compare regions, understand long term patterns, and see where forecasting is more or less reliable.

By presenting the results in an accessible format, the goal is to make the project useful to both technical and non technical audiences. The website is not only a summary of the analysis, it is an invitation for others to explore, build on the work, or contribute new ideas.

If someone wants to collaborate, suggest improvements, or share related data, the website also includes direct contact information, making communication simple and open.
[`Explore the final artefact`](https://mohamedmxz-elo2.framer.website/)

## Contact

Author: Mohamed Tilal (github: @Mohamedmxz)  
If you have questions or want to collaborate, open an issue or contact me via [Email](mailto:mohamed.tilal52@gmail.com?).
