# Data Exploration

This folder contains the exploratory analysis for the ELO2 project, which studies **temperature and rainfall trends in Sudan (1990–2024)** across five regions: Central, East, North, South, and West.

Each notebook focuses on a specific aspect of the data to gradually build a full understanding before modeling.

---

## Notebook 1: [`1_data_overview.ipynb`](../3_data_exploration/1_data_overview.ipynb)

**Goal:**  
Get a general understanding of the dataset’s structure and integrity.

**What it does:**

- Loads the final prepared dataset.
- Checks shape, data types, and missing values.
- Generates summary statistics for all numeric columns.
- Confirms the year range and regional coverage.

**Output:**  
Clean summary tables and initial observations about data completeness and structure.

---

## Notebook 2: [`2_monthly_trends.ipynb`](../3_data_exploration/2_monthly_trends.ipynb)

**Goal:**  
Explore how **temperature and rainfall vary within each region across months** to identify seasonal patterns.

**What it does:**

- Groups data by region and months.
- Calculates mean and standard deviation for rainfall and temperature.
- Plots monthly averages and boxplots to visualize seasonality and outliers.

**Output:**  
Clear visualization of seasonal cycles, showing how climate conditions shift month to month and differ between regions.

---

## Notebook 3: [`3_regional_comparison.ipynb`](../3_data_exploration/3_regional_comparison.ipynb)

**Goal:**  
Compare **overall climate behavior between regions** and analyze how it evolved from 1990 to 2024.

**What it does:**

- Calculates annual average rainfall and temperature per region.
- Visualizes long-term trends over time with smoothed line plots.
- Measures correlations between rainfall and temperature.
- Highlights differences and relationships between regions.

**Output:**  
Trend plots and correlation tables revealing regional climate differences and interactions between rainfall and temperature.

---

### Next Step

The insights from this EDA will guide the **feature design and modeling stage**, helping identify relevant patterns (e.g., yearly or seasonal averages) to use in predictive analysis.
