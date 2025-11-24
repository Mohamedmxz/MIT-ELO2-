# 🌦️ Time-Series Analysis of Rainfall & Temperature  

## README — Analysis Strategy, Technical Overview, Notebook Summaries & Results

---

## Technical Description of the Analysis

This project analyzes long-term rainfall and temperature data across multiple regions using a structured time-series machine learning pipeline.  
The workflow focuses on:

- Converting wide-format monthly climate data into a unified long-format time series  
- Creating lag-based temporal features  
- Establishing a consistent forecasting target  
- Using grouped expanding-window cross-validation (per region)  
- Training multiple models and selecting the best-performing one  
- Conducting diagnostic tests and interpretability analysis with SHAP and residual evaluation  

The primary goal is to understand how rainfall and temperature relate across time and produce predictive models that generalize across regions while respecting temporal order.

---

## 📚 Summary of Each Notebook / Script

### **1. Preparing the Dataset**

- Loads the raw merged dataset in wide format (JAN_RAIN, FEB_TEMP, etc.).
- Reshapes data into long time-series format: `REGION, YEAR, MONTH, Rainfall, Temperature`.
- Creates a continuous time index per region.
- Generates lag features (`1, 2, 3, 12 months`) for both rainfall and temperature.
- Saves a model-ready dataset.

---

### **2. Baseline Modeling**

- Trains simple baseline regressors such as:
  - Linear Regression  
  - Random Forest  
  - Ridge  
- No complex tuning, just establishing reference performance.
- Creates a baseline leaderboard for later comparison.

---

### **3. Data Quality & Exploratory Analysis**

- Confirms data consistency across regions and years.
- Generates:
  - Histograms  
  - Seasonal plots  
  - Trendlines  
  - Correlation heatmaps  
- Evaluates basic climate patterns (wet/dry cycles, temperature seasonality).
- No major quality issues found.

---

### **4. Feature Engineering + Minimal Modeling**

- Adds additional feature transformations:
  - Rolling means  
  - Year and month encodings  
  - Interaction terms  
- Trains a set of lightweight models using updated features.
- Produces a second leaderboard showing whether engineered features add value.

---

### **5. Model Selection with Grouped Time-Series CV**

- Implements **expanding-window time-series CV**, grouped by region.
- Ensures:
  - No data leakage  
  - Predictions always use past data  
  - Each region is evaluated independently  
- Trains multiple tuned models and collects:
  - MAE / RMSE per fold  
  - Region-level performance  
- Selects the final candidate model.

---

### **6. Diagnostics & Interpretability**

- Uses SHAP to understand feature influence.
- Computes:
  - Residual histograms  
  - Residual-vs-prediction plots  
  - Fold-by-fold error distributions  
- Examines whether lag features behave as expected.
- Validates that the model generalizes similarly across regions.

---

### **7. Future Experimentation Prototype**

- (Optional) Tests:
  - Alternative targets  
  - Different resampling techniques  
  - Additional features  
- Helps explore ideas for further study.

---

## ## ✅ Final Results (Summary)

- After evaluating Ridge Regression, Random Forest, and XGBoost using grouped expanding-window cross-validation, Random Forest consistently achieved the highest performance. The final selected model obtained R² = 0.847 (rainfall) and R² = 0.921 (temperature) on the hold-out test set.
- Lag-based features (1, 2, 3, 12 months) showed strong predictive contribution.
- Temperature and rainfall interacted seasonally in ways the model captured clearly.
- Expanding-window CV ensured a correct evaluation of real-world forecasting behavior.
- Selected model achieved stable performance across regions with no major overfitting.
- SHAP confirmed that recent rainfall values are the dominant predictor.

---

## ## ⚠️ Flaws & Limitations

Even though the dataset was structurally clean, the analysis still has important limitations:

1. **Data was collected by coordinates, not by administrative cities**  
   - This can reduce interpretability and may not match real human-relevant areas.

2. **Only rainfall and temperature were used**  
   - Weather systems depend on many additional variables:  
     humidity, pressure, wind, elevation, evaporation, soil moisture, etc.

3. **Limited data quantity**  
   - More years or higher-frequency data (daily instead of monthly) would improve model reliability.

4. **Potential for additional feature engineering**  
   - Climate indices (ENSO, NAO), spatial features, or satellite data could improve predictions.

5. **No use of advanced temporal models**  
   - LSTMs, Transformers, or Prophet could be explored for more complex seasonality.

---

## ## 🚀 Possible Next Steps to Continue the Analysis

A few paths for deeper or more advanced climate modeling include:

- **Expand the dataset**  
  - Add humidity, pressure, wind, elevation, or remote-sensing features.  
- **Use city-level administrative units instead of coordinates**  
  - Enables clearer interpretation and region-specific forecasting.  
- **Try advanced time-series models**  
  - LSTM / GRU  
  - Temporal CNN  
  - Transformer-based forecasting  
  - XGBoost or CatBoost with engineered features  
- **Incorporate domain-specific weather indices**  
  - ENSO, Indian Monsoon Index, NAO, SOI  
- **Perform spatial analysis**  
  - Use geospatial correlations between neighboring regions.  
- **Evaluate uncertainty modeling**  
  - Prediction intervals  
  - Quantile regression  
- **Add more lagged, rolling, or seasonal decomposition features**  

---

## Final Notes

This analysis folder provides a complete pipeline for preparing climate time-series data, modeling it correctly, and evaluating model performance with proper temporal validation.  
Each notebook contributes a distinct stage in the workflow, and the README provides an integrated narrative of the project's analytical strategy and findings.
