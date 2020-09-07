# python-基础

## 字符串
+ title()：将字符串首字母变成大写
+ upper()：将字符串变成全部变成大写
+ lower()：将字符串全部变成小写
+ +用来拼接字符串
+ rstrip()：删除字符串末尾的空白
+ lstrip()：删除字符串开头的空白
+ strip()：删除字符串授为的空白

## 数字

+ str()：数字转化为字符串

## 列表[]

+ 索引为-1，可以返回列表的最后一个元素。-2,-3以此类推
+ 在列表末尾添加元素：append()
+ 在列表中插入元素：insert(index,arg)
+ 删除列表的元素：del xxx
+ 删除末尾的元素：pop()
+ 使用pop()删除指定元素：pop(index)
+ 根据值删除元素：remove(xxx)
+ sort()：按ASCRI永久排序。
+ sort(reverse = True)：按相反顺序排序
+ sorted()：对列表进行临时排序。原列表顺序不变。
+ reverse()：列表倒序
+ len(list)：获取列表的长度
+ range(n1,n2) ：打印出1,2,3,4  不会打印5
+ 使用range()创建列表：list(range(1,5))：[1,2,3,4]
+ 使用range()指定步长：range(1,11,step)
+ min(list)：获取列表的最小值
+ max(list)：获取列表的最大值
+ sum(list)：获取列表的总和
+ 切片：list[n:m]

## 元组:不可变的列表

+ 使用圆括号

## if语句

+ in :判断是否在

## 字典:{a:b}

+ 添加：dir[key] = value;
+ 删除：del dir[key]
+ 遍历健值对：for key,val in dir.items():  注意：必须带items()
+ 遍历健：for key in dir.keys():
+ 按顺序遍历字典中所有的健：使用sorted()
```python
    language = {
        "a":"1",
        "b":"2",
        "c":"3"
    }

    for key in sorted(language.keys()):
        print(key.title())
```
+ 遍历值：for val in dir.values():
+ 使用集合set去掉字典中重复的值：
```python
    language = {
        "a":"1",
        "b":"2",
        "c":"3"
    }

    for key in set(language.values()):
        print(key.title())
```
+ 在列表中存字典：[{a:b},{c:d}]
+ 在字典中存列表：{"a":["1","2","3"]}

+ input()：提示用户输入
+ int()：转成数字

## 函数

+ 传递任意数量的参数：*args,一个*代表创建空列表，两个*代表创建空字典。如果有具体参数，*args必须放在后面。
```python
    def make_pizza(size, *toppings):
        print("\nMaking a " + str(size) + "-inch pizza with the following toppings:")
       for topping in toppings:
            print("- " + topping) 
    make_pizza(16, 'pepperoni')
    make_pizza(12, 'mushrooms', 'green peppers', 'extra cheese')
```

+ 导入函数
    - import fn
    - from module_name import fn1,fn2
+ 使用as给函数指定别名
    - from pizza import make_pizza as mp
+ 使用as给模块指定别名
    - import pizza as p
+ 导入模块中的所有函数
    - from pizza import *

## 类
### 继承
+ 子类
```python
    class 子类(父类):
        def __init__(self,父类的属性):
            """初始化父类的属性"""
            super().__init__(父类的属性)
```

+ 创建子类的时候，父类必须在当前文件，且在子类的上面
+ 导入类：from car import Car   

## 读写文件
### 读文件
```python
    with open('a.txt') as file_object:
        contents = file_object.read()
        print(contents）

    open()：打开文件
    with：在不再需要访问文件后关闭
    read()：读文件内容

```

### 写文件
```python
    filename = 'a.txt'
    with open(filename,'w') as file_object:
        file_object.write('aa')
```

## json
### 写入文件：json.dump(数据，存入的文件)
```python
    import json

    filenname = 'a.json'
    num = [1,2,3,4]
    with open(filename,'w') as file_obj:
        json.dump(num,file_obj)
```

### 读文件
```python
    import json

    filename = 'a.json'

    with open(filename) as file_obj:
        num = json.load(file_obj)
        print(num)
```

+ 创建虚拟环境：python -m venv ll_env
+ 激活虚拟环境：source ll_env/bin/activate
+ 退出虚拟环境：deactivate
+ 安装Django：pip install Django
+ 在Django创建项目：django-admin.py startproject learning_log .
+ settings.py：指定Django如何与你的系统交互以及如何管理项目
+ urls.py：告诉Django应创建哪些网页来响应浏览器请求。
+ wsgi.py：帮助Django提供它创建的文件
+ 创建数据库：python manage.py migrate
+ 创建应用程序
    - 打开另一个终端窗口：
    - source ll_env/bin/activate
    - python manage.py startapp learning_logs
+ 修改数据库： python manage.py makemigrations learning_logs
+ 修改数据的时候需要执行三步：
    - 修改models.py
    - python manage.py makemigrations learning_logs
    - python manage.py migrate
+ 在Djgnao中创建超级用户
    - python manage.py createsuperuser
+ Django shell
    -  python manage.py shell
    - from learning_logs.models import Topic
    - Topic.objects.all()

