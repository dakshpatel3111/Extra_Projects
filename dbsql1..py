import mysql.connector

# User can use any Server unless it is My sql
mydb = mysql.connector.connect(
    host="localhost",
    user="root",
    password=""
)

cursor = mydb.cursor()
# Here write the Name of the database with database.table format
sql = "Select * from phpmyadmin.orderinfo"
cursor.execute(sql)
results = cursor.fetchall()

# Make the Changes According to the Need
for row in results:
    print("Name = ", row[0])
    print("Phone = ", row[1])
    print("Email  = ", row[2])
    print("Street = ",row[3])
    print("Size =",row[4])
    print("Toppings =" ,row[5])
    print("Delivery =",row[6])
    print("Price =" , row[7])
    print("Date =", row[8])
    print("Time =",row[9],"\n")


mydb.close()


