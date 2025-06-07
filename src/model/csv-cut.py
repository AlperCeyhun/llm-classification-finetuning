import pandas as pd
import os

# Get the directory of this script
script_dir = os.path.dirname(os.path.abspath(__file__))
csv_path = os.path.join(script_dir, 'train.csv')
out_path = os.path.join(script_dir, 'small_train.csv')

# Load the original huge CSV from the same folder as this script
df = pd.read_csv(csv_path)

# Slice it down to first 100 rows
small_df = df.head(100)

# Save to new file in the same folder
small_df.to_csv(out_path, index=False)

print("Saved smaller CSV with 100 rows!")