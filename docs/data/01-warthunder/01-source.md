# 数据来源

在本章节，我们将介绍 WTBot 中，和战争雷霆相关的数据来源。

简单来说，目前 WTBot 的数据来源主要有两个：

- Gaijin 官方接口
- 第三方接口 （未来）

## Gaijin 官方接口

WTBot 目前所展示给用户看的和战争雷霆有关的数据，均出自战争雷霆官方接口。包括但不限于游戏客户端的接口，官网的接口等。

### 存在的问题

由于不为人知的原因，Gaijin 对玩家的数据持及其保守的态度，对所有公开查询渠道严防死守。这其实在网游公司里非常罕见。

同时，Gaijin 似乎也会去定期寻找接口被自动化机器人使用的迹象，然后设置高强度的机器人防护。

我们无从得知为什么他们要这么做，但又能容许 [ThunderSkill](https://thunderskill.com/) 这样的第三方网站存在。这是一个矛盾的现象。

:::info
[ThunderSkill](https://thunderskill.com/) 是一个社区开发者开发的第三方数据查询网站。根据公开消息，它和 Gaijin 官方没有任何关系
:::

因此 WTBot 的数据来源随时可能会因为 Gaijin 的调整而被切断。这是一个可预期的问题。在这一点上，WTBot 对服务的不可靠性心知肚明。

不过，就算相关问题发生了，WTBot 也会尝试使用技术手段恢复服务，除非收到了 Gaijin 发来的明确指示，要求 WTBot 停止相关服务。在这种情况下，WTBot 将始终尊重 Gaijin 的意愿，会停止相关服务。同时我们也会向 WTBot 的用户提供详细说明。

:::tip 我是 Gaijin，我要和 WTBot 合作
还有这种好事？还不快使用贵司的认证邮箱向 [axiangcoding@gmail.com](mailto:axiangcoding@gmail.com) 发送邮件，我们好好谈谈？

WTBot 对和官方的任何形式合作都是欢迎的，并且抱有期待的。
:::

:::danger 我是 Gaijin，我要明确指示 WTBot 需要停止和《战争雷霆》数据相关的服务
好吧，如果这是真的，并且你们真的想扼杀这个项目，并狠狠打击社区的热情的话。

请使用贵司的认证邮箱，向 [axiangcoding@gmail.com](mailto:axiangcoding@gmail.com) 发送邮件。WTBot 的开发者将和你们进行进一步的沟通，直至符合你们的要求。
:::

### 数据安全

你可能会好奇，WTBot 会不会拿到你的战雷账号的一些隐私数据？邮箱？甚至是密码？答案是：**绝对不会**。

WTBot 所使用的数据均是公开数据，也就是你要么在游戏客户端里能看到的数据，要么是在官网能看到的数据。除此之外，任何隐私数据都不会被 WTBot 获取。

也正因如此，使用 WTBot 查询任何账号的数据都不会引发任何形式的封号风险。

## 第三方接口

为了确保 WTBot 的数据来源的多样性，我们也将接入第三方网站的接口。这会在后续接入后详细介绍。

:::tip 我是第三方网站的开发者，我想和 WTBot 合作
我们欢迎任何形式的合作。请向 [axiangcoding@gmail.com](mailto:axiangcoding@gmail.com) 发送邮件，介绍具体事宜。不过也请证明你确实是第三方网站的直接开发者或者维护者。
:::
