# Data Preparation – ELO2 Project

This folder contains the notebook and scripts used to clean, merge, and prepare temperature and rainfall data for the **Sudan Climate Analysis (ELO2)** project.

## Overview

The goal of this step is to ensure all raw datasets are standardized, consistent, and ready for analysis in the next milestone.  
I work only with copies of the raw data — **original datasets are never modified**.

## Process Summary

**Notebook:** [`data_preparation.ipynb`](../2_data_preparation/data_cleaning.ipynb)

### Steps Performed

1. **Import raw datasets**  
   Loaded regional CSV files (`Central`, `North`, `South`, `East`, `West`) for both temperature and precipitation.

2. **Handle headers and formatting**  
   NASA POWER data includes header metadata. The notebook automatically detects and reads the correct data section.

3. **Clean and standardize**
   - Fixed data types (e.g., `YEAR` → int, `LAT/LON` → float)
   - Verified no missing or invalid values
   - Ensured consistent structure across all regions (17 columns)

4. **Merge datasets**
   - Combined all temperature files into one datset
   - Combined all precipitation files into one dataset
   - Added a `REGION` column to preserve spatial context

5. **Validation**
   - Checked year coverage (1990–2024) for all regions
   - Verified that each dataset contains complete data for every year

## Output Files

| Output File | Description |
|--------------|-------------|
| `cleaned_temperature.csv` | Clean, combined temperature dataset for all regions |
| `cleaned_rainfall.csv` | Clean, combined rainfall dataset for all regions |

These files are saved in the `/1_datasets/Cleaned_datasets` folder and will serve as inputs for data analysis in **Milestone 3 (Data Analysis)**.
