# https://www.youtube.com/watch?v=Mut59jXBrY4
# https://www.youtube.com/watch?v=5PrZvPeUw60
import pandas as pd
import numpy as np
import psycopg
from sqlalchemy import create_engine
# imported the dataset
df = pd.read_csv("customer_shopping_behavior.csv")

# print(df.isnull().sum())
# convert column names to lowercase and replace spaces with underscores
df.columns= df.columns.str.lower()
df.columns = df.columns.str.replace(" ","_")
# df.columns = df.columns.str.replace('_(usd)', '', regex=False)
df = df.rename(columns={'purchase_amount_(usd)': 'purchase_amount'})#rename the column name
# print(df.describe(include="all"))
# fill missing values in review_rating with mean of each category
df["review_rating"]=df.groupby("category")["review_rating"].transform(lambda x: x.fillna(x.mean()))

# create age_groups using qcut
labels = ['young Adults','Adults','middle-aged','Seniors']
df['age_group']=pd.qcut(df['age'],q=4,labels=labels)
df[['age','age_group']].head()



# create column purchase_frequency_days 
frequency_mapping={
    "Fortnightly": 14,
    "Weekly":7,
    "Monthly":30,
    "Quarterly":90,
    "Bi-Weekly":14,
    "Annually":365,
    "Every 3 Months":90
    
}
df["purchase_frequency_days"]=df["frequency_of_purchases"].map(frequency_mapping)
# print(df[["frequency_of_purchases"]].head())
# df[["purchase_frequency_days","frequency_of_purchases"]].head(10)
# create column discount_applied
df[['discount_applied','promo_code_used']].head(10)#print(df[['discount_applied','promo_code_used']].head(10))

(df['discount_applied']==df['promo_code_used']).all()# return boolean print((df['discount_applied']==df['promo_code_used']).all())

df = df.drop("promo_code_used",axis=1) # drop the column (promo_code_used) print(df.columns.to_list())


# conn = psycopg.connect(
#     host="localhost",
#     dbname="customer_shoping_behav",
#     user="postgres",
#     password="kawsar",
#     port=5432
# )

# cur = conn.cursor()

# cur.execute("SELECT version();")
# print(cur.fetchone())
# print("Connected Successfully!")
# cur.close()
# conn.close()

host="localhost"
database="customer_shoping_behav"
user="postgres"
password="kawsar"
port=5432

engine = create_engine(f"postgresql://{user}:{password}@{host}:{port}/{database}")
# df.to_excel("customer_shopping_behavior.xlsx", index=False)
# df.to_html("customer_shopping_behavior.html", index=False)
table_name = "customer"
df.to_sql(table_name,engine,if_exists="replace",index=False)
print(f"Data inserted into {table_name} table successfully!")
df.to_json("customer_shopping_behavior.json",orient="records",indent=4)