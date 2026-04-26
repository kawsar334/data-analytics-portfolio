import pandas as pd
import matplotlib.pyplot as plt


df = pd.read_csv("hospital_patient_dataset.csv")
print(df.isnull().sum())
gender_count = df["gender"].value_counts() 
histInfo = df["treatment_cost_usd"]


# plt.hist(histInfo, bins=15)
# plt.xlabel("treatment cost ")
# plt.ylabel("amount ") 
# plt.title("treatment cost in usd ----------")
# plt.show() 

# gender_count.plot(kind='bar')
# plt.title("gender distribution")
# plt.xlabel("Gender")
# plt.ylabel("Count")
# plt.savefig("gender_count.png")
# plt.show()

gender =df.groupby(['department', 'disease']).size()
gender.to_csv("department_diseas.csv")
print('gender ' ,gender)
print(pd.DataFrame(gender))


gender.plot(kind="bar")
plt.show()

