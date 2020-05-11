class Person():
    def __init__(self,name,age):
        self.name = name
        self.age = age

    def talk(self):
        print(f'Hii , there I am {self.name} and Age = {self.age}')


# we can give any attribute to the class , self works as constructor


name = input("Enter Your name ")
Age = input("Enter Your Age")
p1 = Person(name , Age)
p1.name= name
p1.age = Age

p1.talk()

# This wil take all the class attributes and use that in the function

#  Another Example of the Class

class Animal ():
    def walk(self):
        print("walk")

# Animal is parent class and dog is its child class so dog can inherit
# all the methods from the parent classs
# pass is just the keyword for empty class
class Dog(Animal):
    pass