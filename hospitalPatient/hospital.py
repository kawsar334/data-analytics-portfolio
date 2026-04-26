import pandas as pd
import matplotlib.pyplot as plt


df = pd.read_csv("hospital_patient_dataset.csv")
# print(df.head())
# print(df.describe())
# print("column types + null info==========",df.info())

# data cleaning 
df['admission_date']= pd.to_datetime(df['admission_date'])
# print(df.head())
df['discharge_date']= pd.to_datetime(df["discharge_date"])

# calculate stay daysss ===

df['stay_days']= (df["discharge_date"]-df['admission_date']).dt.days
print("check missing values count:==============",df.isnull().sum())


# gender distribution 
gender_count = df['gender'].value_counts()
# print("gender count:==========",gender_count)

# average age 
avarage_age = df['age'].mean()
# print("avarage_age :",avarage_age )

if 'disease' in df.columns:
    print(df['disease'].value_counts())
    
gender_count.plot(kind='bar')
plt.title("gender distribution")
plt.xlabel("Gender")
plt.ylabel("Count")
plt.show()
