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

6. **Group by region and year**
   - Averaged all numeric values by `REGION` and `YEAR` to ensure consistent granularity across both datasets.

7. **Merge temperature and rainfall data**
   - Combined the two datasets using `REGION` and `YEAR` as keys.
   - The resulting dataset contains both rainfall and temperature variables in one table.

8. **Clean up redundant columns**
   - Removed unnecessary latitude and longitude columns `(LAT_RAIN, LON_RAIN, LAT_TEMP, LON_TEMP)` to simplify the dataset.

## Output Files

| Output File | Description |
|--------------|-------------|
| `cleaned_temperature.csv` | Clean, combined temperature dataset for all regions |
| `cleaned_rainfall.csv` | Clean, combined rainfall dataset for all regions |
| `final_merged_dataset` | Combined dataset with both temperature and rainfall data, averaged by region and year |

The final dataset is saved in the [`/1_datasets/final_dataset`](../1_datasets/Final_dataset/) folder and will serve as input for data analysis in **Milestone 3 (Data Analysis)**.
