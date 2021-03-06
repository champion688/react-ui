# JavaScript 编码规范

   JavaScript编码规范，旨在统一编码的规范性、易读性、高维护性、代码检视的依据。
   结合自身项目的特点，制定以下规范。
  
# 主要内容

  * [排版规范](#文件风格)

  * [命名规范](#命名规范)

  * [编码规范](#编码规范)

  * [注释规范](#注释规范)
 
## 排版规范

   统一使用Prettier和EditorConfig插件进行配置，注意 `文件格式为UTF-8无BOM`。

## 命名规范  

  * 变量命名

    * 申明的变量，可以见名知意，也可以知道其数据类型。
    
    * 以"num"、"count"开头的变量，预定为数字。
     
    * 不要将循环中的临时变量如i、j用于其他用途。
     
    * 能缩写的名称尽量缩写，缩写词不要使用全大写。
    
    * 前面加"is"、"has"、"can"、"should"的变量，值为布尔类型。
     
    * 含有集合属性时，最好体现其集合意义。
     
    * 除常量外，无特殊要求，使用Camel命名(第一个单词首字母小写，后边的单词首字母大写)。

  * 常量命名

    * 使用全大写字母，多个单词间以下划线隔开。

  * 函数命名

    * 函数命名使用Camel命名。
    
## 编码规范
  * [eslint检测实现]
 
  * 定义数组和对象时，使用[]和{}。
  
  * 函数和方法的命名要见名知其功能，参数建议不要超过6个。
  
  * 布尔表达式简写
    ```js
    // example
    0
    -0
    null
    "" 空字符串
    false
    undefined
    NaN
    if(!condition){...}

    "0"
    []
    {}
    if(condition){...}
    ```

  * 一个函数尽量返回统一的数据类型。
  
  * 建议函数定义和使用的原则。
  
    * 一个函数的长度控制在50行以内。
    
    * 将更多的逻辑单元混在一个大函数中，易导致难以维护。
   
    * 一个清晰易懂的函数应该完成单一的逻辑单元(即只做一件事)，复杂的操作应进一步抽取，通过函数的调用来体现流程。
   
    * 特定算法等不可分割的逻辑允许例外。
  
    * 函数定义和调用需满足靠近原则。
   
  * 每个控制器建议以init函数作为逻辑或数据处理的起点。
 
  * 建议不用的行为或逻辑的语句集，适用换行隔开，更便于阅读。
  
  * 条件语句中建议按执行频率排列分支的顺序，建议可使用Switch语句的不使用if else语句。
  
    * 阅读的人容易找到最常见的情况，增加可读性。
  
    * 提高执行效率。
  
## 注释规范

  * 注释的一般规则
 
    * 意图不清晰时需要注释，不需要做无用的注释。
   
    * 不容易被人理解的代码需要注释。
    
    * 容易被开发人员误解的代码总是需要注释，比如：一些技巧性使方法。


        ```js
        // bad

        // good
        var a = 10;
        ```

    * 公共的方法、函数、属性、指令、过滤器、服务等，建议注释详细一些，说明其实现的功能和使用例子。

    * 当一段代码无效时，但对于程序阅读者有重大意义时，可将其注释掉。
    
  * 单行注释
 
    * 单独成行，解释注释后一块代码，'//'后注释内容前总是存在一个空行，并且注释与其后的代码处于同一缩进。
    
    * 在代码后注释，注释与代码至少存在一级缩进，如注释后超过该行的最大值，则单独成行。
    
  * 多行注释
 
    * 注释成多行，'/**/',和单行注释一样，注释内容前总是存在一个空行，注释与代码处于同一缩进。
    
    * 多行注释不可以出现在同行代码的后面。
   
    * 注释多行代码块
   
  * 常量注释
 
    * 一个常量，使用单行注释。
   
        ```js
        // example

        // 可使用的次数
        var CONUT_NUM = 10;
        ```
    * 若常量为多个时，建立使用一个对象创建，使用多行注释，并使用@const标记。
   
        ```js
        /*
        * @const
        * @property minLen 名称最短的长度
        * @property maxLen 名称最长的长度
        */
        var CONST = {
            "minLen": 10,
            "maxLen": 20
        };
        ```
  * 复杂类型注释

  * 函数和方法注释

    - 函数和方法申明时要注释实现的功能、各参数、返回值的类型和意义，复杂逻辑也要注释详细一些，调用时也可注明其作用。
    
    - 类型以{开头，已}结尾，{string}、{number}、{boolean}必须小写，其它首字母大写，任何类型为{Any}。    


      |   类型   |    注释     | 说明 |
      |  ------  | :--------: | ---: |
      |  string  | {string}   | ---- |
      |  number  | {number}   | ---- |
      |  boolean | {boolean}  | ---- |
      |   Array  | {Array}    | ---- |
      |   Regex  | {Regex}    | ---- |
      | Function | {Function} | ---- |
      |    Date  | {Date}     | ---- |
      |  Object  | {Object}   | ---- |
      |    Any   | {Any}      | ---- |


  * 细节注释

    * TODO: 待实现的功能。对待实现的功能简单描述。
    
    * FIXME: 代码运行没有问题，由于时间紧或其它原因，需要修复，对怎么修复注释说明。
    
    * HACK: 为了实现某些功能写的诡异的代码，此时，需要对这段逻辑或诡异的代码注释。
   
    * XXX: 代码有坑的地方。对有坑的地方注释说明。
    
        ```js
        // example

        // TODO: 获取实例信息的功能待实现
        // FIXME: 若要提升性能，可不用循环，使用正则匹配
        // HACK: 目前是前台把个组件是否为元数据和业务数据写死
        // XXX: 获取备份的数据中，队列字段为'tanant'，不是'tanent'
        ```
  * 针对特定浏览器的使用注释
