---
page_type: sample
products:
- office-outlook
- office-365
languages:
- javascript
extensions:
  contentType: samples
  technologies:
  - Add-ins
  createdDate: 8/18/2015 3:24:21 PM
---
# Outlook-Add-in-ForwardEmail
本示例应用介绍如何使用 Outlook 相关邮件应用中的 JavaScript 和 Exchange Web 服务将当前邮件项转发到用户定义的一组电子邮件地址，并可选择随转发的电子邮件一起包含用户定义的注释。

**示例应用的说明**：
图 1 显示了 Outlook Web Access 中用户电子邮件应用栏中提供的示例邮件应用。

![图 1：应用栏中的示例邮件应用。](/description/c3d5f40e-654f-493c-892d-73cc8f18b458image.jpg)


用户选择应用栏中的邮件应用时，该应用的完整用户界面视图将展开。然后，用户可在提供的空白位置键入以分号分隔的电子邮件地址，还可以输入想要与转发的电子邮件一起发送的任何注释。

最后，用户在该应用的用户界面中选择“前往!”按钮时，JavaScript 代码会将电子邮件转发到用户输入的每个地址，并随转发的电子邮件一起包含“注释”文本框中输入的所有注释。随后，该应用的用户界面将显示一条消息，指示操作成功还是失败。

**先决条件**


本示例应用需要：

* Visual Studio 2012 (RTM)。
* 适用于 Visual Studio 2012 (RTM) 的 Office 2013 工具。
* 对 Office 365 开发人员网站（极力推荐）或本地安装的 Exchange Server 2013 的访问权。你可以[参加 Office 365 开发人员计划并获取为期 1 年的免费 Office 365 订阅](https://aka.ms/devprogramsignup)。

**示例应用的主要组件**

示例应用包含：

* OutlookEmailForwarder 项目，其中包含：
* OutlookEmailForwarder.xml 清单文件。
* OutlookEmailForwarderWeb 项目，其中包含多个模板文件。但是，已在本示例解决方案中开发的文件包括：
* OutlookEmailForwarder.html（在 Pages 文件夹中）。这包含任务窗格中显示的 HTML 用户界面。它由简单的 HTML、两个文本输入控件和一个按钮输入控件组成。
* OutlookEmailForwarder.js（在 Scripts 文件夹中）。此脚本文件包含加载应用时运行的代码。

所有其他文件由 Office 应用的 Visual Studio 项目模板自动提供，并且在本示例应用的开发中未经修改。

**配置示例应用**

若要测试示例应用，请在 Office 365 开发人员网站中注册，然后向该网站上配置的电子邮件帐户发送至少一封电子邮件，然后再运行本示例应用。或者，你可以设置本地安装的 Exchange Server 2013，确保至少配置了一个邮箱，然后向该帐户发送至少一封电子邮件，然后再运行本示例应用。无需其他配置。

**生成示例应用**

按 Ctrl+Shift+B 键生成解决方案。

**运行并测试示例应用**

1. 按 F5 键以运行该应用。随后将出现以下对话框。
![图 4：“连接到 Exchange 电子邮件帐户”对话框](/description/image.jpg)


2. 输入你的 Office 365 开发人员网站凭据，然后选择“连接”按钮，使应用能够自动发现 Exchange Web 服务 URL 和 Outlook Web Access URL 以便用于部署并运行本示例应用。
3. 随后可能会提示你登录 Office 365 开发人员网站的 Outlook Web Access。如果出现此提示，请输入步骤 2 中所用的凭据。
4. 然后，你可以按照本文档开头讨论的步骤查看该应用的运行效果。

**疑难解答**

如果尝试使用本地安装的 Exchange Server，请咨询 Exchange 管理员以确保正确配置 Exchange Server 2013。建议在 Office 365 开发人员网站中注册帐户来测试本示例应用，因为本地安装的 Exchange Server 2013 的设置过程可能非常复杂且耗时。

**更改日志**

* 首次发布：2013 年 4 月 15 日。
* GitHub 发布：2015 年 8 月 19 日

**相关内容**

* [更多加载项示例](https://github.com/OfficeDev?utf8=%E2%9C%93&query=-Add-in)
* [生成 Office 应用](http://msdn.microsoft.com/library/office/jj220060.aspx)
* [Outlook 邮件应用](http://msdn.microsoft.com/library/office/fp161135.aspx)
* [在 Office 365 开发人员网站中注册](http://msdn.microsoft.com/library/fp179924.aspx)


此项目遵循 [Microsoft 开放源代码行为准则](https://opensource.microsoft.com/codeofconduct/)。有关详细信息，请参阅[行为准则 FAQ](https://opensource.microsoft.com/codeofconduct/faq/)。如有其他任何问题或意见，也可联系 [opencode@microsoft.com](mailto:opencode@microsoft.com)。
