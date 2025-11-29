# Milestone 3 Retrospective

Milestone 3 focused on transforming the raw climate data into usable form, running exploratory analysis, engineering features, and building baseline machine learning models for temperature and precipitation across five regions in Sudan. This was the most technically demanding milestone so far and it exposed several weaknesses in my workflow, but it also showed clear progress in my analytical skills and confidence.

## What Went Well

The notebook structure improved significantly, and my understanding of EDA, lag features, rolling windows, and model evaluation is now much clearer. After several failed attempts, I produced working models with strong temperature predictions with R2 values between 0.87 and 0.91. I also generated acceptable precipitation models for three regions with R2 near 0.8. My documentation improved as well through nontechnical explanations and updates to the main README. These steps made the project more organized and increased my confidence in the analysis work.

## What Did Not Go Well

The workflow was inefficient. I restarted the analysis three times due to preventable mistakes. Version 1 failed because the data preparation was wrong, which fed incorrect inputs into the models. Version 2 failed because the model design did not match the actual goal. I intended to build separate models for each region, but I accidentally mixed regional data, which forced a full rewrite.

Even after restructuring, the precipitation models showed issues. Two regions produced weak R2 values of 0.4 and 0.5, and I was not able to identify the root cause. This revealed that I still need to improve how I check data distributions, regional variability, and stationarity before modeling. I also didn't include lag and rolling features at first, which degraded performance, and I initially forgot to calculate R2, which made model comparison harder.

## What I Learned

I learned that a correct pipeline structure is essential and that clean data does not automatically lead to good models. Lag and rolling features have a significant effect on time series predictions, and proper documentation prevents repeated mistakes. I also learned that verifying each step early saves time and avoids full notebook rewrites.

## How I Will Improve for Milestone 4

I will stop spending too much time preparing and delaying the actual analysis. Instead, I will start building early versions of each step immediately and iterate from there. I will also adopt consistent habits, such as checking feature shapes, verifying model inputs, computing R2 from the beginning, and validating each region independently before moving forward.

## Overall Reflection

Milestone 3 was time consuming and complicated, especially since I got sick in the middle of it, but it forced me to confront weaknesses in my process. Despite the delays and multiple restarts, I now have functional models, clearer reasoning, and stronger confidence in the project direction. Although I crossed the deadline, the challenges helped me understand how to manage my time and structure future work more effectively. This milestone marked a shift from guessing to genuinely understanding the analysis process.
