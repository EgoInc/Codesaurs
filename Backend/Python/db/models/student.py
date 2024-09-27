from peewee import *
from databasedef import BaseModel

class Student(BaseModel):
    id = AutoField(primary_key=True)
    name = CharField(null=False, max_length=20)
    last_name = CharField(null=False, max_length=20)
    date_of_birth = DateField(null=False)
    gender = CharField(constraints=[Check('gender IN ("male", "female", "undefined")')])
    contact = CharField(null=False, max_length=15)
    email = CharField(null=False, unique=True)
    image = TextField(null=False, default='')  # add default url for profiles without profile pictures
    parent_name = CharField(null=False, max_length=20)
    parent_last_name = CharField(null=False, max_length=20)
    parent_contact = CharField(null=False, max_length=15)