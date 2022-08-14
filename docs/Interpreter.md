# 解释器模式

解释器模式(Interpreter Pattern)提供了评估语言的语法或表达式的方式. 这种模式实现了一个表达式接口, 该接口解释一个特定的上下文. 这种模式被用在 SQL 解析, 符号处理引擎等.

给定一个语言, 定义它的文法表示, 并定义一个解释器, 这个解释器使用该标识来解释语言中的句子.

## 例子

编译器, 运算表达式计算.