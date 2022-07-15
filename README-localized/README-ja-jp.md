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
このサンプル アプリでは、Outlook のメール アプリで JavaScript および Exchange Web サービスを使用して、現在のメール アイテムをユーザー定義の電子メール アドレスのリストに転送し、必要に応じて転送された電子メールにユーザー定義のコメントを含める方法を示します。

**サンプルの説明**
図 1 は、Outlook Web Access のユーザーの電子メールのアプリ バーで使用できるサンプル メール アプリを示しています。

![図 1. アプリ バーのサンプル メール アプリ。](/description/c3d5f40e-654f-493c-892d-73cc8f18b458image.jpg)アプリ バーのサンプル メール アプリ。](/description/c3d5f40e-654f-493c-892d-73cc8f18b458image.jpg)


ユーザーがアプリ バーでメール アプリを選択すると、アプリのフル ユーザー インターフェイスが表示されます。次にユーザーは、提供されたスペースにセミコロンで区切られた電子メール アドレスを入力し、転送された電子メールとともに送信するコメントをオプションとして入力できます。

最後に、ユーザーがアプリのユーザー インターフェイスで [Go!]ボタンを選択すると、JavaScript コードはユーザーが入力した各アドレスにメールを転送し、転送されたメールにコメント テキスト ボックスのコメントを含めます。アプリのユーザー インターフェイスには、操作の成功または失敗を示すメッセージが表示されます。

**前提条件**


このサンプルには以下のものが必要です。

* Visual Studio 2012 (RTM)。
* Visual Studio 2012 (RTM) 用の Office 2013 ツール。
* Office 365 開発者向けサイトへのアクセス (強く推奨) または Exchange Server 2013 のローカル インストール。[Office 365 Developer プログラムに参加すると、Office 365 の 1 年間無料のサブスクリプションを取得](https://aka.ms/devprogramsignup)できます。

**サンプルの主な構成要素**

サンプルアプリには以下のものが含まれます。

* 以下を含む OutlookEmailForwarder プロジェクト:
* OutlookEmailForwarder.xml マニフェスト ファイル。
* 複数のテンプレート ファイルを含む OutlookEmailForwarderWeb プロジェクト。ただし、このサンプル ソリューションの一部として開発されたファイルは次のとおりです。
* OutlookEmailForwarder.html (Pages フォルダー内)。これには、作業ウィンドウに表示される HTML ユーザー インターフェイスが含まれます。シンプルな HTML、2 つのテキスト入力コントロール、およびボタン入力コントロールで構成されています。
* OutlookEmailForwarder.js (Scripts フォルダー内)。このスクリプト ファイルには、アプリの読み込み時に実行されるコードが含まれています。

他のすべてのファイルは Office 用アプリの Visual Studio プロジェクト テンプレートによって自動的に提供されたもので、このサンプル アプリの開発では変更されていません。

**サンプルを構成する**

サンプルをテストするには、Office 365 開発者向けサイトにサインアップし、このサンプルを実行する前に、そこで構成したメール アカウントに少なくとも 1 つのメールを送信します。または、Exchange Server 2013 のローカル インストールをセットアップし、少なくとも 1 つのメールボックスが構成されていることを確認してから、このサンプルを実行する前に少なくとも 1 つのメールをそのアカウントに送信します。その他の構成は必要ありません。

**サンプルをビルドする**

Ctrl + Shift + B キーを押して、ソリューションをビルドします。

**サンプルを実行してテストする**

1. F5 キーを選択してアプリを実行します。以下のダイアログ ボックスが表示されます
![図 4. Exchange 電子メール アカウント ダイアログ ボックスに接続する](/description/image.jpg)Exchange 電子メール アカウント ダイアログ ボックスに接続する](/description/image.jpg)


2. Office 365 開発者向けサイトの資格情報を入力し、[接続] ボタンを選択して、サンプルを展開および実行するために必要な Exchange Web サービス URL および Outlook Web Access URL をアプリが自動的に検出できるようにします。
3. その後、Office 365 開発者向けサイトの Outlook Web Access にログオンするように求められる場合があります。その場合、手順 2 で使用したものと同じ資格情報を入力します。
4. その後、このドキュメントの冒頭で説明した手順に従って、アプリの動作を確認できます。

**トラブルシューティング**

Exchange Server のローカル インストールを使用する場合は、Exchange 管理者に依頼して、Exchange Server 2013 が正しく構成されていることを確認してください。Exchange Server 2013 のローカル インストールはセットアップが複雑で時間がかかる可能性があるため、Office 365 開発者向けサイトにサインアップしてこのサンプルをテストすることをお勧めします。

**変更ログ**

* 最初のリリース:2013 年 4 月 15 日
* GitHub リリース:2015 年 8 月 19 日

**関連コンテンツ**

* [その他のアドイン サンプル](https://github.com/OfficeDev?utf8=%E2%9C%93&query=-Add-in)
* [Office 用アプリの構築](http://msdn.microsoft.com/library/office/jj220060.aspx)
* [Outlook 用メール アプリ](http://msdn.microsoft.com/library/office/fp161135.aspx)
* [Office 365 開発者向けサイトにサインアップする](http://msdn.microsoft.com/library/fp179924.aspx)


このプロジェクトでは、[Microsoft オープン ソース倫理規定](https://opensource.microsoft.com/codeofconduct/) が採用されています。詳細については、「[倫理規定の FAQ](https://opensource.microsoft.com/codeofconduct/faq/)」を参照してください。また、その他の質問やコメントがあれば、[opencode@microsoft.com](mailto:opencode@microsoft.com) までお問い合わせください。
