# Folder for python backend project 
<div align="center">
  
## Состав команды:
```
Гусейнова Марьям @Mariam-Guseinova
Лазебный Всеволод @Vllazebnyi
Конопля Алексей @AlexeyKonoplia
```

<div align="left">
  
## Как запустить:
1. Клонировать репозиторий: 

`git clone https://github.com/EgoInc/Codesaurs.git`

2. Установить MySQL: https://dev.mysql.com/downloads/installer/

3. Установить MySQL Workbench (графический интерфейс): https://dev.mysql.com/downloads/workbench/

4. В MySql создать схему  с названием codesaurs: `CREATE SCHEMA "codesaurs" ;`
  
![MySql1](https://github.com/EgoInc/Codesaurs/blob/PythonWithDocumentation/Backend/Python/adds/MySql%20(1).jpg?raw=true)

<div align="left">

5. Установить необходимые библиотеки:
```
pip install uvicorn
pip install fastapi
pip install pydantic
pip install peewee
pip install mysql-connector-python
```
6. В файле _…/Codesaurs/Backend/Python/db/models/databasedef.py_ заменить 4ю строчку в соответствие с сервером, где находится база данных codesaurs (если все по умолчанию - заменить только пароль)

![Python1](https://github.com/EgoInc/Codesaurs/blob/PythonWithDocumentation/Backend/Python/adds/Python%20(2).png?raw=true)

7. Запустить файл _…/Codesaurs/Backend/Python/db/__init__.py_
8. В терминале перейти в папку Python:
`cd Backend/Python`
9. Вставить:
`python -m uvicorn "main":app --reload`
или
`uvicorn main:app --reload`
(В зависимости от версии python)

![Python2](https://github.com/EgoInc/Codesaurs/blob/PythonWithDocumentation/Backend/Python/adds/Python%20(1).png?raw=true)

11. Открыть документацию API:
http://127.0.0.1:8000/docs#/
