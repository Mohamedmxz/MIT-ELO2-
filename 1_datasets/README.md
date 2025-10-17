
# Raw Datasets – Sudan Climate (NASA POWER)

## Overview

These datasets were downloaded from the [NASA POWER Data Access Viewer](https://power.larc.nasa.gov/) under the **Agroclimatology** community.  
They cover five regions in Sudan ([Central](Raw_datasets\Central), [East](Raw_datasets\East), [North](Raw_datasets\North),[South](Raw_datasets\South), and [West](Raw_datasets\West)), each chosen to represent a distinct climate zone.  
The data include temperature and rainfall variables on a **monthly** time scale.

None of these datasets were modified. All cleaning and merging will be done separately in the [`2_data_preparation`](MIT-ELO2-\2_data_preparation) folder.

---

## Regions and Coordinates

| Region | Lat Range | Lon Range | Description |
|--------|------------|------------|--------------|
| North | 17–20 N | 28–32 E | Dongola, desert zone |
| Central | 14–16.5 N | 31–34 E | Khartoum & Gezira, semi-arid |
| East | 16–19 N | 35–37 E | Kassala & Port Sudan corridor |
| West | 11–14 N | 25–29 E | El Obeid & Darfur transition |
| South | 9–12 N | 29–32 E | Blue Nile & South Kordofan, wetter |

---

## Parameters and Filenames

| Parameter | NASA POWER Variable | Description | Example Filename |
|------------|--------------------|--------------|------------------|
| Precipitation | `PRECTOT` | Monthly mean precipitation (mm/day) | `north_precip.raw.csv` |
| Average Temperature | `T2M` | Mean 2-meter air temperature (°C) | `north_t2m.raw.csv` |
| Maximum Temperature | `T2M_MAX` | Monthly max 2-meter temperature (°C) | `north_t2mmax.raw.csv` |
| Minimum Temperature | `T2M_MIN` | Monthly min 2-meter temperature (°C) | `north_t2mmin.raw.csv` |

---

## Data Type Classification

- **Quantitative (Continuous)** – numerical climate data  
- **Time Series** – monthly observations  
- **Structured** – tabular CSV format  
- **Secondary Data** – collected from an existing public source (NASA POWER)  
- **Public Access** – open data, no restriction  

---

## Notes

- Source: NASA POWER Agroclimatology Dataset  
- Temporal coverage: [insert your date range from the CSVs once you check one]  
- Format: CSV, comma-separated, with headers  
- License: Open, public domain  
- Purpose: Used to analyze temperature and rainfall patterns across Sudan and identify regional climate differences.
