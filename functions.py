# def greet_user(name):
#     print(f'Hello ,{name}')
# This is the example of the defining function in python


# name = input("Enter Your name: ")
# greet_user(name)

# Below is the example of the Class in python
class Communication: # This is how the class is created
   # This is the by default constructor of the python class



      # x and y are initiallized here




    def greet_user(name):  # function can be created without class
        print(f'Hello {name}')

    def byee_user(name):   # Parameters works same as java
        print(f'Byee {name}')



# Communication is class, so using that class methods
# We need to create class object than run the methods by following method
# com1 = Communication()
name = input("Enter Your name: ")
# # com1.greet_user()
# # com1.byee_user()

# Self is kind of the feature that takes automatically the parameters

com2 = Communication(name)
com2.greet_user(com2.x)