from databasedef import BaseModel
from peewee import *

class Teacher(BaseModel):
    id = AutoField(primary_key=True)
    name = CharField(null=False, max_length=20)
    last_name = CharField(null=False, max_length=20)
    contact = CharField(null=False, max_length=15)
    email = CharField(null=False, unique=True)
    image = TextField(null=False, default='')  # add default url for profiles without profile pictures