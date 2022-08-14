# 建造者模式

建造者模式(Builder Pattern)使用多个简单的对象一步一步构建成一个复杂的对象.

将一个复杂的构建与其表示相分离, 使得同样的构建过程可以创建不同的表示.

## 例子

去肯德基, 汉堡, 可乐, 薯条, 炸鸡翅等是不变的, 而其组合是经常变化的, 生成出所谓的"套餐".

Java 中的 StringBuilder.