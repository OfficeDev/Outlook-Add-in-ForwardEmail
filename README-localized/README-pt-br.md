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
Este aplicativo de exemplo mostra como usar o JavaScript e Serviços Web do Exchange em um aplicativo de email do Outlook para encaminhar os itens de email atuais a uma lista de endereços de email definidos pelo usuário e, opcionalmente, incluir comentários definidos pelo usuário no email encaminhado.

**Descrição do exemplo**
A Figura 1 mostra o aplicativo de email de exemplo disponível na barra de aplicativos do email do usuário no Outlook Web Access.

![Figura 1. O aplicativo de email de exemplo na barra de aplicativos.](/description/c3d5f40e-654f-493c-892d-73cc8f18b458image.jpg)


Quando o usuário escolhe o aplicativo de email na barra de aplicativos, a interface do usuário completa do aplicativo se expande na exibição. Em seguida, o usuário pode digitar os endereços de email separados por pontos e vírgulas no espaço fornecido e, opcionalmente, todos os comentários que desejam enviar com o email encaminhado.

Por fim, quando o usuário escolher a o botão Ir! na interface do usuário do aplicativo, o código JavaScript encaminha os emails para cada um dos endereços digitados pelo usuário e inclui todos os comentários da caixa de texto Comentários no email encaminhado. Assim, a interface do usuário do aplicativo mostra uma mensagem indicando que a operação foi bem-sucedida ou falhou.

**Pré-requisitos**


Esse exemplo requer:

* Visual Studio 2012 (RTM).
* Ferramentas do Office 2013 para Visual Studio 2012 (RTM).
* O acesso a um site do Office 365 Developer (altamente recomendado) ou a uma instalação local do Exchange Server 2013. Você pode [participar do Programa do Office 365 Developer e obter uma assinatura gratuita de um ano do Office 365](https://aka.ms/devprogramsignup).

**Componentes principais do exemplo**

O aplicativo de exemplo contém:

* O projeto OutlookEmailForwarder, que contém:
* O arquivo de manifesto OutlookEmailForwarder.xml.
* O projeto OutlookEmailForwarderWeb, que contém vários arquivos de modelo. No entanto, os arquivos que foram desenvolvidos como parte dessa solução de exemplo incluem:
* O OutlookEmailForwarder.html (na pasta Páginas), que contém a interface do usuário em HTML exibida no painel de tarefas. Ela é composta por um HTML simples, dois controles de entrada de texto e um controle de entrada de botão.
* O OutlookEmailForwarder.js (na pasta Scripts). Esse arquivo de script contém um código que é executado quando o aplicativo é carregado.

Todos os outros arquivos são fornecidos automaticamente pelo modelo de projeto do Visual Studio para aplicativos do Office, os quais não foram modificados no desenvolvimento desse aplicativo de exemplo.

**Configurar o exemplo**

Para testar o exemplo, inscreva-se em um site do Office 365 Developer e envie pelo menos um email para uma conta de email que você configurou nesse local antes de executar esse exemplo. Como alternativa, você pode configurar uma instalação local do Exchange Server 2013 e garantir que pelo menos uma caixa de correio tenha sido configurada para você; depois, envie pelo menos um email para essa conta antes de executar esse exemplo. Nenhuma outra configuração é necessária.

**Criar o exemplo**

Escolha as teclas Ctrl+Shift+B para criar a solução.

**Executar e testar o exemplo**

1. Pressione a tecla F5 para executar o aplicativo. A caixa de diálogo a seguir será exibida.
![Figura 4. Caixa de diálogo Conectar-se à conta de email do Exchange](/description/image.jpg)


2. Insira suas credenciais de site do Office 365 Developer e depois selecione o botão Conectar para habilitar o aplicativo a descobrir automaticamente a URL dos serviços Web do Exchange e a URL do Outlook Web Access que será necessária para implantar e executar o exemplo.
3. Em seguida, você pode ser solicitado a fazer logon no Outlook Web Access para o seu site do Office 365 Developer. Se isso ocorrer, insira as mesmas credenciais usadas na Etapa 2.
4. Depois, você pode seguir as etapas discutidas no início deste documento para ver o aplicativo em ação.

**Solução de problemas**

Caso esteja tentando usar uma instalação local do Exchange Server, peça a um administrador do Exchange para verificar que o Exchange Server 2013 esteja configurado corretamente. É recomendável que você se inscreva em um site do Office 365 Developer para testar esse exemplo, uma vez que uma instalação local do Exchange Server 2013 pode ser complexa e demorada.

**Log de mudanças**

* Primeiro lançamento: 15 de abril de 2013.
* Versão do GitHub: 19 de agosto de 2015.

**Conteúdo relacionado**

* [Mais exemplos de suplementos](https://github.com/OfficeDev?utf8=%E2%9C%93&query=-Add-in)
* [Compilar aplicativos do Office](http://msdn.microsoft.com/library/office/jj220060.aspx)
* [Aplicativos de email para Outlook](http://msdn.microsoft.com/library/office/fp161135.aspx)
* [Inscrever-se em um site do Office 365 Developer](http://msdn.microsoft.com/library/fp179924.aspx)


Este projeto adotou o [Código de Conduta de Código Aberto da Microsoft](https://opensource.microsoft.com/codeofconduct/).  Para saber mais, confira [Perguntas frequentes sobre o Código de Conduta](https://opensource.microsoft.com/codeofconduct/faq/) ou contate [opencode@microsoft.com](mailto:opencode@microsoft.com) se tiver outras dúvidas ou comentários.
