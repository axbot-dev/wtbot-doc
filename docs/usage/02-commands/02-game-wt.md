# 战争雷霆相关

和战争雷霆有关的命令。

## 查询玩家资料

查询玩家资料。这个命令会返回玩家的战争雷霆资料。资料中包括的数据有且不限于：

- 玩家的基本数据
- 玩家在街机，历史，全真等模式中的汇总数据
- 玩家的载具数据

:::tip
具体数据的来源，数据的含义请参考 [数据介绍](/docs/data/index.md)
:::

### 用法

```bash
/wt <player|玩家> <玩家昵称>
```

#### 参数

- `玩家昵称` - 玩家的昵称。如果是带空格的，请用""包裹

#### 示例

- `/wt player 战雷昵称1`
- `/wt player "战雷昵称2 带空格"`
- `/wt 玩家 战雷昵称3`

## 获得查询历史记录

获得查询历史记录。这个命令会返回用户在 WTBot 中使用命令查询过的战雷玩家的历史记录。方便用户查看自己查询过的玩家。

目前仅支持查询最近的 5 条记录。

### 用法

```bash
/wt <history|历史>
```

## 战雷数据汇总

查询 WTBot 中战雷数据的一些汇总消息。比如，WTBot 中已缓存的战雷玩家总数等

### 用法

```bash
/wt <summary|汇总>
```

## 设置战雷新闻播报

设置战雷新闻播报。这个命令可以设置 WTBot 是否在有新的战雷新闻时在频道中进行自动播报。

同时，在实时播报的新闻中，WTBot 将自动@指定的角色，以便对应的角色能够及时收到新闻通知。

### 用法

```bash
/wt <news|新闻> <on|off|开启|关闭> [接收通知的角色]
```

:::warning
该命令仅在频道中可用

该命令需要触发者拥有管理员权限
:::

#### 参数

- `接收通知的角色` - 请使用@的方式@你所需要设置的通知角色。如果为空，则不会在新闻播报的消息中@任何角色

#### 示例

- `/wt news on` - 开启新闻播报
- `/wt news off` - 关闭新闻播报
- `/wt news on @要接收通知的角色` - 开启新闻播报，并设置接收通知的角色